#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const VERSION_JSON_FILE = path.resolve(__dirname, '../../public/version.json');
const APP_WEBSITE_DIR = path.resolve(__dirname, '../../');

const BUILD_DIR = path.join(APP_WEBSITE_DIR, 'build');
const BUILD_BACKUP_DIR = path.join(APP_WEBSITE_DIR, 'build-backup');

if (fs.existsSync(VERSION_JSON_FILE) || fs.existsSync(BUILD_DIR)) {
  try {
    const VERSION_JSON = require(VERSION_JSON_FILE);
    const VERSION_DIR = path.join(
      BUILD_BACKUP_DIR,
      `index_v${VERSION_JSON.data.APP.VERSION}`,
    );

    // 如果备份目录不存在，先创建
    if (!fs.existsSync(BUILD_BACKUP_DIR)) {
      fs.mkdirSync(BUILD_BACKUP_DIR, { recursive: true });
      console.log(`✅ Created backup directory: ${BUILD_BACKUP_DIR}`);
    }

    // 如果目标目录存在，先删除
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
