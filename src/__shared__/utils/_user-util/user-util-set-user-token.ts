import type { AxiosInstance } from 'axios';

import {
  removeAuthAxiosToken,
  setAuthAxiosToken,
} from '__shared__/utils/axios-util';

export const setUserToken = (opts: {
  axiosInst: AxiosInstance;
  token: string | null | undefined;
}): void => {
  if (opts?.token) {
    setAuthAxiosToken({
      axiosInst: opts?.axiosInst,
      token: opts?.token,
    });
    // console.log(axios.defaults.headers.common);
  } else {
    removeAuthAxiosToken({ axiosInst: opts?.axiosInst });
  }
};
