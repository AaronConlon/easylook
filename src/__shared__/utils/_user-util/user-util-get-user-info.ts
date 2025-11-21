import { LS_CONST_KEYS } from '__shared__/consts/ls-const';
import { safeParseJsonStr } from '__shared__/utils/json-util';
import { lskv } from '__shared__/libs/lskv-lib';

export const getUserInfo = (): any => {
  const _userInfo = lskv.getItem(LS_CONST_KEYS.userInfo);
  return safeParseJsonStr(_userInfo);
};
