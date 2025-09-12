import { __ENV__ } from '----pkg-uni/__ENV__';
import { lskv } from '----pkg-uni/uni-libs/lskv-lib';
import { LS_CONST_KEYS } from '----pkg-uni/uni-consts/ls-const';

export const appConfig = {
  NODE_ENV: __ENV__.NODE_ENV,
  //
  NAME: __ENV__.REACT_APP_NAME,
  ENABLE_DARK_THEME: __ENV__.REACT_APP_ENABLE_DARK_THEME,
  //
  __IS_DEV__: __ENV__.NODE_ENV !== 'production',
  __IS_PROD__: __ENV__.NODE_ENV === 'production',
  __IS_DEBUG_MODE__: lskv.getItem(LS_CONST_KEYS.appDebugMode),
  //
  DEBUG_BAR_PASSWORD_HASH: __ENV__.REACT_APP_DEBUG_BAR_PASSWORD_HASH,
};
