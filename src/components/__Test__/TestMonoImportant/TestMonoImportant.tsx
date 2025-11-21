import React from 'react';

import type { ICompBaseProps } from '__shared__/typings/comp-type';

import { cx } from '__shared__/utils/cx-util';

interface IProps extends ICompBaseProps {}

export const TestMonoImportant = (props: IProps) => {
  console.log('TestMonoImportant', cx);

  return <div>TestMonoImportant (div)</div>;
};
