const algoliasearch = require('algoliasearch');

const client = algoliasearch('IWKUXCUYNB', 'c1d8c905c6b5a7a832c0914a66a98879');

async function createSearchKey() {
  try {
    console.log('🔑 Creating search-only API key...');
    
    const searchKey = await client.generateSecuredApiKey('c1d8c905c6b5a7a832c0914a66a98879', {
      filters: '',
      validUntil: Math.floor(Date.now() / 1000) + (365 * 24 * 60 * 60), // 1 năm
    });
    
    console.log('✅ Search-only API key created:');
    console.log(`🔑 Search API Key: ${searchKey}`);
    console.log('\n📋 Update your docusaurus.config.js with this key:');
    console.log(`apiKey: '${searchKey}',`);
    
  } catch (error) {
    console.error('❌ Error creating search key:', error);
  }
}

createSearchKey();
