import { create } from 'zustand';
import { combine, devtools } from 'zustand/middleware';

import type {
  I_THEME_CONST_SYS_THEME_KEYS,
  I_THEME_CONST_THEME_KEYS,
} from '----pkg-uni/uni-consts/theme-const';
import { LS_CONST_KEYS } from '----pkg-uni/uni-consts/ls-const';
import { lskv } from '----pkg-uni/uni-libs/lskv-lib';

const __INIT_theme$_sysTheme__ = '' as I_THEME_CONST_SYS_THEME_KEYS;
const __INIT_theme$_appTheme__ = lskv.getItem(
  LS_CONST_KEYS.appTheme,
) as I_THEME_CONST_THEME_KEYS;

const INIT_STATE = {
  theme$_appTheme: __INIT_theme$_appTheme__, // 默认 '' 就是 Auto
  theme$_sysTheme: __INIT_theme$_sysTheme__,
  theme$_isDarkMode: false,
  //
  theme$____TEST_RENDERING____: 1,
  theme$____TEST_NUM____: 990099,
};

const ThemeStore = combine(INIT_STATE, (set, get) => ({
  //
  theme$_set_appTheme: (v: I_THEME_CONST_THEME_KEYS) => {
    set(() => ({ theme$_appTheme: v }));

    // 固化
    lskv.setItem(LS_CONST_KEYS.appTheme, v);
  },
  //
  theme$_set_sysTheme: (v?: I_THEME_CONST_SYS_THEME_KEYS) => {
    set(() => ({ theme$_sysTheme: v }));
  },
  //
  theme$_set_isDarkMode: (v?: boolean) => {
    set(() => ({ theme$_isDarkMode: v }));
  },
  //
  //
  //
  //
  theme$____set_TEST_RENDERING_add_1____: () => {
    set(() => ({
      theme$____TEST_RENDERING____: get().theme$____TEST_RENDERING____ + 1,
    }));
  },
  theme$____set_TEST_NUM_add_1____: () => {
    set(() => ({
      theme$____TEST_NUM____: get().theme$____TEST_NUM____ + 1,
    }));
  },
}));

export const useThemeStore = create(
  devtools(ThemeStore, {
    name: 'ThemeStore',
  }),
);
