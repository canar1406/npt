const { algoliasearch } = require('algoliasearch');

// Test với Search-Only API key (như trong Docusaurus)
const client = algoliasearch('IWKUXCUYNB', '658663484ce56914c8d325de361927bc');

async function testDocSearch() {
  try {
    console.log('🔍 Testing DocSearch với Search-Only API key...');
    
    // Test search như DocSearch component sẽ làm
    const searchResult = await client.search({
      requests: [
        {
          indexName: 'math-docs',
          query: 'số',
          hitsPerPage: 20,
          page: 0,
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
          highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
          highlightPostTag: '</span>',
          snippetEllipsisText: '…'
        }
      ]
    });
    
    console.log(`📊 Kết quả: ${searchResult.results[0].hits.length} hits`);
    
    if (searchResult.results[0].hits.length > 0) {
      console.log('✅ Search thành công!');
      console.log('📄 Kết quả đầu tiên:');
      const firstHit = searchResult.results[0].hits[0];
      console.log(`- URL: ${firstHit.url}`);
      console.log(`- Content: ${firstHit.content?.substring(0, 100)}...`);
      console.log(`- Hierarchy: ${JSON.stringify(firstHit.hierarchy)}`);
    } else {
      console.log('❌ Không tìm thấy kết quả');
    }
    
    // Test với "toán"
    console.log('\n🔍 Testing với "toán"...');
    const searchResult2 = await client.search({
      requests: [
        {
          indexName: 'math-docs',
          query: 'toán',
          hitsPerPage: 20,
          page: 0
        }
      ]
    });
    
    console.log(`📊 Kết quả "toán": ${searchResult2.results[0].hits.length} hits`);
    
  } catch (error) {
    console.error('❌ Lỗi:', error);
  }
}

testDocSearch();
