require('dotenv').config();
const fs = require('fs');
const path = require('path');

const domain = process.env.DOMAIN;

if (!domain) {
  console.error("❌ DOMAIN env variable is not set. Skipping CNAME generation.");
  process.exit(1);
}

const distPath = path.join(__dirname, 'dist');
if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath);
}

fs.writeFileSync(path.join(distPath, 'CNAME'), domain);
fs.writeFileSync(path.join(distPath, '.nojekyll'), '');

console.log(`✅ Created CNAME with domain: ${domain}`);


