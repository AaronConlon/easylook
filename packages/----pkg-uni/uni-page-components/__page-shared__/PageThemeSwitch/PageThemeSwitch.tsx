import React from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { UButton } from '----pkg-uni/uni-ui-components/UButton';
import { UText } from '----pkg-uni/uni-ui-components/UText';
import { UView } from '----pkg-uni/uni-ui-components/UView';

import { useIsDarkMode } from '----pkg-uni/uni-hooks/useIsDarkMode';

import { useThemeStore } from '----pkg-uni/uni-stores/useThemeStore';
import {
  THEME_CONST_THEME_KEYS,
  THEME_CONST_THEME_LABELS,
} from '----pkg-uni/uni-consts/theme-const';

import styles from './styles.module.scss';

export const PageThemeSwitch = () => {
  const { isDarkMode } = useIsDarkMode();

  // forSTORE
  // ✅ zustand 官方推荐的写法，只有 Store 中用到的部分会 reRender
  const theme$_sysTheme = useThemeStore((s) => s.theme$_sysTheme);
  const theme$_appTheme = useThemeStore((s) => s.theme$_appTheme);
  // forSTORE

  // ❌ 直接解构使用，导致整个 Store 相关组件 reRender
  // const { theme$_sysTheme } = useThemeStore();

  return (
    <UView
      className={cx(styles['comp-wrapper'], {
        [styles['comp-wrapper--isDarkMode']]: isDarkMode,
      })}
    >
      <UView>
        <UText>
          theme$_appTheme 用户主题 (固化): {JSON.stringify(theme$_appTheme)}
        </UText>
      </UView>

      <UView>
        <UText>
          theme$_sysTheme 系统主题: {JSON.stringify(theme$_sysTheme)}
        </UText>
      </UView>

      <UView>
        <UText>isDarkMode is深色模式: {JSON.stringify(isDarkMode)}</UText>
      </UView>

      <UView row>
        <UButton
          type="primary"
          onClick={() => {
            useThemeStore
              .getState()
              .theme$_set_appTheme(THEME_CONST_THEME_KEYS.DEFAULT);
          }}
        >
          {THEME_CONST_THEME_LABELS[THEME_CONST_THEME_KEYS.DEFAULT]}
        </UButton>

        <UButton
          type="dashed"
          onClick={() => {
            useThemeStore
              .getState()
              .theme$_set_appTheme(THEME_CONST_THEME_KEYS.DARK);
          }}
        >
          {THEME_CONST_THEME_LABELS[THEME_CONST_THEME_KEYS.DARK]}
        </UButton>

        <UButton
          onClick={() => {
            useThemeStore
              .getState()
              .theme$_set_appTheme(THEME_CONST_THEME_KEYS.LIGHT);
          }}
        >
          {THEME_CONST_THEME_LABELS[THEME_CONST_THEME_KEYS.LIGHT]}
        </UButton>
      </UView>
    </UView>
  );
};
