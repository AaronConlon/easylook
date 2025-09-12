// import * as z from "zod/v4";
import z from 'zod';

import { createSchemaApi__RES } from '----pkg-uni/uni-utils';
import {
  __EXAMPLE_DATE_TIME__,
  __EXAMPLE_JWT_TOKEN__,
  __EXAMPLE_UNIX_TS__,
} from '----pkg-uni/uni-models/_base.model';
import { schemaUserModel } from '----pkg-uni/uni-models/user.model';
import { urlConfig } from '----pkg-uni/uni-configs';

/*
 |-----------------------------------------------------------------------------
 | 🟪 COMMON TYPES
 |-----------------------------------------------------------------------------
 |
 | ~ 通用类型
 |
 */

export const schemaApi__POST__auth_login__REQ = z
  .object({
    email: z.string().optional().meta({ example: '--SEED_USER_ADMIN--' }),
    phone: z.string().optional().meta({ example: '--SEED_USER_ADMIN--' }),
    password: z.string().meta({ example: '--SEED_USER_ADMIN--' }),
  })
  .refine((data) => data.email || data.phone, {
    message: 'zod.custom.require_one_filed',
    params: {
      field: 'email 或 phone',
    },
  });

export type IApi__POST__auth_login__REQ = z.infer<
  typeof schemaApi__POST__auth_login__REQ
>;

//
export const schemaApi__BASE__auth_jwt = z.object({
  token: z.string().meta({ example: __EXAMPLE_JWT_TOKEN__ }),
  exp: z.number().meta({ example: __EXAMPLE_UNIX_TS__ }),
  __expStr__: z.string().meta({ example: __EXAMPLE_DATE_TIME__ }),
});

export const schemaApi__POST__auth_login__RES = createSchemaApi__RES(
  z.object({
    data: z.object({
      user: schemaUserModel,
      jwt: schemaApi__BASE__auth_jwt,
    }),
  }),
);

export type IApi__POST__auth_login__RES = z.infer<
  typeof schemaApi__POST__auth_login__RES
>;

/*
 |-----------------------------------------------------------------------------
 | 🟩 GET
 |-----------------------------------------------------------------------------
 |
 | ---
 |
 */

/*
 |-----------------------------------------------------------------------------
 | 🟨 POST
 |-----------------------------------------------------------------------------
 |
 | 用户登录
 |
 */
export const IUrl__POST__v1_auth_login =
  urlConfig.API_BASE_URL + '/v1/auth/login';
