import { COOKIE_CONST_KEYS } from '__shared__/consts/cookie-const';
import { cookieUtil } from '__shared__/utils/cookie-util';
import { getUserInfo } from '__shared__/utils/_user-util/user-util-get-user-info';

export const checkUserIsLogined = () => {
  return Boolean(
    cookieUtil.get(COOKIE_CONST_KEYS.userToken) && getUserInfo()?.id,
  );
};
