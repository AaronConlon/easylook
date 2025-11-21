import React from 'react';
import AntdLocaleZhCN from 'antd/es/locale/zh_CN';
import {
  App as AntdApp,
  ConfigProvider as AntdConfigProvider,
  Spin as AntdSpin,
} from 'antd';

import { useIsDarkMode } from '__shared__/hooks/useIsDarkMode';

import { USpinLoading } from '__shared__/ui-components/USpinLoading';

import {
  STYLE_ANTD_CONST_PROVIDER_GLOBAL,
  STYLE_ANTD_CONST_PROVIDER_THEME_DARK,
  STYLE_ANTD_CONST_PROVIDER_THEME_LIGHT,
} from '@/consts/style-antd-const';

import { useThemeStore } from '@/stores/useThemeStore';

AntdSpin.setDefaultIndicator(<USpinLoading useThemeStore={useThemeStore} />);

export const AppAntdConfigProvider = (props?: { children: any }) => {
  const { isDarkMode } = useIsDarkMode({ useThemeStore });

  if (!props?.children) return null;

  return (
    <AntdConfigProvider
      theme={{
        algorithm: isDarkMode
          ? STYLE_ANTD_CONST_PROVIDER_THEME_DARK.algorithm
          : STYLE_ANTD_CONST_PROVIDER_THEME_LIGHT.algorithm,
        //
        //
        token: isDarkMode
          ? STYLE_ANTD_CONST_PROVIDER_THEME_DARK.token
          : STYLE_ANTD_CONST_PROVIDER_THEME_LIGHT.token,
        //
        //
        cssVar: {
          prefix: STYLE_ANTD_CONST_PROVIDER_GLOBAL.theme.cssVar.prefix,
          key: STYLE_ANTD_CONST_PROVIDER_GLOBAL.theme.cssVar.key,
        },
        hashed: false,
      }}
      locale={AntdLocaleZhCN}
      wave={{ disabled: true }}
      button={{ autoInsertSpace: false }}
    >
      <AntdApp
        message={{
          maxCount: 5,
          duration: 10,
          // rtl: true,
          // rtl: false,
        }}
      >
        {props?.children}
      </AntdApp>
    </AntdConfigProvider>
  );
};
