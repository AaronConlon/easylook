import type { ThemeConfig } from 'antd';
import type {
  AliasToken,
  MappingAlgorithm,
  OverrideToken,
} from 'antd/es/theme/interface';
import { theme } from 'antd/es';

type IComponentsConfig = {
  [key in keyof OverrideToken]?: OverrideToken[key] & {
    algorithm?: boolean | MappingAlgorithm | MappingAlgorithm[];
  };
};

export const ANTD_CONST_PROVIDER_GLOBAL = {
  theme: {
    cssVar: {
      prefix: 'ant',
      key: 'g-ant-provider--app-global', // 默认是 css-var-
    },
  },
};

export const ANTD_CONST_PROVIDER_TOAST = {
  theme: {
    cssVar: {
      prefix: 'ant',
      key: 'g-ant-provider--app-toast', // 默认是 css-var-
    },
  },
};

//
//
//
//

const ANTD_PROVIDER_TOKEN: Partial<AliasToken> = {
  borderRadius: 8,
  //
  // fontSize: 14,
  fontFamily: `'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '\\5FAE\\8F6F\\96C5\\9ED1', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Ubuntu, Roboto, Noto, 'Segoe UI', Arial, sans-serif`,
  fontFamilyCode: `'Source Code Pro', 'Liberation Mono', Menlo, Consolas, monospace`,
  //
  // colorPrimary: '#2b00ea',
  colorPrimary: '#0052d9',
  colorError: '#d54941',
  colorSuccess: '#2ba471',
  colorWarning: '#e37318',
};

//

const ANTD_PROVIDER_COMPONENTS: IComponentsConfig = {};

//
// 🌞 LIGHT 亮色
export const ANTD_CONST_PROVIDER_THEME_LIGHT: ThemeConfig = {
  token: {
    ...ANTD_PROVIDER_TOKEN,
    // colorText: '#111',
    // colorPrimary: '#5500ff',
  },
  // components: ANTD_PROVIDER_COMPONENTS,
  algorithm: theme.defaultAlgorithm,
};

//
// 🌛 DARK 暗色
export const ANTD_CONST_PROVIDER_THEME_DARK: ThemeConfig = {
  token: {
    ...ANTD_PROVIDER_TOKEN,
    // colorText: '#fff',
    // colorPrimary: '#4000c5',
  },
  // components: ANTD_PROVIDER_COMPONENTS,
  algorithm: theme.darkAlgorithm,
};
