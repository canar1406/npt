const { algoliasearch } = require('algoliasearch');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const client = algoliasearch('IWKUXCUYNB', 'c1d8c905c6b5a7a832c0914a66a98879');

function extractContent(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { data: frontmatter, content: body } = matter(content);
    
    // Tạo URL đúng format Docusaurus
    let url = filePath
      .replace(process.cwd(), '')
      .replace(/\\/g, '/')
      .replace('/docs/', '/docs/')
      .replace('.md', '');
    
    if (url.endsWith('/index')) {
      url = url.replace('/index', '');
    }
    
    if (!url.startsWith('/')) {
      url = '/' + url;
    }
    
    // Tạo records theo format DocSearch v3
    const records = [];
    const lines = body.split('\n');
    
    let currentH0 = frontmatter.title || frontmatter.sidebar_label || 'Documentation';
    let currentH1 = null;
    let currentH2 = null;
    let content_buffer = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      if (line.startsWith('# ')) {
        if (content_buffer.length > 0) {
          addRecord(records, content_buffer.join(' '), currentH0, currentH1, currentH2, url);
          content_buffer = [];
        }
        currentH1 = line.replace('# ', '');
        currentH2 = null;
      } else if (line.startsWith('## ')) {
        if (content_buffer.length > 0) {
          addRecord(records, content_buffer.join(' '), currentH0, currentH1, currentH2, url);
          content_buffer = [];
        }
        currentH2 = line.replace('## ', '');
      } else if (line.length > 0) {
        const clean = line
          .replace(/```[\s\S]*?```/g, '')
          .replace(/`([^`]+)`/g, '$1')
          .replace(/\*\*([^*]+)\*\*/g, '$1')
          .replace(/\*([^*]+)\*/g, '$1')
          .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
          .replace(/!\[([^\]]*)\]\([^)]+\)/g, '')
          .replace(/#+\s*/g, '')
          .trim();
        
        if (clean.length > 0) {
          content_buffer.push(clean);
        }
      }
    }
    
    if (content_buffer.length > 0) {
      addRecord(records, content_buffer.join(' '), currentH0, currentH1, currentH2, url);
    }
    
    return records;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return [];
  }
}

function addRecord(records, content, h0, h1, h2, url) {
  if (!content || content.length < 10) return;
  
  const record = {
    objectID: `${url}_${records.length}`,
    content: content,
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

async function main() {
  try {
    console.log('🔍 Scanning markdown files...');
    const docsDir = path.join(process.cwd(), 'docs');
    const files = findMarkdownFiles(docsDir);
    
    console.log(`📚 Found ${files.length} files`);
    
    const allRecords = [];
    for (const file of files) {
      console.log(`📄 Processing: ${path.relative(process.cwd(), file)}`);
      const records = extractContent(file);
      allRecords.push(...records);
    }
    
    console.log(`📝 Created ${allRecords.length} records`);
    
    // Clear và upload
    console.log('🗑️ Clearing old index...');
    await client.clearObjects({ indexName: 'math-docs' });
    
    console.log('⬆️ Uploading new data...');
    await client.saveObjects({ indexName: 'math-docs', objects: allRecords });
    
    // Cấu hình settings đơn giản
    console.log('⚙️ Setting up index...');
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
        highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
        highlightPostTag: '</span>',
        minWordSizefor1Typo: 3,
        minWordSizefor2Typos: 7,
        allowTyposOnNumericTokens: false,
        ignorePlurals: true,
        removeWordsIfNoResults: 'allOptional'
      }
    });
    
    console.log('✅ Done! Testing...');
    
    // Test
    const result = await client.search({
      requests: [{
        indexName: 'math-docs',
        query: 'toán'
      }]
    });
    
    console.log(`🎉 Test result: ${result.results[0].hits.length} hits`);
    
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

main();
