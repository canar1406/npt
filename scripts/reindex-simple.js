const { algoliasearch } = require('algoliasearch');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Khởi tạo client Algolia với Admin API key
const client = algoliasearch('IWKUXCUYNB', 'c1d8c905c6b5a7a832c0914a66a98879');

// Hàm đọc file markdown và extract content theo format DocSearch v3
function extractDocSearchV3Content(filePath) {
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
    
    if (!url.startsWith('/')) {
      url = '/' + url;
    }
    
    const records = [];
    const lines = body.split('\n');
    
    let currentContent = [];
    let currentH0 = frontmatter.title || 'Documentation';
    let currentH1 = null;
    let currentH2 = null;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      if (line.startsWith('# ')) {
        // Flush previous content
        if (currentContent.length > 0) {
          addDocSearchRecord(records, filePath, currentContent.join(' '), currentH0, currentH1, currentH2, url);
          currentContent = [];
        }
        currentH1 = line.replace(/^# /, '');
        currentH2 = null;
      } else if (line.startsWith('## ')) {
        // Flush previous content
        if (currentContent.length > 0) {
          addDocSearchRecord(records, filePath, currentContent.join(' '), currentH0, currentH1, currentH2, url);
          currentContent = [];
        }
        currentH2 = line.replace(/^## /, '');
      } else if (line.startsWith('### ')) {
        // Flush previous content
        if (currentContent.length > 0) {
          addDocSearchRecord(records, filePath, currentContent.join(' '), currentH0, currentH1, currentH2, url);
          currentContent = [];
        }
        // Treat h3 as content for now
        currentContent.push(line.replace(/^### /, ''));
      } else if (line.length > 0) {
        // Clean the line
        let cleanLine = line
          .replace(/```[\s\S]*?```/g, '')
          .replace(/`([^`]+)`/g, '$1')
          .replace(/\*\*([^*]+)\*\*/g, '$1')
          .replace(/\*([^*]+)\*/g, '$1')
          .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
          .replace(/!\[([^\]]*)\]\([^)]+\)/g, '')
          .trim();
        
        if (cleanLine.length > 0) {
          currentContent.push(cleanLine);
        }
      }
    }
    
    // Flush remaining content
    if (currentContent.length > 0) {
      addDocSearchRecord(records, filePath, currentContent.join(' '), currentH0, currentH1, currentH2, url);
    }
    
    return records;
  } catch (error) {
    console.error(`❌ Lỗi khi đọc file ${filePath}:`, error.message);
    return [];
  }
}

function addDocSearchRecord(records, filePath, content, h0, h1, h2, url) {
  if (!content || content.trim().length < 10) return;
  
  const cleanContent = content.trim();
  const objectID = `${filePath.replace(process.cwd(), '').replace(/\\/g, '/')}_${records.length}`;
  
  // Format theo DocSearch v3
  const record = {
    objectID,
    content: cleanContent,
    type: 'content',
    url: url,
    hierarchy: {
      lvl0: h0,
      lvl1: h1,
      lvl2: h2,
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

// Hàm chính
async function reindexForDocSearch() {
  try {
    console.log('🔍 Tìm kiếm file markdown...');
    const docsDir = path.join(process.cwd(), 'docs');
    const markdownFiles = findMarkdownFiles(docsDir);
    
    console.log(`📚 Tìm thấy ${markdownFiles.length} file markdown`);
    
    const allRecords = [];
    
    for (const filePath of markdownFiles) {
      console.log(`📄 Xử lý: ${path.relative(process.cwd(), filePath)}`);
      const records = extractDocSearchV3Content(filePath);
      allRecords.push(...records);
    }
    
    console.log(`📝 Tạo ${allRecords.length} records`);
    
    // Clear và upload lại
    console.log('🗑️ Xóa index cũ...');
    await client.clearObjects({ indexName: 'math-docs' });
    
    console.log('⬆️ Upload records mới...');
    if (allRecords.length > 0) {
      await client.saveObjects({ indexName: 'math-docs', objects: allRecords });
    }
    
    // Cấu hình lại settings đơn giản cho DocSearch
    console.log('⚙️ Cấu hình settings...');
    await client.setSettings({
      indexName: 'math-docs',
      indexSettings: {
        searchableAttributes: [
          'hierarchy.lvl0',
          'hierarchy.lvl1', 
          'hierarchy.lvl2',
          'content'
        ],
        attributesToRetrieve: [
          'hierarchy',
          'content',
          'url',
          'type'
        ],
        attributesToHighlight: [
          'hierarchy.lvl0',
          'hierarchy.lvl1',
          'hierarchy.lvl2', 
          'content'
        ],
        attributesToSnippet: [
          'content:10'
        ],
        distinct: true,
        attributeForDistinct: 'url',
        customRanking: [
          'desc(weight.pageRank)',
          'desc(weight.level)',
          'asc(weight.position)'
        ],
        highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
        highlightPostTag: '</span>',
        minWordSizefor1Typo: 3,
        minWordSizefor2Typos: 7,
        allowTyposOnNumericTokens: false,
        minProximity: 1,
        ignorePlurals: true,
        removeWordsIfNoResults: 'allOptional'
      }
    });
    
    console.log('✅ Hoàn thành!');
    
    // Test
    console.log('🔍 Test search...');
    const testResult = await client.search({
      requests: [{
        indexName: 'math-docs',
        query: 'số'
      }]
    });
    
    console.log(`📊 Kết quả test "số": ${testResult.results[0].hits.length} hits`);
    if (testResult.results[0].hits.length > 0) {
      console.log('🎉 Test thành công!');
    }
    
  } catch (error) {
    console.error('❌ Lỗi:', error);
  }
}

// Run
if (require.main === module) {
  reindexForDocSearch();
}

module.exports = { reindexForDocSearch };
