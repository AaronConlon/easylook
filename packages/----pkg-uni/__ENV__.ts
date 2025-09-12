/* eslint-disable max-len */
export interface IDotEnv {
  NODE_ENV?: 'development' | 'production' | 'test' | string;
  BASE_URL?: string;
  ASSET_PREFIX?: string;
  //
  REACT_APP_NAME?: string;
  REACT_APP_API_BASE_URL?: string;
  REACT_APP_CDN_URL?: string;
  REACT_APP_UPLOAD_URL?: string;
  //
  REACT_APP_ENABLE_DARK_THEME?: 'always' | 'true' | 'false' | string;
  //
  REACT_APP_DEBUG_BAR_PASSWORD_HASH?: string;
}

// 这里 process.env 只做 dotenv 的 mapping，rsbuild 打包的时候会替换成 string
export const __ENV__: IDotEnv = {
  NODE_ENV: process.env.NODE_ENV,
  BASE_URL: process.env.BASE_URL,
  ASSET_PREFIX: process.env.ASSET_PREFIX,
  REACT_APP_NAME: process.env.REACT_APP_NAME,
  REACT_APP_API_BASE_URL: process.env.REACT_APP_API_BASE_URL,
  REACT_APP_CDN_URL: process.env.REACT_APP_CDN_URL,
  REACT_APP_UPLOAD_URL: process.env.REACT_APP_UPLOAD_URL,
  //
  REACT_APP_ENABLE_DARK_THEME: process.env.REACT_APP_ENABLE_DARK_THEME,
  //
  REACT_APP_DEBUG_BAR_PASSWORD_HASH: process.env.REACT_APP_DEBUG_BAR_PASSWORD_HASH, // prettier-ignore
};
