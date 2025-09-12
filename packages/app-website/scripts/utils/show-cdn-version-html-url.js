#!/usr/bin/env node

// 可以在 build 和 sync-to-cdn 之后，移动，作为备份

const fs = require('fs');
const path = require('path');

const dotenv = require('dotenv');

const VERSION_JSON_FILE = path.resolve(__dirname, '../../public/version.json');
const APP_WEBSITE_DIR = path.resolve(__dirname, '../../');

const PROD_DOTENT_FILE = `${APP_WEBSITE_DIR}/.env`;

if (fs.existsSync(PROD_DOTENT_FILE)) {
  const dotenvContent = fs.readFileSync(PROD_DOTENT_FILE, 'utf-8');

  const envObj = dotenv.parse(dotenvContent);

  const VERSION_JSON = require(VERSION_JSON_FILE);
  const BUILD_VERSION = VERSION_JSON.data.APP.VERSION;

  console.log('\n\n\n\n');
  console.log(
    '✨ CDN-URL:',
    `${envObj.PUBLIC_URL}/index_v${BUILD_VERSION}.html`,
  );
  console.log('\n\n\n\n');
} else {
  console.log('❌ missing .env');
}
