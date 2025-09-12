import { z } from 'zod';

import { fmtHiddenFieldsToOmit } from '----pkg-uni/uni-utils';

import {
  __EXAMPLE_ULID__,
  _baseDateHiddenFields,
  _BaseModel,
} from './_base.model';

const userModelHiddenFields = ['password', ..._baseDateHiddenFields];

export const UserModel = z
  .object({
    //
    // FIELDS --------------------------------------------------------------------
    id: z.string().meta({ example: __EXAMPLE_ULID__ }),
    name: z.string().meta({ example: 'John Doe' }),
    email: z.string().optional().meta({ example: 'john@example.com' }),
    phone: z.string().optional().meta({ example: '18699991111' }),
    password: z.string().meta({ example: 'uJszmNoQULxahGGZ' }),
    age: z.number().optional().meta({ example: 33 }),
  })
  .merge(_BaseModel);

//
// SCHEMA + TYPE ---------------------------------------------------------------

export const schemaUserModel = UserModel.omit(
  fmtHiddenFieldsToOmit(userModelHiddenFields),
);

export type IUserModel = z.infer<typeof schemaUserModel>;
