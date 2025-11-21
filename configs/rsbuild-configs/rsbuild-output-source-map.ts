import type { SourceMap } from '@rsbuild/core';

const __IS_DEV__ = process.env.NODE_ENV === 'development';

export const sourceMap: boolean | SourceMap = {
  // js: calcSourceMap(),
  js: false,
  css: false,
};
