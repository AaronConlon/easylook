import type { IRqQueryOpts } from '----pkg-uni/uni-libs/rq-lib';
import {
  axiosInst,
  handleAxiosCatch,
  handleAxiosRes,
} from '----pkg-uni/uni-libs/axios-lib';

import type {
  IApi__GET__page_info__REQ,
  IApi__GET__page_info__RES,
} from '@/apis/page-api';
import { IUrl__GET__v1_page_info_get } from '@/apis/page-api';

type IQueryRes = { data?: { data?: IApi__GET__page_info__RES } };
type IQueryReq = IApi__GET__page_info__REQ;

//
// 🟩 GET API (INFO) 1.获取 PAGE INFO 数据
const API_URL = IUrl__GET__v1_page_info_get;

//
// 🟩 GET API (LIST) - 🧪FN
export async function getApiPageInfo<TRES = IQueryRes, TREQ = IQueryReq>(
  params?: TREQ,
  rqQueryOpts?: IRqQueryOpts<TRES>,
) {
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
// export function useQueryPageInfo<TRES = IQueryRes, TREQ = IQueryReq>(
//   params?: TREQ,
//   rqQueryOpts?: IRqQueryOpts<TRES>,
// ) {
//   return useQuery({
//     queryKey: [API_URL, params],
//     queryFn: () => getApiPageInfo(params, rqQueryOpts),
//     ...rqQueryOpts,
//   });
// }
