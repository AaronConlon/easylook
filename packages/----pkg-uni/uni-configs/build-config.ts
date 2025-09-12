export interface IEnvBuildInfo {
  PKG_NAME?: string; // 'name',
  AUTHOR?: string; // '-'
  VERSION?: string; // '0.0.0',
  NODE_ENV?: string; // process.env.NODE_ENV,
  BUILD_TIME?: string; // moment().format('YYYYMMDD-HHmmss'),
  BUILD_NUMBER?: number; // 2022002,
  COMMIT_HASH?: string; // 'ff11'
}

//
//
//
//
//
//
//
//

// const BUILDINFO_STR = getDocumentBuildInfo();
const BUILDINFO_STR = '{}';
// const BUILDINFO = safeParseJsonStr(BUILDINFO_STR);
const BUILDINFO = {};

export const DEFAULT_BUILDINFO = {
  VERSION: '0.0.0',
  BUILD_TIME: '-',
  COMMIT_HASH: 'ffff',
};

// 之前的方案是生成一个 version.js，放到 index.html，但是这样会多占用一个网络请求
// 所以使用 craco-plugin--html-webpack-inject-app-build-info.js 注入到 index.html
const __BUILDINFO__: IEnvBuildInfo = {
  ...DEFAULT_BUILDINFO,
  ...BUILDINFO,
};

//@ts-ignore
window.__BUILDINFO__ = __BUILDINFO__;

export const buildConfig = __BUILDINFO__;
