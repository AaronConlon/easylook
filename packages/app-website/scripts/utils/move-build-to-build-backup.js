#!/usr/bin/env node

// 可以在 build 和 sync-to-cdn 之后，移动，作为备份

const fs = require('fs');
const path = require('path');

const VERSION_JSON_FILE = path.resolve(__dirname, '../../public/version.json');
const APP_WEBSITE_DIR = path.resolve(__dirname, '../../');

const BUILD_DIR = `${APP_WEBSITE_DIR}/build`;
const BUILD_BACKUP_DIR = `${APP_WEBSITE_DIR}/build-backup`;

if (fs.existsSync(VERSION_JSON_FILE) || fs.existsSync(BUILD_DIR)) {
  try {
    const VERSION_JSON = require(VERSION_JSON_FILE);
    const VERSION_DIR = `${BUILD_BACKUP_DIR}/index_v${VERSION_JSON.data.APP.VERSION}`;

    // 如果目录存在，先删除
    if (fs.existsSync(VERSION_DIR)) {
      fs.rmSync(VERSION_DIR, { recursive: true, force: true });
    }

    // 移动目录（同步）
    try {
      fs.renameSync(BUILD_DIR, VERSION_DIR);
      console.log('✅ MOVED! BUILD_DIR');
    } catch (err) {
      console.error('❌ FAILED TO RENAME BUILD_DIR');
      console.error(`FROM: ${BUILD_DIR}`);
      console.error(`TO:   ${VERSION_DIR}`);
      console.error('ERROR:', err.message);
    }
  } catch (err) {
    console.error('❌ move BUILD_DIR error', err);
  }
} else {
  console.log('❌ missing BUILD_DIR');
}
