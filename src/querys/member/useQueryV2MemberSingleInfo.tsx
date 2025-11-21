import type { IRqQueryOpts } from '__shared__/typings/rq-type';

import { handleAxiosCatch, handleAxiosRes } from '__shared__/utils/axios-util';

import { axiosAuthInst } from '@/instances/axios-auth-inst';

import type {
  IAPI_V2_MEMBER_SINGLE_INFO_GET_ITEM,
  IAPI_V2_MEMBER_SINGLE_INFO_GET_REQ,
} from '@/apis/member-api';
import { API_URL_GET__V2_MEMBER_SINGLE_INFO_GET } from '@/apis/member-api';

type IQueryRes = { data?: IAPI_V2_MEMBER_SINGLE_INFO_GET_ITEM };
type IQueryReq = IAPI_V2_MEMBER_SINGLE_INFO_GET_REQ;

//
// 🟩 GET API (INFO) 1.获取 PAGE INFO 数据
const API_URL = API_URL_GET__V2_MEMBER_SINGLE_INFO_GET;

//
// 🟩 GET API (LIST) - 🧪FN
export async function getApiMemberSingleInfo<
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
