import React from 'react';
import type { TableProps } from 'antd';
import { Table as AntdTable } from 'antd';

import { cx } from '----pkg-uni/uni-utils/cx-util';

interface IUTableProps extends TableProps {
  children?: React.ReactNode | undefined;
}

export const UTable = (props: IUTableProps) => {
  const { className, ...restProps } = props;

  return (
    <AntdTable
      className={cx('g-uni-comp--UTable', className)}
      {...restProps}
    />
  );
};
