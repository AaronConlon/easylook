import { appConfig, urlConfig } from '----pkg-uni/uni-configs';

/*
 |-----------------------------------------------------------------------------
 | 🟪 COMMON TYPES
 |-----------------------------------------------------------------------------
 |
 | ~ 通用类型
 |
 */

/*
 |-----------------------------------------------------------------------------
 | 🟩 GET
 |-----------------------------------------------------------------------------
 |
 | 1.获取 PAGE INFO 数据
 |
 */
// https://xxx.com/api/v1/page/info/get?cname=find_x6_pro_report&type=1
//

export const IUrl__GET__v1_page_info_get =
  urlConfig.API_BASE_URL +
  `/v1/page/info/get?cname=${appConfig.PAGE_CNAME}&type=1`;

//
//
//
// 🔵 GET info

export type IApi__GET__page_info__REQ = {
  mock?: boolean;
};

export type IApi__GET__page_info__RES = any;
