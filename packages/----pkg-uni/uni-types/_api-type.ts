import type { AxiosError, AxiosResponse } from 'axios';
import { z } from 'zod';

import { HTTP_STATUS_CODE } from '----pkg-uni/uni-consts/http-status-code-const';

export const zApiBaseResCode = z.number().refine(
  (val) =>
    new Set(
      Object.keys(HTTP_STATUS_CODE)
        .filter((key) => /^\d+$/.test(key))
        .map(Number),
    ).has(val),
  {
    message: '❌ Invalid HTTP status code',
  },
);

export type IApi__BASE_ERROR__RES = z.infer<typeof schemaApi__BASE_ERROR__RES>;

/*
 |-----------------------------------------------------------------------------
 | 🟪 COMMON TYPES
 |-----------------------------------------------------------------------------
 |
 | ~ 通用类型
 |
 */

//
// ✅ SUCCESS
export const schemaApi__BASE_SUCCESS__RES = z.object({
  code: zApiBaseResCode.optional().meta({ example: HTTP_STATUS_CODE.OK }),
  msg: z.string().optional().meta({ example: HTTP_STATUS_CODE['200'] }),
  data: z.unknown().optional(),
});

export type IApi__BASE_SUCCESS__RES = z.infer<
  typeof schemaApi__BASE_SUCCESS__RES
>;

//

export const schemaApi__BASE_PAGINATION__RES = z.object({
  total: z.number(),
  page: z.number().optional(),
  size: z.number().optional(),
});

export type IApi__BASE_PAGINATION__RES = z.infer<
  typeof schemaApi__BASE_PAGINATION__RES
>;

//
// ❌ ERROR
export const schemaApi__BASE_ERROR__RES = z.object({
  code: zApiBaseResCode.optional(),
  msg: z.string().optional(),
  error: z.union([z.instanceof(Error), z.number(), z.string(), z.boolean()]),
  __DEBUG_STACK__: z.any(), // ONLY debug mode
  //
  data: z.unknown(),
});

// 分页
export const schemaApi__BASE_PAGINATE__REQ = z.object({
  page: z.coerce.number().meta({ example: 1 }).optional(),
  size: z.coerce.number().meta({ example: 10 }).optional(),
});

export type IApi__BASE_PAGINATE__REQ = z.infer<
  typeof schemaApi__BASE_PAGINATE__REQ
>;

// jwt
export const schemaApi__BASE_HEADERS__REQ = z.object({
  Authorization: z.string().meta({ example: 'Bearer USER_TOKEN' }),
});

export interface IAxiosResObj<T = any> extends AxiosResponse<T> {
  data: T; // 这里的 data 是 axios 的 data，api 的 实际 data 是 data.data（多一层）
  statusText: string; // ⚠️ 这层是 Axios Raw，特地 Copy 了一个 Raw 的字段在这边
}

export interface IAxiosCatchErr extends AxiosError<IApi__BASE_ERROR__RES> {
  statusText: string; // ⚠️ 这层是 Axios Raw，特地 Copy 了一个 Raw 的字段在这边
}
