// generate-env.js
const fs = require('fs');
const path = require('path');
require('dotenv').config(); // 👈 loads .env

const templatePath = path.join(__dirname, 'src/assets/env.template.js');
const outputPath = path.join(__dirname, 'src/assets/env.js');

// Read template
let template = fs.readFileSync(templatePath, 'utf8');

// Replace ${VAR} with process.env.VAR
const result = template.replace(/\$\{(\w+)\}/g, (_, key) => {
  const value = process.env[key];

  if (value === undefined) {
    console.warn(`⚠️ Missing env variable: ${key}`);
    return '';
  }

  return value;
});

// Write final env.js
fs.writeFileSync(outputPath, result);

console.log('✅ env.js generated from .env');
