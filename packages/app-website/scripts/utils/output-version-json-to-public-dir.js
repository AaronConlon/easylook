#!/usr/bin/env node
/* eslint-disable */

const fs = require('fs');
const path = require('path');
const { getBuildInfo } = require('gen-buildinfo-webpack-plugin');

const PUBLIC_DIR = path.resolve(__dirname, '../../public');
const versionRaw = getBuildInfo({ package: require('../../package.json') });

let versionData = {
  data: {
    APP: versionRaw,
  },
};

fs.writeFileSync(
  `${PUBLIC_DIR}/version.json`,
  JSON.stringify(versionData, null, 2),
);
