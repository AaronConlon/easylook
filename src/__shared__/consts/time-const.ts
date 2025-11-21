const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;
const YEAR = DAY * 365.25;

//
//

export const TIME_CONST_FETCH_TIMEOUT = 30; // 30s 比较不容易超时
export const TIME_CONST_PULL_REFRESH_TIMEOUT = 3;

export const TIME_CONST_FMT = {
  // time
  FMT_DATE_TIME: 'YYYY-MM-DD HH:mm:ss',
  FMT_DATE: 'YYYY-MM-DD',
  FMT_TIME: 'HH:mm:ss',
};

export const TIME_CONST_RQ = {
  TIME_MOMENT: SECOND,
  TIME_AVOID_EFFECT_DUP_FETCH: 3 * SECOND,
  TIME_1_MIN: MINUTE,
  TIME_5_MIN: 5 * MINUTE,
  TIME_10_MIN: 10 * MINUTE,
  TIME_1_HOUR: HOUR,
  TIME_1_WEEK: WEEK,
  TIME_1_YEAR: YEAR,
  TIME_INFINITY: Infinity,
};
