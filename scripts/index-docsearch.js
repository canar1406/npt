const { algoliasearch } = require('algoliasearch');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Khởi tạo client Algolia với Admin API key
const client = algoliasearch('IWKUXCUYNB', 'c1d8c905c6b5a7a832c0914a66a98879');

// Hàm đọc file markdown và extract content theo format DocSearch
function extractDocSearchContent(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { data: frontmatter, content: body } = matter(content);
    
    // Tạo URL từ file path
    let url = filePath
      .replace(process.cwd(), '')
      .replace(/\\/g, '/')
      .replace('/docs/', '/docs/')
      .replace('.md', '')
      .replace(/\/index$/, '');
    
    // Đảm bảo URL bắt đầu bằng /
    if (!url.startsWith('/')) {
      url = '/' + url;
    }
    
    // Tách content thành các phần nhỏ
    const lines = body.split('\n').filter(line => line.trim().length > 0);
    const records = [];
    
    let currentH1 = frontmatter.title || 'Documentation';
    let currentH2 = null;
    let currentH3 = null;
    let contentBuffer = [];
    
    lines.forEach((line, index) => {
      // Xử lý headers
      if (line.startsWith('# ')) {
        // Flush buffer trước khi thay đổi h1
        if (contentBuffer.length > 0) {
          addRecord(records, filePath, index, contentBuffer.join(' '), currentH1, currentH2, currentH3, url);
          contentBuffer = [];
        }
        currentH1 = line.replace(/^# /, '').trim();
        currentH2 = null;
        currentH3 = null;
      } else if (line.startsWith('## ')) {
        // Flush buffer trước khi thay đổi h2
        if (contentBuffer.length > 0) {
          addRecord(records, filePath, index, contentBuffer.join(' '), currentH1, currentH2, currentH3, url);
          contentBuffer = [];
        }
        currentH2 = line.replace(/^## /, '').trim();
        currentH3 = null;
      } else if (line.startsWith('### ')) {
        // Flush buffer trước khi thay đổi h3
        if (contentBuffer.length > 0) {
          addRecord(records, filePath, index, contentBuffer.join(' '), currentH1, currentH2, currentH3, url);
          contentBuffer = [];
        }
        currentH3 = line.replace(/^### /, '').trim();
      } else {
        // Thêm content vào buffer
        const cleanLine = line
          .replace(/```[\s\S]*?```/g, '') // Loại bỏ code blocks
          .replace(/\*\*/g, '') // Loại bỏ bold
          .replace(/\*/g, '') // Loại bỏ italic
          .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Loại bỏ links
          .replace(/!\[([^\]]*)\]\([^)]+\)/g, '') // Loại bỏ images
          .trim();
        
        if (cleanLine.length > 0) {
          contentBuffer.push(cleanLine);
        }
      }
    });
    
    // Flush remaining buffer
    if (contentBuffer.length > 0) {
      addRecord(records, filePath, lines.length, contentBuffer.join(' '), currentH1, currentH2, currentH3, url);
    }
    
    return records;
  } catch (error) {
    console.error(`❌ Lỗi khi đọc file ${filePath}:`, error.message);
    return [];
  }
}

// Hàm helper để thêm record
function addRecord(records, filePath, index, content, h1, h2, h3, url) {
  if (content.trim().length < 10) return;
  
  const record = {
    objectID: `${filePath.replace(process.cwd(), '').replace(/\\/g, '/')}_${index}`,
    content: content.trim(),
    type: 'content',
    url: url,
    hierarchy: {
      lvl0: h1,
      lvl1: h2,
      lvl2: h3,
      lvl3: null,
      lvl4: null,
      lvl5: null,
      lvl6: null
    },
    // Thêm các trường quan trọng cho DocSearch
    anchor: h3 ? h3.toLowerCase().replace(/\s+/g, '-') : null,
    content_camel: content.trim(),
    hierarchy_camel: {
      lvl0: h1,
      lvl1: h2,
      lvl2: h3,
      lvl3: null,
      lvl4: null,
      lvl5: null,
      lvl6: null
    },
    hierarchy_radio: {
      lvl0: h1,
      lvl1: h2,
      lvl2: h3,
      lvl3: null,
      lvl4: null,
      lvl5: null,
      lvl6: null
    }
  };
  
  records.push(record);
}

// Hàm tìm tất cả file markdown
function findMarkdownFiles(dir) {
  const files = [];
  
  function walk(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        walk(fullPath);
      } else if (path.extname(item) === '.md') {
        files.push(fullPath);
      }
    }
  }
  
  walk(dir);
  return files;
}

// Hàm chính để index documents
async function indexDocuments() {
  try {
    console.log('🔍 Đang tìm kiếm file markdown...');
    
    // Tìm tất cả file markdown trong thư mục docs
    const docsDir = path.join(process.cwd(), 'docs');
    const markdownFiles = findMarkdownFiles(docsDir);
    
    console.log(`📚 Tìm thấy ${markdownFiles.length} file markdown`);
    
    // Xử lý từng file
    const allRecords = [];
    
    for (const filePath of markdownFiles) {
      console.log(`📄 Đang xử lý: ${path.relative(process.cwd(), filePath)}`);
      const records = extractDocSearchContent(filePath);
      allRecords.push(...records);
    }
    
    console.log(`📝 Đã xử lý ${allRecords.length} records`);
    
    // Sử dụng API v5 - gọi trực tiếp trên client
    console.log('🗑️ Đang xóa dữ liệu cũ...');
    await client.clearObjects({ indexName: 'math-docs' });
    
    console.log('⬆️ Đang upload dữ liệu mới...');
    
    // Upload theo batch (1000 records mỗi lần)
    const batchSize = 1000;
    for (let i = 0; i < allRecords.length; i += batchSize) {
      const batch = allRecords.slice(i, i + batchSize);
      await client.saveObjects({ indexName: 'math-docs', objects: batch });
      console.log(`✅ Uploaded batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(allRecords.length / batchSize)}`);
    }
    
    console.log('✅ Upload thành công!');
    
    // Cấu hình index settings cho DocSearch
    await client.setSettings({
      indexName: 'math-docs',
      indexSettings: {
        searchableAttributes: [
          'unordered(hierarchy.lvl0)',
          'unordered(hierarchy.lvl1)',
          'unordered(hierarchy.lvl2)',
          'unordered(hierarchy.lvl3)',
          'unordered(hierarchy.lvl4)',
          'unordered(hierarchy.lvl5)',
          'unordered(hierarchy.lvl6)',
          'unordered(content)'
        ],
        attributesForFaceting: [
          'type',
          'lang'
        ],
        attributesToRetrieve: [
          'hierarchy',
          'content',
          'anchor',
          'url',
          'url_without_anchor',
          'type'
        ],
        attributesToHighlight: [
          'hierarchy',
          'content'
        ],
        attributesToSnippet: [
          'content:10'
        ],
        camelCaseAttributes: [
          'hierarchy',
          'content'
        ],
        disableTypoToleranceOnAttributes: [
          'hierarchy.lvl0',
          'hierarchy.lvl1',
          'hierarchy.lvl2',
          'hierarchy.lvl3',
          'hierarchy.lvl4',
          'hierarchy.lvl5',
          'hierarchy.lvl6'
        ],
        distinct: true,
        attributeForDistinct: 'url',
        customRanking: [
          'desc(weight.pageRank)',
          'desc(weight.level)',
          'asc(weight.position)'
        ],
        ranking: [
          'words',
          'filters',
          'typo',
          'attribute',
          'proximity',
          'exact',
          'custom'
        ],
        highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
        highlightPostTag: '</span>',
        minWordSizefor1Typo: 3,
        minWordSizefor2Typos: 7,
        allowTyposOnNumericTokens: false,
        minProximity: 1,
        ignorePlurals: true,
        advancedSyntax: true,
        attributeCriteriaComputedByMinProximity: true,
        removeWordsIfNoResults: 'allOptional'
      }
    });
    
    console.log('⚙️ Đã cấu hình index settings');
    
    // Test search
    console.log('🔍 Testing search...');
    const searchResult = await client.search({
      requests: [
        {
          indexName: 'math-docs',
          query: 'toán'
        }
      ]
    });
    
    console.log(`📊 Kết quả test search "toán": ${searchResult.results[0].hits.length} hits`);
    
    if (searchResult.results[0].hits.length > 0) {
      console.log('✅ Search test thành công!');
      console.log('📄 Ví dụ kết quả đầu tiên:');
      console.log(JSON.stringify(searchResult.results[0].hits[0], null, 2));
    } else {
      console.log('⚠️ Không tìm thấy kết quả cho "toán"');
    }
    
  } catch (error) {
    console.error('❌ Lỗi:', error);
    process.exit(1);
  }
}

// Chạy script
if (require.main === module) {
  indexDocuments();
}

module.exports = { indexDocuments };
