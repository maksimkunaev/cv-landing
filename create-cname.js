require('dotenv').config();
const fs = require('fs');
const path = require('path');

const domain = process.env.DOMAIN

const distPath = path.join(__dirname, 'dist');
if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath);
}

fs.writeFileSync(path.join(distPath, 'CNAME'), domain);
console.log(`✅ Created CNAME with domain: ${domain}`);