const { algoliasearch } = require('algoliasearch');

// Khởi tạo client với credentials
const client = algoliasearch('IWKUXCUYNB', '658663484ce56914c8d325de361927bc');

// Hàm test search
async function testSearch() {
  try {
    console.log('🔍 Testing search...');
    
    // Test search với từ đơn giản
    const searchResult = await client.searchSingleIndex({
      indexName: 'math-docs',
      searchParams: {
        query: 'chào',
        hitsPerPage: 10,
        attributesToRetrieve: [
          'hierarchy.lvl0',
          'hierarchy.lvl1',
          'content',
          'url'
        ]
      }
    });
    
    console.log('📊 Search results:');
    console.log('Total hits:', searchResult.nbHits);
    console.log('Processing time:', searchResult.processingTimeMS + 'ms');
    
    if (searchResult.hits.length > 0) {
      console.log('✅ Found results:');
      searchResult.hits.forEach((hit, index) => {
        console.log(`${index + 1}. ${hit.hierarchy?.lvl1 || 'No title'}`);
        console.log(`   URL: ${hit.url}`);
        console.log(`   Content: ${hit.content ? hit.content.substring(0, 100) + '...' : 'No content'}`);
        console.log('---');
      });
    } else {
      console.log('❌ No results found');
    }
    
    // Test với từ khác
    console.log('\n🔍 Testing with "toán"...');
    const searchResult2 = await client.searchSingleIndex({
      indexName: 'math-docs',
      searchParams: {
        query: 'toán',
        hitsPerPage: 5
      }
    });
    
    console.log('📊 Search results for "toán":');
    console.log('Total hits:', searchResult2.nbHits);
    
    if (searchResult2.hits.length > 0) {
      console.log('✅ Found results:');
      searchResult2.hits.forEach((hit, index) => {
        console.log(`${index + 1}. ${hit.hierarchy?.lvl1 || 'No title'}`);
      });
    } else {
      console.log('❌ No results found');
    }
    
  } catch (error) {
    console.error('❌ Search error:', error);
  }
}

// Chạy test
testSearch();
