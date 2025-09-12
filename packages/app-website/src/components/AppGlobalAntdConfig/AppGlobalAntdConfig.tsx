import React from 'react';
import AntdLocaleZhCN from 'antd/es/locale/zh_CN';
import { App, ConfigProvider } from 'antd';

import { useIsDarkMode } from '----pkg-uni/uni-hooks/useIsDarkMode';

import {
  ANTD_CONST_PROVIDER_GLOBAL,
  ANTD_CONST_PROVIDER_THEME_DARK,
  ANTD_CONST_PROVIDER_THEME_LIGHT,
} from '----pkg-uni/uni-consts/antd-const';

export const AppGlobalAntdConfig = (props?: { children: any }) => {
  const { isDarkMode } = useIsDarkMode();

  if (!props?.children) return null;

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode
          ? ANTD_CONST_PROVIDER_THEME_DARK.algorithm
          : ANTD_CONST_PROVIDER_THEME_LIGHT.algorithm,
        token: isDarkMode
          ? ANTD_CONST_PROVIDER_THEME_DARK.token
          : ANTD_CONST_PROVIDER_THEME_LIGHT.token,
        cssVar: {
          prefix: ANTD_CONST_PROVIDER_GLOBAL.theme.cssVar.prefix,
          key: ANTD_CONST_PROVIDER_GLOBAL.theme.cssVar.key,
        },
        hashed: false,
      }}
      locale={AntdLocaleZhCN}
      wave={{ disabled: true }}
      button={{ autoInsertSpace: false }}
    >
      <App message={{ maxCount: 3 }}>{props?.children}</App>
    </ConfigProvider>
  );
};
