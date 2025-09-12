import type { IRqQueryOpts } from '----pkg-uni/uni-libs/rq-lib';
import {
  axiosInst,
  handleAxiosCatch,
  handleAxiosRes,
} from '----pkg-uni/uni-libs/axios-lib';

import type {
  IApi__GET__information_user_unread_count_info__REQ,
  IApi__GET__information_user_unread_count_info__RES,
} from '@/apis/user-api';
import { IUrl__GET__v1_information_user_unread_count_info_get } from '@/apis/user-api';

type IQueryRes = {
  data?: { data?: IApi__GET__information_user_unread_count_info__RES };
};
type IQueryReq = IApi__GET__information_user_unread_count_info__REQ;

//
// 🟩 GET API (ITEM) - 1.获取用户通知
const API_URL = IUrl__GET__v1_information_user_unread_count_info_get;

//
// 🟩 GET API (LIST) - 🧪FN
export async function getApiUserNotifications<
  TRES = IQueryRes,
  TREQ = IQueryReq,
>(params?: TREQ, rqQueryOpts?: IRqQueryOpts<TRES>) {
  return axiosInst
    .get(API_URL, { params })
    .then((res) => handleAxiosRes<TRES>(res, rqQueryOpts))
    .catch((err) => {
      handleAxiosCatch(err, rqQueryOpts);
      throw err;
    });
}

//
// // 🟩 GET API (LIST) - 🪝HOOKS
// export function useQueryMemberSingleInfo<TRES = IQueryRes, TREQ = IQueryReq>(
//   params?: TREQ,
//   rqQueryOpts?: IRqQueryOpts<TRES>,
// ) {
//   return useQuery({
//     queryKey: [API_URL, params],
//     queryFn: () => getApiMemberSingleInfo(params, rqQueryOpts),
//     ...rqQueryOpts,
//   });
// }
