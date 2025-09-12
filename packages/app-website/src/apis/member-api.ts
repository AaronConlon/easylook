import { urlConfig } from '----pkg-uni/uni-configs';

/*
 |-----------------------------------------------------------------------------
 | 🟪 COMMON TYPES
 |-----------------------------------------------------------------------------
 |
 | ~ 通用类型
 |
 */

export interface IMemberDetail {
  address_on?: boolean;
  banner?: string;
  body?: string;
  coupon_code_use_coupon?: boolean;
  coupon_code_use_rebate?: boolean;
  description?: string;
  discount?: number;
  discount_end_time?: number;
  discount_fee?: number;
  discount_on?: boolean;
  discount_start_time?: number;
  fee?: number;
  id?: number;
  matrix_plan_writer_fee?: number;
  member_code_use_coupon?: boolean;
  member_code_use_rebate?: boolean;
  member_fee?: number;
  old_member_fee?: number;
  pre_pay?: boolean;
  rebate_discount?: number;
  rebate_discount_fee?: number;
  rebate_discount_on?: boolean;
  rebate_discount_type?: number;
  rebate_end_time?: number;
  rebate_rate?: number;
  rebate_start_time?: number;
  status?: number;
  title?: string;
  valid_time?: number;
}

/*
 |-----------------------------------------------------------------------------
 | 🟩 GET
 |-----------------------------------------------------------------------------
 |
 | 1.获取不同身份
 |
 */
// https://xxx.com/api/v2/member/single/info/get
export const IUrl__GET__v2_member_single_info_get =
  urlConfig.API_BASE_URL + `/v2/member/single/info/get`;

//
//
//
// 🔵 GET info

export type IApi__GET__member_single_info__REQ = {
  id: number;
};

export type IApi__GET__member_single_info__RES = {
  banner?: string;
  body?: string;
  description?: string;
  details?: IMemberDetail[];
  id?: number;
  is_expire?: boolean;
  is_pay?: boolean;
  level?: number;
  source_type?: number;
  status?: number;
  title?: string;
  user_type?: number;
};

export interface IApiUserNotifications {
  comment_count?: number;
  community_comment_count?: number;
  community_subscribe_count?: number;
  message_count?: number;
  online_count?: number;
  series_comment_count?: number;
  system_count?: number;
}
