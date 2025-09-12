import React from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

interface IProps extends IUiCompBaseProps {}

export const TestMonoImportant: React.FC<IProps> = (props) => {
  console.log('TestMonoImportant', cx);

  return <div>TestMonoImportant (div)</div>;
};
