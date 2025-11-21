#!/usr/bin/env node
/* eslint-disable */

const fs = require('fs');
const path = require('path');
const { getBuildInfo } = require('gen-buildinfo-webpack-plugin');

const PUBLIC_DIR = path.resolve(__dirname, '../../public');
const versionRaw = getBuildInfo({ package: require('../../package.json') });
const VERSION_PATH = `${PUBLIC_DIR}/version.json`;
const VERSION_SRT = versionRaw?.VERSION;
const BUILD_TIME = versionRaw?.BUILD_TIME;
const COMMIT_HASH = versionRaw?.COMMIT_HASH;

let versionData = {
  data: {
    APP: versionRaw,
  },
};

console.log('\n\n');
console.log('---- OUTPUT-VERSION-JSON-TO-PUBLIC-DIR ----');
console.log({
  PUBLIC_DIR,
  VERSION_PATH,
  VERSION_SRT,
  //
  BUILD_TIME,
  COMMIT_HASH,
});
console.log('\n\n');

fs.writeFileSync(VERSION_PATH, JSON.stringify(versionData, null, 2));
