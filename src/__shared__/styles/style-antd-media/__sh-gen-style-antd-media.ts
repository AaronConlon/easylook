#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import _ from 'lodash';

import { STYLE_MEDIA_CONST } from '@/consts/style-media-const';

const curDir = path.dirname(fileURLToPath(import.meta.url));

const OUT_FILE_SCSS = path.resolve(curDir, './style-scss-vars-antd-media.gen');
const OUT_FILE_CSS = path.resolve(
  curDir,
  './style-css-vars-antd-media.gen.css',
);

let RESULT_SCSS = '';
const genCssVarsObjToScss = (cssVarsObj: {}) => {
  let ALL_VARS = '';

  _.forEach(cssVarsObj, (v, k) => {
    // e.g.
    // $screen-xs: 480px;
    //
    ALL_VARS += `$${k}: ${v}px;\n`;
  });

  RESULT_SCSS +=
    `//\n` +
    `//\n` +
    `//\n` +
    `// code by gen (scss)\n` +
    `// prettier-ignore\n` +
    `${ALL_VARS}\n`;
};

genCssVarsObjToScss(STYLE_MEDIA_CONST);
fs.writeFileSync(OUT_FILE_SCSS, RESULT_SCSS);

//
//

let RESULT_CSS = '';
const genCssVarsObjToCss = (cssVarsObj: {}) => {
  let ALL_VARS = '';

  _.forEach(cssVarsObj, (v, k) => {
    // e.g.
    // $screen-xs: 480px;
    //
    ALL_VARS += `  --${k}: ${v}px;\n`;
  });

  RESULT_CSS +=
    `/* \n` +
    `|\n` +
    `| code by gen\n` +
    `| prettier-ignore\n` +
    `|\n` +
    `*/\n` +
    `:root {\n${ALL_VARS}}\n`;
};

genCssVarsObjToCss(STYLE_MEDIA_CONST);
fs.writeFileSync(OUT_FILE_CSS, RESULT_CSS);
