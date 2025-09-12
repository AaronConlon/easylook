import { create } from 'zustand';
import { combine, devtools } from 'zustand/middleware';

import { checktDebugBarPasswordHash } from '----pkg-uni/uni-utils/__DEBUG__util';

import { lskv } from '----pkg-uni/uni-libs/lskv-lib';
import { LS_CONST_KEYS } from '----pkg-uni/uni-consts/ls-const';

const INIT_STATE = {
  // debug$_IS_OPEN: false,
  // 判断是否有密码 string
  debug$_IS_OPEN:
    lskv.getItem(LS_CONST_KEYS.appDebugMode) &&
    // 确认密码正确
    checktDebugBarPasswordHash(lskv.getItem(LS_CONST_KEYS.appDebugMode))
      ?.isMatch,
};

const __DebugStore__ = combine(INIT_STATE, (set, get) => ({
  debug$_set_IS_OPEN: (v: boolean) => {
    set(() => ({
      debug$_IS_OPEN: v,
    }));

    if (!v) {
      lskv.removeItem(LS_CONST_KEYS.appDebugMode);
    }
  },
  debug$_remove_DEBUGBAR: () => {
    set(() => ({
      debug$_IS_OPEN: false,
    }));

    lskv.removeItem(LS_CONST_KEYS.appDebugMode);
    // hardReload({ url: window.location.href });
  },
}));

export const use__DebugStore__ = create(
  devtools(__DebugStore__, {
    name: '__DebugStore__',
  }),
);
