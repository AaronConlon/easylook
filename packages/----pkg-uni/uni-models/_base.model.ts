import { z } from 'zod';

// export interface _BaseModel {
//   created_at?: Date;
//   updated_at?: Date;
//   deleted_at?: Date;
// }
export const _BaseModel = z.object({
  created_at: z.date(),
  updated_at: z.date(),
  deleted_at: z.date(),
});

export const _baseDateHiddenFields = ['created_at', 'updated_at', 'deleted_at'];

export const __EXAMPLE_ULID__ = '01HZY1BNM9YZT9RPSH7V4DDJ2T';
export const __EXAMPLE_JWT_TOKEN__ = 'eyJhbGciOiJIUzI1N...';
export const __EXAMPLE_UNIX_TS__ = 1744966365;
export const __EXAMPLE_DATE_TIME__ = '2025-05-21 14:46:23';
