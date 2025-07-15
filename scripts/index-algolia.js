const { algoliasearch } = require('algoliasearch');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Khởi tạo client Algolia với credentials của bạn
const client = algoliasearch('IWKUXCUYNB', 'c1d8c905c6b5a7a832c0914a66a98879');

// Hàm đọc file markdown và extract content
function extractMarkdownContent(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { data: frontmatter, content: body } = matter(content);
    
    // Tạo URL từ file path
    const url = filePath
      .replace(process.cwd(), '')
      .replace(/\\/g, '/')
      .replace('/docs/', '/docs/')
      .replace('.md', '')
      .replace(/\/index$/, '');
    
    // Tách content thành các đoạn nhỏ
    const paragraphs = body.split('\n\n').filter(p => p.trim().length > 0);
    const records = [];
    
    paragraphs.forEach((paragraph, index) => {
      const cleanParagraph = paragraph
        .replace(/```[\s\S]*?```/g, '') // Loại bỏ code blocks
        .replace(/#+\s*/g, '') // Loại bỏ markdown headers
        .replace(/\*\*/g, '') // Loại bỏ bold
        .replace(/\*/g, '') // Loại bỏ italic
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Loại bỏ links
        .trim();
      
      if (cleanParagraph.length > 10) {
        // Tạo object theo format DocSearch
        const record = {
          objectID: `${filePath.replace(process.cwd(), '').replace(/\\/g, '/')}_${index}`,
          content: cleanParagraph,
          type: 'content',
          url: url || '/docs/',
          hierarchy: {
            lvl0: frontmatter.sidebar_label || frontmatter.title || 'Documentation',
            lvl1: frontmatter.title || path.basename(filePath, '.md'),
            lvl2: null,
            lvl3: null,
            lvl4: null,
            lvl5: null,
            lvl6: null
          },
          anchor: null
        };
        
        records.push(record);
      }
    });
    
    return records;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
    return [];
  }
}

// Hàm tìm tất cả file markdown
function findMarkdownFiles(dir) {
  const files = [];
  
  function walk(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
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
    const records = [];
    for (const file of markdownFiles) {
      const fileRecords = extractMarkdownContent(file);
      if (fileRecords && fileRecords.length > 0) {
        records.push(...fileRecords);
      }
    }
    
    console.log(`📝 Đã xử lý ${records.length} records`);
    
    // Upload lên Algolia
    if (records.length > 0) {
      console.log('📤 Đang upload lên Algolia...');
      
      const result = await client.saveObjects({
        indexName: 'math-docs',
        objects: records
      });
      
      console.log('✅ Upload thành công!');
      console.log(`🎉 Đã index ${records.length} documents`);
      
      // Cấu hình index settings cho DocSearch
      await client.setSettings({
        indexName: 'math-docs',
        indexSettings: {
          attributesToRetrieve: [
            'hierarchy.lvl0',
            'hierarchy.lvl1', 
            'hierarchy.lvl2',
            'hierarchy.lvl3',
            'hierarchy.lvl4',
            'hierarchy.lvl5',
            'hierarchy.lvl6',
            'content',
            'type',
            'url',
            'anchor'
          ],
          attributesToHighlight: [
            'hierarchy.lvl0',
            'hierarchy.lvl1',
            'hierarchy.lvl2', 
            'hierarchy.lvl3',
            'hierarchy.lvl4',
            'hierarchy.lvl5',
            'hierarchy.lvl6',
            'content'
          ],
          attributesToSnippet: [
            'content:10'
          ],
          camelCaseAttributes: [
            'hierarchy',
            'content'
          ],
          searchableAttributes: [
            'unordered(hierarchy.lvl0)',
            'unordered(hierarchy.lvl1)',
            'unordered(hierarchy.lvl2)',
            'unordered(hierarchy.lvl3)',
            'unordered(hierarchy.lvl4)',
            'unordered(hierarchy.lvl5)',
            'unordered(hierarchy.lvl6)',
            'content'
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
      
    } else {
      console.log('❌ Không có records nào để upload');
    }
    
  } catch (error) {
    console.error('❌ Lỗi khi index documents:', error);
  }
}

// Chạy script
if (require.main === module) {
  indexDocuments();
}

module.exports = { indexDocuments };
