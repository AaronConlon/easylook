import { cookieUtil } from '----pkg-uni/uni-utils/cookie-util';
import { safeParseJsonStr } from '----pkg-uni/uni-utils/json-util';

import { LS_CONST_KEYS } from '----pkg-uni/uni-consts/ls-const';
import { lskv } from '----pkg-uni/uni-libs/lskv-lib';
import { COOKIE_CONST_KEYS } from '----pkg-uni/uni-consts/cookie-const';
import type { IUserModel } from '----pkg-uni/uni-models/user.model';

export const checkUserIsLogined = () => {
  return Boolean(
    cookieUtil.get(COOKIE_CONST_KEYS.userToken) && getUserInfo()?.id,
  );
};

export const userLogout = (opts: { logoutCallbackFn: () => void }) => {
  return new Promise((resolve, reject) => {
    try {
      opts?.logoutCallbackFn();

      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
};

export const getUserInfo = (): IUserModel => {
  const _userInfo = lskv.getItem(LS_CONST_KEYS.userInfo);
  return safeParseJsonStr(_userInfo);
};

export const getUserToken = (): string => {
  const userToken = cookieUtil.get(COOKIE_CONST_KEYS.userToken);

  if (!userToken) {
    // console.log('🔑 Not Found Token');
    return '';
  }

  return userToken;
};
