import type {
  UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import type { QueryKey } from '@tanstack/query-core';

import type { IApi__BASE_ERROR__RES } from '----pkg-uni/uni-types/_api-type';

// T 顺序 遵循 rq 原版
export type IRqMutationOpts<
  TData = unknown,
  TVariables = void,
  TError = IApi__BASE_ERROR__RES,
  TContext = unknown,
> = UseMutationOptions<TData, TError, TVariables, TContext> & {
  disabledErrorMsg?: boolean;
};

// T 顺序 遵循 rq 原版
export type IRqQueryOpts<
  TQueryFnData = unknown,
  TData = TQueryFnData,
  TError = IApi__BASE_ERROR__RES,
  TQueryKey extends QueryKey = QueryKey,
> = UseQueryOptions<TQueryFnData, TError, TData, TQueryKey> & {
  disabledErrorMsg?: boolean;
};

// -----------------------------------------------------------------------------

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;
const YEAR = DAY * 365.25;

export const queryTime = {
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

// -----------------------------------------------------------------------------

export const rqClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      gcTime: queryTime.TIME_INFINITY,
      networkMode: 'offlineFirst',
    },
  },
});
