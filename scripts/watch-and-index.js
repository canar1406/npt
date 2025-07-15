const chokidar = require('chokidar');
const { exec } = require('child_process');
const path = require('path');

console.log('🔍 Watching for changes in docs folder...');

// Watch docs folder
const watcher = chokidar.watch('docs/**/*.md', {
  ignored: /[\/\\]\./,
  persistent: true
});

let isIndexing = false;

function reindexSearch() {
  if (isIndexing) return;
  
  isIndexing = true;
  console.log('🔄 Content changed, re-indexing search...');
  
  exec('node scripts/final-docsearch.js', (error, stdout, stderr) => {
    if (error) {
      console.error('❌ Re-indexing failed:', error);
    } else {
      console.log('✅ Search re-indexed successfully!');
      console.log(stdout);
    }
    isIndexing = false;
  });
}

// Debounce to avoid multiple triggers
let timeout;
watcher.on('change', (filePath) => {
  console.log(`📝 File changed: ${filePath}`);
  clearTimeout(timeout);
  timeout = setTimeout(reindexSearch, 2000); // Wait 2 seconds before re-indexing
});

watcher.on('add', (filePath) => {
  console.log(`➕ File added: ${filePath}`);
  clearTimeout(timeout);
  timeout = setTimeout(reindexSearch, 2000);
});

watcher.on('unlink', (filePath) => {
  console.log(`🗑️ File removed: ${filePath}`);
  clearTimeout(timeout);
  timeout = setTimeout(reindexSearch, 2000);
});

console.log('👀 Auto-indexing is running. Press Ctrl+C to stop.');
