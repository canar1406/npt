const fs = require('fs');
let txt = fs.readFileSync('src/css/custom.css', 'utf8');
const darkSvg = fs.readFileSync('phycat/phycat.dark.css', 'utf8').match(/background-image: url\([^)]+\)/)[0];
const lightSvg = fs.readFileSync('phycat/phycat.light.css', 'utf8').match(/background: url\([^)]+\)/)[0];

let patch = `\n/* === TYPORA CODE BLOCK MAPPING FOR DOCUSAURUS (FIXED) ====== */\n`;
patch += `html .theme-code-block,\n`;
patch += `html .theme-code-block > div,\n`;
patch += `html .theme-code-block [class*='codeBlockContent_'],\n`;
patch += `html .theme-code-block [class*='codeBlockContainer_'],\n`;
patch += `html .theme-code-block .prism-code {\n`;
patch += `    --prism-background-color: transparent !important;\n`;
patch += `    background-color: transparent !important;\n`;
patch += `    background: transparent !important;\n`;
patch += `    box-shadow: none !important;\n`;
patch += `    border: none !important;\n`;
patch += `}\n`;
patch += `html .theme-code-block [class*='codeBlockContent_'] { margin: 0 !important; padding: 0 !important; }\n`;

patch += `html[data-theme='dark'] .theme-code-block { position: relative !important; margin: 20px 0 !important; border-radius: 8px !important; background-color: #282a36 !important; border: 1px solid color-mix(in srgb, var(--secondary-color), transparent 80%) !important; }\n`;
patch += `html[data-theme='dark'] .theme-code-block::before { content: '' !important; display: block !important; height: 32px !important; width: 100% !important; border-radius: 8px 8px 0 0 !important; background-color: color-mix(in srgb, var(--secondary-color), transparent 95%) !important; border-bottom: 1px solid color-mix(in srgb, var(--secondary-color), transparent 90%) !important; ${darkSvg}; background-repeat: no-repeat !important; background-size: 40px !important; background-position: 12px 11px !important; }\n`;
patch += `html[data-theme='dark'] .theme-code-block .prism-code { padding: 10px 12px 12px 20px !important; color: #f8f8f2 !important; font-family: CascadiaCode, 'Lucida Console', Consolas, Courier, monospace !important; border-radius: 8px !important; line-height: 1.6rem !important; font-size: .95rem !important; margin: 0 !important; }\n`;

patch += `html[data-theme='light'] .theme-code-block { position: relative !important; margin: 20px 0 !important; border-radius: 5px !important; border: none !important; background-color: #f8f8f8 !important; }\n`;
patch += `html[data-theme='light'] .theme-code-block::before { content: '' !important; display: block !important; height: 32px !important; width: 100% !important; border-radius: 5px 5px 0 0 !important; background-color: #f8f8f8 !important; ${lightSvg}; background-repeat: no-repeat !important; background-size: 40px !important; background-position: 6px 11px !important; margin-bottom: 0 !important; }\n`;
patch += `html[data-theme='light'] .theme-code-block .prism-code { border-radius: 0 0 5px 5px !important; padding: 5px 12px 12px 20px !important; color: #4f5467 !important; font-family: CascadiaCode, 'Lucida Console', Consolas, Courier, monospace !important; line-height: 1.8rem !important; margin: 0 !important; font-size: .95rem !important; }\n`;

patch += `html .theme-code-block button { z-index: 10 !important; padding: 4px !important; margin-top:-5px !important; background: transparent !important; border: none !important; box-shadow: none !important; }\n`;
patch += `/* Fix highlighted code line in Docusaurus */\n`;
patch += `html .theme-code-block-highlighted-line { background-color: rgba(255,255,255,0.1) !important; }\n`;

fs.writeFileSync('src/css/custom.css', txt + patch);
console.log('Success');
