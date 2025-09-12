import type { AxiosError, AxiosResponse } from 'axios';
import Axios from 'axios';

import { appErrorMsg } from '----pkg-uni/uni-utils/message-util';
import { userLogout } from '----pkg-uni/uni-utils/user-util';

import { appConfig } from '----pkg-uni/uni-configs/app-config';

import type {
  IAxiosCatchErr,
  IAxiosResObj,
} from '----pkg-uni/uni-types/_api-type';

import type {
  IRqMutationOpts,
  IRqQueryOpts,
} from '----pkg-uni/uni-libs/rq-lib';
import { TIME_CONST_FMT } from '----pkg-uni/uni-consts/time-const';
import { useUserStore } from '----pkg-uni/uni-stores/useUserStore';

export type IAxiosRes<T> = AxiosResponse<T>;
export type IAxiosGetError = AxiosError;
export type IAxiosPostError = AxiosError;

export const HEADERS_CONTENT_TYPES = {
  JSON: 'application/json; charset=UTF-8',
};

export const FETCHER_TIMEOUT = TIME_CONST_FMT.FETCH_TIMEOUT * 1000;
// export const ERROR_REDIRECT_PATH = '/login';
export const ERROR_REDIRECT_PATH = '';
export const axiosInst = Axios.create();

axiosInst.defaults.timeout = FETCHER_TIMEOUT;
axiosInst.defaults.headers.post['Content-Type'] = HEADERS_CONTENT_TYPES.JSON;

// 只接受 2xx 成功，其他一律走 catch
axiosInst.defaults.validateStatus = (status) => {
  return status >= 200 && status < 300;
};

// out ---> |
// Tips: all code > 400 Req Can be Normalify return.
axiosInst.interceptors.request.use(
  (req) => {
    return req;
  },
  (err: AxiosError) => {
    console.error('❌ out ---> | REQ-ERR', err);

    return Promise.reject(err);
  },
);

// | <--- in
// Tips: all code > 400 Res Can be Normalify return.
axiosInst.interceptors.response.use(
  (res) => {
    return res;
  },
  (err: AxiosError) => {
    console.error('❌ | <--- in RES-ERR', err);

    if (
      // @ts-ignore
      typeof err.response?.data?.error === 'string' &&
      // @ts-ignore
      err.response?.data?.error === '__JWT_ERROR__'
    ) {
      console.error('需要弹出用户');
      userLogout({
        logoutCallbackFn: () => {
          useUserStore.getState().user$_remove_userInfo();
          useUserStore.getState().user$_remove_userToken();
        },
      });

      if (ERROR_REDIRECT_PATH) {
        window.location.href = ERROR_REDIRECT_PATH;
      }
    }

    return Promise.reject(err);
  },
);

//
//
//
//
//

export const setAxiosToken = (token: string) => {
  axiosInst.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeAxiosToken = () => {
  delete axiosInst.defaults.headers.common.Authorization;
};

//
//
//
//
//

export function handleAxiosRes<TRES = unknown, TREQ = any>(
  res: IAxiosResObj<TRES>,
  rqOpts?: IRqQueryOpts<TRES, TREQ> | IRqMutationOpts<TRES, TREQ>,
) {
  console.log('✅ handleAxiosRes-res:', res.data);

  return res?.data;
}

export function handleAxiosCatch<TRES = unknown, TREQ = any>(
  err: IAxiosCatchErr,
  rqOpts?: IRqQueryOpts<TRES, TREQ> | IRqMutationOpts<TRES, TREQ>,
) {
  // console.log('❌ handleAxiosCatch-err:', err?.response?.data);

  if (!rqOpts?.disabledErrorMsg) {
    if (!appConfig.ENABLE_AXIOS_CATCH_ERROR_MSG) return;

    appErrorMsg(err?.response?.data?.msg);
  }
}
