import { LS_CONST_KEYS } from '__shared__/consts/ls-const';
import { __ENV__ } from '__shared__/configs/__ENV__';
import { lskv } from '__shared__/libs/lskv-lib';

export const appConfig = {
  NODE_ENV: __ENV__.NODE_ENV,
  //
  __IS_DEV__: __ENV__.NODE_ENV !== 'production',
  __IS_PROD__: __ENV__.NODE_ENV === 'production',
  __IS_CDN__: window?.location?.href?.includes?.(
    __ENV__.REACT_APP_CDN_URL || '',
  ),
  __IS_DEBUG_MODE__: lskv.getItem(LS_CONST_KEYS.appDebugMode),
  //
  NAME: __ENV__.REACT_APP_NAME,
  PAGE_CNAME: __ENV__.REACT_APP_PAGE_CNAME,
  //
  ENABLE_AXIOS_CATCH_ERROR_MSG: __ENV__.REACT_APP_ENABLE_AXIOS_CATCH_ERROR_MSG,
  ENABLE_DARK_THEME: __ENV__.REACT_APP_ENABLE_DARK_THEME,
  //
  DEBUG_BAR_PASSWORD_HASH: __ENV__.REACT_APP_DEBUG_BAR_PASSWORD_HASH,
};
