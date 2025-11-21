#!/usr/bin/env node

// 可以在 build 之后上传到 cdn

const fs = require('fs');
const path = require('path');

const VERSION_JSON_FILE = path.resolve(__dirname, '../../public/version.json');
const APP_WEBSITE_DIR = path.resolve(__dirname, '../../');

const BUILD_DIR = `${APP_WEBSITE_DIR}/build`;

if (fs.existsSync(VERSION_JSON_FILE) && fs.existsSync(BUILD_DIR)) {
  try {
    const VERSION_JSON = require(VERSION_JSON_FILE);

    const BUILD_INDEX_HTML = `${BUILD_DIR}/index.html`;
    const VERSION_INDEX_HTML = `${BUILD_DIR}/index_v${VERSION_JSON.data.APP.VERSION}.html`;

    // 重命名 index.html 为 index_vXXX.html（同步）
    try {
      fs.renameSync(BUILD_INDEX_HTML, VERSION_INDEX_HTML);
      console.log('✅ MOVED! BUILD_VERSION_INDEX_HTML');
    } catch (err) {
      console.error('❌ FAILED TO RENAME BUILD_VERSION_INDEX_HTML');
      console.error(`FROM: ${BUILD_INDEX_HTML}`);
      console.error(`TO:   ${VERSION_INDEX_HTML}`);
      console.error('ERROR:', err.message);
    }
  } catch (err) {
    console.error('❌ move BUILD_DIR error', err);
  }
} else {
  console.log('❌ missing BUILD_DIR');
}
