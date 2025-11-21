import { useEffect } from 'react';

import {
  THEME_CONST_SYS_THEME_KEYS,
  THEME_CONST_THEME_KEYS,
} from '__shared__/consts/theme-const';
import { getUserToken } from '__shared__/utils/_user-util/user-util-get-user-token';
import { checkUserIsLogined } from '__shared__/utils/_user-util/user-util-check-user-is-logined';
import { setAuthAxiosToken } from '__shared__/utils/axios-util';
import { useIsDarkMode } from '__shared__/hooks/useIsDarkMode';
import { useIsSysDarkMode } from '__shared__/hooks/useIsSysDarkMode';
import { useDomReadyReCalc } from '__shared__/hooks/useDomReadyReCalc';

import { axiosAuthInst } from '@/instances/axios-auth-inst';

import { useThemeStore } from '@/stores/useThemeStore';

export const AppGlobalEvent = () => {
  // forSTORE
  const theme$_appTheme = useThemeStore((s) => s.theme$_appTheme); // prettier-ignore
  // forSTORE

  useEffect(() => {
    const userIsLogined = checkUserIsLogined();

    // 已经给 axios 默认 token
    if (userIsLogined) {
      // console.log('已经给 axios 默认 token');
      setAuthAxiosToken({
        axiosInst: axiosAuthInst,
        token: getUserToken(),
      });
    }
  }, []);

  const { isDarkMode } = useIsDarkMode({ useThemeStore });
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
