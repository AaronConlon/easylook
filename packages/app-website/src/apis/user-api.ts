import { urlConfig } from '----pkg-uni/uni-configs';

/*
 |-----------------------------------------------------------------------------
 | 🟪 COMMON TYPES
 |-----------------------------------------------------------------------------
 |
 | ~ 通用类型
 |
 */

export interface IUserAddress {
  id?: number;
  user_id?: number;
  province?: string;
  city?: string;
  district?: string;
  address?: string;
  is_used?: boolean;
  phone?: string;
  nickname?: string;
  email?: string;
  status?: number;
  created_at?: number;
  updated_at?: number;
}

export interface IUserMember {
  banner?: string;
  member_code?: string;
  is_expire?: boolean;
  end_time?: number;
  is_pay?: boolean;
}

export interface IUserSocialNetwork {
  id?: number;
  type?: number;
  nickname?: string;
  uid?: string;
  user_slug?: string;
}

export interface IUserUserFlag {
  id?: number;
  name?: string;
  description?: string;
  icon?: string;
  url?: string;
  color?: string;
  status?: number;
  key?: string;
}

/*
 |-----------------------------------------------------------------------------
 | 🟩 GET
 |-----------------------------------------------------------------------------
 |
 | 1.获取用户信息
 |
 */

// https://xxx.com/api/v1/user/info/get
export const IUrl__GET__v1_user_info_get =
  urlConfig.API_BASE_URL + `/v1/user/info/get`;

export interface IApi__GET__user_info__REQ {}

export interface IApi__GET__user_info__RES {
  nickname?: string;
  avatar?: string;
  key?: string;
  email?: string;
  occupation?: string;
  city?: string;
  province?: string;
  bio?: string;
  phone?: string;
  alipay?: string;
  real_name?: string;
  id?: number;
  created_at?: number;
  signed_writer?: boolean;
  money?: number;
  email_messages?: boolean;
  email_matrixs?: boolean;
  avatar_id?: number;
  national_area_code?: string;
  national_area_id?: number;
  power_plus_flag?: number;
  user_flags?: IUserUserFlag[];
  user_badges?: any[];
  api_token_flag?: boolean;
  banned_until?: number;
  blocked?: boolean;
  franchised_writer?: boolean;
  professional_writer?: boolean;
  role?: number;
  vote_count?: number;
  sign_contract_request_fields?: string;
  sign_contract_request_occupation?: string;
  sign_contract_request_url?: string;
  writing_request_1?: string;
  writing_request_2?: string;
  writing_request_3?: string;
  message_on?: boolean;
  is_email_verified?: boolean;
  no_read?: boolean;
  liked_count?: number;
  id_card_attachment_ids?: number[];
  id_card_attachments?: string[];
  articles_count?: number;
  articles_word_count?: number;
  followed_count?: number;
  following_count?: number;
  is_series_author?: boolean;
  special_column_writer?: boolean;
  social_networks?: IUserSocialNetwork[];
  article_view_count?: number;
  special_column_apply_on?: boolean;
  exp_on?: boolean;
  slug?: string;
  slug_update_count?: number;
  email_on?: boolean;
  email_day_collect_on?: boolean;
  email_important_on?: boolean;
  password_bind?: boolean;
  series_article_noread_total?: number;
  message_contact_unread_total?: number;
  series_pay_count?: number;
  series_comment_manage_count?: number;
  user_plan_flags?: any[];
  recommend_to_home_article_count?: number;
  matrix_article_count?: number;
  released_article_count?: number;
  recommend_article_count?: number;
  user_reward_badges?: any[];
  id_hash?: string;
  apply_audit_permissions?: boolean;
  matrix_article_style?: number;
  user_old_badges?: any[];
  member?: IUserMember;
  id_card_code?: string;
  comment_convention_on?: boolean;
  withdrawal_corporate_on?: boolean;
  address?: IUserAddress;
  in_mainland?: boolean;
  product_booking_outstation_auth_on?: boolean;
  product_booking_outstation_auth_updated_at?: number;
  push_on?: boolean;
  push_community_subscribe_on?: boolean;
  push_community_reply_on?: boolean;
  push_community_chosen_on?: boolean;
  id_card_auth?: boolean;
}

export const IUrl__GET__v1_information_user_unread_count_info_get =
  urlConfig.API_BASE_URL + `/v1/information/user/unread/count/info/get`;

export interface IApi__GET__information_user_unread_count_info__REQ {}

export interface IApi__GET__information_user_unread_count_info__RES {
  comment_count?: number;
  community_comment_count?: number;
  community_subscribe_count?: number;
  message_count?: number;
  online_count?: number;
  series_comment_count?: number;
  system_count?: number;
}
