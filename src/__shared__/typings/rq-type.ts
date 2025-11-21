import type {
  UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query';
import type { QueryKey } from '@tanstack/query-core';

import type { IApi__BASE_ERROR__RES } from '__shared__/typings/_api-type';

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
