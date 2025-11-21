import type { ThemeConfig } from 'antd';
import { theme } from 'antd/es';
import type { AliasToken } from 'antd/es/theme/interface';

export const STYLE_ANTD_CONST_PROVIDER_GLOBAL = {
  theme: {
    cssVar: {
      prefix: 'atoken',
      key: 'atoken-css-var-provider', // 默认是 css-var-
    },
  },
};

//
//

export const STYLE_ANTD_PROVIDER_TOKEN: Partial<AliasToken> = {
  borderRadius: 8,
  //
  // fontSize: 14,
  fontFamily: `-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif`,
  // fontFamilyCode: `'Source Code Pro', 'Liberation Mono', Menlo, Consolas, monospace`,
  //

  colorPrimary: '#165dff',
  colorError: '#F53F3F',
  colorSuccess: '#00b42a',
  colorWarning: '#F7BA1E',
};

//
//
//
//
//
//
//
//

//
// 🌞 LIGHT 亮色
// 🌞 LIGHT 亮色
// 🌞 LIGHT 亮色
export const STYLE_ANTD_CONST_PROVIDER_THEME_LIGHT: ThemeConfig = {
  token: {
    ...STYLE_ANTD_PROVIDER_TOKEN,
    // colorText: '#111',
    // colorPrimary: '#5500ff',
  },

  // components: ANTD_PROVIDER_COMPONENTS,
  algorithm: theme.defaultAlgorithm,
};

//
// 🌛 DARK 暗色
// 🌛 DARK 暗色
// 🌛 DARK 暗色
// 🌛 DARK 暗色
export const STYLE_ANTD_CONST_PROVIDER_THEME_DARK: ThemeConfig = {
  token: {
    ...STYLE_ANTD_PROVIDER_TOKEN,
    // colorText: '#fff',
    // colorPrimary: '#4000c5',
  },
  // components: ANTD_PROVIDER_COMPONENTS,
  algorithm: theme.darkAlgorithm,
};
