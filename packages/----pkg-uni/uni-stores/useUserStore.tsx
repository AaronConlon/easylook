import { create } from 'zustand';
import dayjs from 'dayjs';
import { combine, devtools } from 'zustand/middleware';

import { getUserInfo, getUserToken } from '----pkg-uni/uni-utils/user-util';
import { cookieUtil } from '----pkg-uni/uni-utils/cookie-util';

import { LS_CONST_KEYS } from '----pkg-uni/uni-consts/ls-const';
import { COOKIE_CONST_KEYS } from '----pkg-uni/uni-consts/cookie-const';
import { setAxiosToken } from '----pkg-uni/uni-libs/axios-lib';
import { lskv } from '----pkg-uni/uni-libs/lskv-lib';

import type { IUserModel } from '../uni-models/user.model';

const INIT_STATE = {
  user$_userInfo: getUserInfo() as unknown as IUserModel | undefined,
  user$_userToken: getUserToken() as string | undefined,
  user$_userNotifications: {} as {}, // | IApi__GET__information_user_unread_count_info__RES // not-cycle
};

//
//

const UserStore = combine(INIT_STATE, (set) => ({
  user$_set_userInfo: (v: IUserModel | undefined) => {
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

    setAxiosToken(v.token);
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
