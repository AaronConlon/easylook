import { create } from 'zustand';
import dayjs from 'dayjs';
import { combine, devtools } from 'zustand/middleware';

import { LS_CONST_KEYS } from '__shared__/consts/ls-const';
import { COOKIE_CONST_KEYS } from '__shared__/consts/cookie-const';
import { getUserToken } from '__shared__/utils/_user-util/user-util-get-user-token';
import { getUserInfo } from '__shared__/utils/_user-util/user-util-get-user-info';
import { cookieUtil } from '__shared__/utils/cookie-util';
import { setAuthAxiosToken } from '__shared__/utils/axios-util';
import { lskv } from '__shared__/libs/lskv-lib';

import { axiosAuthInst } from '@/instances/axios-auth-inst';

const INIT_STATE = {
  user$_userInfo: getUserInfo() as unknown as any | undefined,
  user$_userToken: getUserToken() as string | undefined,
  user$_userNotifications: {} as {}, // | IApi__GET__information_user_unread_count_info__RES // not-cycle
};

//
//

const UserStore = combine(INIT_STATE, (set) => ({
  user$_set_userInfo: (v: any | undefined) => {
    lskv.setItem(LS_CONST_KEYS.userInfo, JSON.stringify(v));
    set(() => ({ user$_userInfo: v }));
  },
  user$_remove_userInfo: () => {
    lskv.removeItem(LS_CONST_KEYS.userInfo);
    set(() => ({ user$_userInfo: undefined }));
  },
  //
  //
  user$_set_userToken: (v: { token: string; exp?: number }) => {
    const expires = v.exp ? dayjs(v.exp * 1000).toDate() : undefined;

    setAuthAxiosToken({ axiosInst: axiosAuthInst, token: v.token });
    cookieUtil.set(COOKIE_CONST_KEYS.userToken, v.token, { expires });
    set(() => ({ user$_userToken: v.token }));
  },
  user$_remove_userToken: () => {
    cookieUtil.remove(COOKIE_CONST_KEYS.userToken);
    set(() => ({ user$_userToken: undefined }));
  },
  user$_set_userNotifications: (
    // v?: IApi__GET__information_user_unread_count_info__RES,
    v?: any,
  ) => {
    set(() => ({ user$_userNotifications: v }));
  },
}));

//
//

export const useUserStore = create(
  devtools(UserStore, {
    name: 'UserStore',
  }),
);
