import Axios from 'axios';

import type { IRqQueryOpts } from '__shared__/typings/rq-type';

import { handleAxiosCatch, handleAxiosRes } from '__shared__/utils/axios-util';

import type {
  IAPI_V1_PAGE_INFO_GET_ITEM,
  IAPI_V1_PAGE_INFO_GET_REQ,
} from '@/apis/page-api';
import { API_URL_GET__V1_PAGE_INFO_GET } from '@/apis/page-api';

type IQueryRes = { data?: { data?: IAPI_V1_PAGE_INFO_GET_ITEM } };
type IQueryReq = IAPI_V1_PAGE_INFO_GET_REQ;

//
// 🟩 GET API (INFO) 1.获取 PAGE INFO 数据
const API_URL = API_URL_GET__V1_PAGE_INFO_GET;

//
// 🟩 GET API (LIST) - 🧪FN
export async function getApiPageInfo<TRES = IQueryRes, TREQ = IQueryReq>(
  params?: TREQ,
  rqQueryOpts?: IRqQueryOpts<TRES> & {
    __DEBUG_UQ_FORCE_PROD_API__?: boolean;
  },
) {
  // 必须新建，不带任何 header 去拿 cname
  const pageAxiosInst = Axios.create();

  let NEXT_API_URL = API_URL;

  if (rqQueryOpts?.__DEBUG_UQ_FORCE_PROD_API__) {
    NEXT_API_URL = API_URL.replace?.('neo.', '');
  }

  return pageAxiosInst
    .get(NEXT_API_URL, { params })
    .then((res) => handleAxiosRes<TRES>(res as any, rqQueryOpts))
    .catch((err) => {
      // 错误也不显示任何 toast
      // console.log('❌ getApiPageInfo - err', err);
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
