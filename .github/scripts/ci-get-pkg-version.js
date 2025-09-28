/* eslint-disable import/no-dynamic-require */
const path = require('path');

const pkg = require(path.resolve(__dirname, '../../packages/app-website/package.json'));
const version = (pkg && pkg.version) || '0.0.0';

console.log(version);
return version;
