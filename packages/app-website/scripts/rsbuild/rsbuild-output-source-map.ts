import { existsSync } from 'fs';
import { resolve } from 'path';

import { SourceMap } from '@rsbuild/core/dist-types/types/config';

const __IS_DEV__ = process.env.NODE_ENV === 'development';

// 如果在本地，不打包 map, CI 上打包
const ENV_IS_LOCAL = existsSync(resolve(__dirname, '../../.env.development'));

const calcSourceMap = () => {
  if (ENV_IS_LOCAL) {
    // 本地模式
    if (__IS_DEV__) {
      return 'cheap-module-source-map';
    } else {
      return false;
    }
  } else {
    // 线上模式
    return 'source-map';
  }
};

export const sourceMap: boolean | SourceMap = {
  js: calcSourceMap(),
  css: false,
};
