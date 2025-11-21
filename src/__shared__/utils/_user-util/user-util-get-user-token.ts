import { COOKIE_CONST_KEYS } from '__shared__/consts/cookie-const';
import { getUrlQuerys } from '__shared__/utils/url-util';
import { cookieUtil } from '__shared__/utils/cookie-util';

export const getUserToken = (): string => {
  // 优先取 URL 里的 t
  const urlQ = getUrlQuerys<{ t?: string }>({ url: window?.location?.href });
  if (urlQ.t) {
    // console.log('🔑 token by urlQ');
    return urlQ.t;
  }

  const cookieToken = cookieUtil.get(COOKIE_CONST_KEYS.hyxhyx_cross_token);
  if (cookieToken && cookieToken !== 'logout') {
    // console.log('🔑 token by cookie');
    return cookieToken;
  }

  const userToken = cookieUtil.get(COOKIE_CONST_KEYS.userToken);

  if (!userToken) {
    // console.log('🔑 Not Found Token');
    return '';
  }

  return userToken;
};
