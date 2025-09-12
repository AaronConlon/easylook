import { useMutation } from '@tanstack/react-query';

import type { IRqMutationOpts } from '----pkg-uni/uni-libs';
import {
  axiosInst,
  handleAxiosCatch,
  handleAxiosRes,
} from '----pkg-uni/uni-libs';

import type {
  IApi__POST__auth_login__REQ,
  IApi__POST__auth_login__RES,
} from '@/apis/auth-api';
import { IUrl__POST__v1_auth_login } from '@/apis/auth-api';

type IMutRes = IApi__POST__auth_login__RES;
type IMutReq = IApi__POST__auth_login__REQ;

//
// 🟨 POST API (ITEM) 用户登录
const API_URL = IUrl__POST__v1_auth_login;

//
// 🟨 POST API (ITEM) - 🧪FN
export async function postApiAuthLogin<TRES = IMutRes, TREQ = IMutReq>(
  data?: TREQ,
  rqMutationOpts?: IRqMutationOpts<TRES, TREQ>,
) {
  return axiosInst
    .post(API_URL, data)
    .then((res) => handleAxiosRes<TRES>(res, rqMutationOpts))
    .catch((err) => {
      handleAxiosCatch(err, rqMutationOpts);
      throw err;
    });
}

//
// 🟨 POST API (ITEM) - 🪝HOOKS
export function useMutationAuthLogin<TRES = IMutRes, TREQ = IMutReq>(
  rqMutationOpts?: IRqMutationOpts<TRES, TREQ>,
) {
  return useMutation({
    mutationFn: (data) => postApiAuthLogin(data, rqMutationOpts),
    ...rqMutationOpts,
  });
}
