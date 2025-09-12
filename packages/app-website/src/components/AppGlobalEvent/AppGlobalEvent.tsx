import { useEffect } from 'react';

import {
  checkUserIsLogined,
  getUserToken,
} from '----pkg-uni/uni-utils/user-util';

import { useIsDarkMode } from '----pkg-uni/uni-hooks/useIsDarkMode';
import { useIsSysDarkMode } from '----pkg-uni/uni-hooks/useIsSysDarkMode';
import { useDomReadyReCalc } from '----pkg-uni/uni-hooks/useDomReadyReCalc';

import {
  THEME_CONST_SYS_THEME_KEYS,
  THEME_CONST_THEME_KEYS,
} from '----pkg-uni/uni-consts/theme-const';
import { useThemeStore } from '----pkg-uni/uni-stores/useThemeStore';
import { setAxiosToken } from '----pkg-uni/uni-libs/axios-lib';

export const AppGlobalEvent = () => {
  // forSTORE
  const theme$_appTheme = useThemeStore((s) => s.theme$_appTheme); // prettier-ignore
  // forSTORE

  useEffect(() => {
    const userIsLogined = checkUserIsLogined();

    // 已经给 axios 默认 token
    if (userIsLogined) {
      // console.log('已经给 axios 默认 token');
      setAxiosToken(getUserToken());
    }
  }, []);

  const { isDarkMode } = useIsDarkMode();
  const { isSysDarkMode } = useIsSysDarkMode();

  useEffect(() => {
    // 优先以 setting 的 theme 为准，只要是 dark 就是深色模式
    if (theme$_appTheme === THEME_CONST_THEME_KEYS.DARK) {
      useThemeStore.getState().theme$_set_isDarkMode(true);
      return;
    }

    if (theme$_appTheme === THEME_CONST_THEME_KEYS.LIGHT) {
      useThemeStore.getState().theme$_set_isDarkMode(false);
      return;
    }

    //
    //

    useThemeStore.getState().theme$_set_isDarkMode(isDarkMode);
  }, [isDarkMode, theme$_appTheme]);

  useEffect(() => {
    useThemeStore
      .getState()
      .theme$_set_sysTheme(
        isSysDarkMode
          ? THEME_CONST_SYS_THEME_KEYS.SYS_DARK
          : THEME_CONST_SYS_THEME_KEYS.SYS_LIGHT,
      );
  }, [isSysDarkMode]);

  // 重新计算一些配置
  useDomReadyReCalc();
  return null;
};
