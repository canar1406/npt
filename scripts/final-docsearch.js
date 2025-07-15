const { algoliasearch } = require('algoliasearch');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const client = algoliasearch('IWKUXCUYNB', 'c1d8c905c6b5a7a832c0914a66a98879');

async function createDocSearchIndex() {
  try {
    console.log('🔧 Creating DocSearch v3 index...');
    
    // Clear index first
    console.log('🗑️ Clearing index...');
    await client.clearObjects({ indexName: 'math-docs' });
    
    const records = [];
    
    // Process docs folder
    const docsPath = path.join(__dirname, '..', 'docs');
    
    function processMarkdownFile(filePath, relativePath) {
      const content = fs.readFileSync(filePath, 'utf8');
      const { data: frontmatter, content: markdownContent } = matter(content);
      
      // Remove markdown syntax and get clean text
      const cleanContent = markdownContent
        .replace(/#{1,6}\s/g, '') // Remove headers
        .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
        .replace(/\*(.*?)\*/g, '$1') // Remove italic
        .replace(/`(.*?)`/g, '$1') // Remove code
        .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove links
        .replace(/\n+/g, ' ') // Replace newlines with spaces
        .trim();
      
      // Create URL from file path
      const urlPath = relativePath
        .replace(/\\/g, '/')
        .replace(/\.md$/, '')
        .replace(/\/index$/, '');
      
      const url = urlPath === '' ? '/docs' : `/docs/${urlPath}`;
      
      // Get title from frontmatter or first heading
      const title = frontmatter.title || 
        (markdownContent.match(/^#+\s+(.+)$/m)?.[1]) || 
        path.basename(filePath, '.md');
      
      // Split content into chunks
      const chunks = cleanContent.match(/.{1,500}/g) || [cleanContent];
      
      chunks.forEach((chunk, index) => {
        if (chunk.trim()) {
          records.push({
            objectID: `${urlPath}-${index}`,
            content: chunk.trim(),
            url: url,
            type: 'content',
            hierarchy: {
              lvl0: title,
              lvl1: null,
              lvl2: null,
              lvl3: null,
              lvl4: null,
              lvl5: null,
              lvl6: null
            }
          });
        }
      });
    }
    
    // Process all markdown files
    function walkDir(dir, baseDir = dir) {
      const files = fs.readdirSync(dir);
      
      for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          walkDir(fullPath, baseDir);
        } else if (file.endsWith('.md')) {
          const relativePath = path.relative(baseDir, fullPath);
          processMarkdownFile(fullPath, relativePath);
        }
      }
    }
    
    walkDir(docsPath);
    
    // Add some basic Vietnamese test records
    records.push({
      objectID: 'test-toan-hoc',
      content: 'Toán học là khoa học nghiên cứu về số, cấu trúc, không gian và sự biến đổi.',
      url: '/docs/intro',
      type: 'content',
      hierarchy: {
        lvl0: 'Toán học',
        lvl1: 'Giới thiệu',
        lvl2: null,
        lvl3: null,
        lvl4: null,
        lvl5: null,
        lvl6: null
      }
    });
    
    console.log(`📊 Total records: ${records.length}`);
    
    // Upload records in batches
    const batchSize = 100;
    for (let i = 0; i < records.length; i += batchSize) {
      const batch = records.slice(i, i + batchSize);
      await client.saveObjects({ indexName: 'math-docs', objects: batch });
      console.log(`⬆️ Uploaded batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(records.length/batchSize)}`);
    }
    
    // Configure index settings
    console.log('⚙️ Configuring index settings...');
    await client.setSettings({
      indexName: 'math-docs',
      indexSettings: {
        searchableAttributes: [
          'hierarchy.lvl0',
          'hierarchy.lvl1', 
          'hierarchy.lvl2',
          'hierarchy.lvl3',
          'hierarchy.lvl4',
          'hierarchy.lvl5',
          'hierarchy.lvl6',
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
          'hierarchy.lvl3',
          'hierarchy.lvl4',
          'hierarchy.lvl5',
          'hierarchy.lvl6',
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
    
    console.log('✅ Index created successfully!');
    
    // Test search
    console.log('🔍 Testing search...');
    const searchResults = await client.search({
      requests: [{
        indexName: 'math-docs',
        query: 'toán',
        hitsPerPage: 5
      }]
    });
    
    console.log(`📊 Search results: ${searchResults.results[0].hits.length} hits`);
    
    if (searchResults.results[0].hits.length > 0) {
      console.log('🎉 Sample results:');
      searchResults.results[0].hits.forEach((hit, i) => {
        console.log(`${i + 1}. ${hit.hierarchy.lvl0} - ${hit.content.substring(0, 50)}...`);
      });
    }
    
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

createDocSearchIndex();
