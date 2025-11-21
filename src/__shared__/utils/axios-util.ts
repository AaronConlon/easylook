import type { AxiosError, AxiosInstance } from 'axios';
import Axios from 'axios';

import type { IRqMutationOpts, IRqQueryOpts } from '__shared__/typings/rq-type';
import type {
  IAxiosCatchErr,
  IAxiosResObj,
} from '__shared__/typings/_api-type';

import { TIME_CONST_FETCH_TIMEOUT } from '__shared__/consts/time-const';
import { uiMessage } from '__shared__/utils/message-util';
import { userLogout } from '__shared__/utils/_user-util/user-util-user-logout';
import { appConfig } from '__shared__/configs/app-config';

export const HEADERS_CONTENT_TYPES = {
  JSON: 'application/json; charset=UTF-8',
};

export const FETCHER_TIMEOUT = TIME_CONST_FETCH_TIMEOUT * 1000;
// export const ERROR_REDIRECT_PATH = '/login';
export const ERROR_REDIRECT_PATH = '';

export const createAuthAxiosInst = (opts: {
  useUserStore: any;
}): AxiosInstance => {
  const _axiosInst = Axios.create();

  _axiosInst.defaults.timeout = FETCHER_TIMEOUT;
  _axiosInst.defaults.headers.post['Content-Type'] = HEADERS_CONTENT_TYPES.JSON;

  // 只接受 2xx 成功，其他一律走 catch
  _axiosInst.defaults.validateStatus = (status) => {
    return status >= 200 && status < 300;
  };

  // out ---> |
  // Tips: all code > 400 Req Can be Normalify return.
  _axiosInst.interceptors.request.use(
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
  _axiosInst.interceptors.response.use(
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
            opts?.useUserStore.getState().user$_remove_userInfo();
            opts?.useUserStore.getState().user$_remove_userToken();
          },
        });

        if (ERROR_REDIRECT_PATH) {
          window.location.href = ERROR_REDIRECT_PATH;
        }
      }

      return Promise.reject(err);
    },
  );

  return _axiosInst;
};

//
//
//
//
//

export const setAuthAxiosToken = (opts: {
  axiosInst: AxiosInstance;
  token: string;
}) => {
  if (opts?.axiosInst?.defaults?.headers?.common?.Authorization) {
    opts.axiosInst.defaults.headers.common.Authorization = `Bearer ${opts.token}`;
  }
};

export const removeAuthAxiosToken = (opts: { axiosInst: AxiosInstance }) => {
  delete opts?.axiosInst.defaults.headers.common.Authorization;
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
  // console.log('✅ handleAxiosRes-res:', res.data);

  return res?.data;
}

export function handleAxiosCatch<TRES = unknown, TREQ = any>(
  err: IAxiosCatchErr,
  rqOpts?: IRqQueryOpts<TRES, TREQ> | IRqMutationOpts<TRES, TREQ>,
) {
  // console.log('❌ handleAxiosCatch-err:', err?.response?.data);

  if (!rqOpts?.disabledErrorMsg) {
    if (!appConfig.ENABLE_AXIOS_CATCH_ERROR_MSG) return;

    uiMessage.error(err?.response?.data?.msg);
  }
}
