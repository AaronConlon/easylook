import type { z } from '@hono/zod-openapi';

import { schemaApi__BASE_SUCCESS__RES } from '__shared__/typings/_api-type';

export const fmtHiddenFieldsToOmit = (hiddenKeys: string[]) => {
  return hiddenKeys.reduce((acc, key) => {
    // @ts-expect-error
    acc[key] = true;
    return acc;
  }, {});
};

export const createSchemaApi__RES = <T extends z.ZodRawShape>(
  resSchema: z.ZodObject<T>,
) => {
  return schemaApi__BASE_SUCCESS__RES.extend(resSchema.shape);
};
