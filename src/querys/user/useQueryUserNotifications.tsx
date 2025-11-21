import type { IRqQueryOpts } from '__shared__/typings/rq-type';

import { handleAxiosCatch, handleAxiosRes } from '__shared__/utils/axios-util';

import { axiosAuthInst } from '@/instances/axios-auth-inst';

import type {
  IAPI_V1_INFORMATION_USER_UNREAD_COUNT_INFO_GET_ITEM,
  IAPI_V1_INFORMATION_USER_UNREAD_COUNT_INFO_GET_REQ,
} from '@/apis/user-api';
import { API_URL_GET__V1_INFORMATION_USER_UNREAD_COUNT_INFO_GET } from '@/apis/user-api';

type IQueryRes = {
  data?: { data?: IAPI_V1_INFORMATION_USER_UNREAD_COUNT_INFO_GET_ITEM };
};
type IQueryReq = IAPI_V1_INFORMATION_USER_UNREAD_COUNT_INFO_GET_REQ;

//
// 🟩 GET API (ITEM) - 1.获取用户通知
const API_URL = API_URL_GET__V1_INFORMATION_USER_UNREAD_COUNT_INFO_GET;

//
// 🟩 GET API (LIST) - 🧪FN
export async function getApiUserNotifications<
  TRES = IQueryRes,
  TREQ = IQueryReq,
>(params?: TREQ, rqQueryOpts?: IRqQueryOpts<TRES>) {
  return axiosAuthInst
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
