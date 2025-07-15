const { algoliasearch } = require('algoliasearch');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const client = algoliasearch('IWKUXCUYNB', 'c1d8c905c6b5a7a832c0914a66a98879');

async function fixDocSearchIndex() {
  try {
    console.log('🔧 Fixing DocSearch index...');
    
    // Tạo records test cơ bản
    const testRecords = [
      {
        objectID: 'test-1',
        content: 'Toán học là môn học nghiên cứu về số, hình học, và các cấu trúc trừu tượng.',
        type: 'content',
        url: '/docs/intro',
        hierarchy: {
          lvl0: 'Giới thiệu',
          lvl1: 'Toán học cơ bản',
          lvl2: null,
          lvl3: null,
          lvl4: null,
          lvl5: null,
          lvl6: null
        }
      },
      {
        objectID: 'test-2', 
        content: 'Đại số là lĩnh vực toán học nghiên cứu về các phép toán và cấu trúc đại số.',
        type: 'content',
        url: '/docs/dai-so',
        hierarchy: {
          lvl0: 'Đại số',
          lvl1: 'Đại số cơ bản',
          lvl2: null,
          lvl3: null,
          lvl4: null,
          lvl5: null,
          lvl6: null
        }
      },
      {
        objectID: 'test-3',
        content: 'Hình học là ngành toán học nghiên cứu về hình dạng, kích thước và vị trí.',
        type: 'content', 
        url: '/docs/hinh-hoc',
        hierarchy: {
          lvl0: 'Hình học',
          lvl1: 'Hình học cơ bản',
          lvl2: null,
          lvl3: null,
          lvl4: null,
          lvl5: null,
          lvl6: null
        }
      },
      {
        objectID: 'test-4',
        content: 'Số học là lĩnh vực toán học cơ bản nhất, nghiên cứu về các con số.',
        type: 'content',
        url: '/docs/so-hoc',
        hierarchy: {
          lvl0: 'Số học',
          lvl1: 'Số học cơ bản', 
          lvl2: null,
          lvl3: null,
          lvl4: null,
          lvl5: null,
          lvl6: null
        }
      },
      {
        objectID: 'test-5',
        content: 'Giải tích là ngành toán học nghiên cứu về giới hạn, đạo hàm, tích phân.',
        type: 'content',
        url: '/docs/giai-tich',
        hierarchy: {
          lvl0: 'Giải tích',
          lvl1: 'Giải tích cơ bản',
          lvl2: null,
          lvl3: null,
          lvl4: null,
          lvl5: null,
          lvl6: null
        }
      }
    ];
    
    console.log('🗑️ Clearing index...');
    await client.clearObjects({ indexName: 'math-docs' });
    
    console.log('⬆️ Uploading test records...');
    await client.saveObjects({ indexName: 'math-docs', objects: testRecords });
    
    console.log('⚙️ Setting up index configuration...');
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
        camelCaseAttributes: [
          'hierarchy',
          'content'
        ],
        decompoundedAttributes: {},
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
    
    console.log('✅ Index setup complete!');
    
    // Test search
    console.log('🔍 Testing search...');
    const result = await client.search({
      requests: [{
        indexName: 'math-docs',
        query: 'toán',
        hitsPerPage: 10
      }]
    });
    
    console.log(`📊 Search results: ${result.results[0].hits.length} hits`);
    
    if (result.results[0].hits.length > 0) {
      console.log('🎉 Search working! Sample result:');
      console.log(`- Content: ${result.results[0].hits[0].content}`);
      console.log(`- URL: ${result.results[0].hits[0].url}`);
      console.log(`- Hierarchy: ${result.results[0].hits[0].hierarchy.lvl0}`);
    } else {
      console.log('❌ No results found');
    }
    
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

fixDocSearchIndex();
