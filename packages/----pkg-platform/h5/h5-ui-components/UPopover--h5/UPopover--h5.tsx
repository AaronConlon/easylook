import type { PopoverProps } from 'antd';
import { Popover as AntdPopover } from 'antd';
import React from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import styles from './styles.module.scss';

interface IPopoverProps extends PopoverProps {}

export const UPopover = (props: IPopoverProps) => {
  const { className, ...restProps } = props;

  return (
    <AntdPopover
      className={cx(
        'g-uni-comp--UPopover',
        styles['comp-wrapper'],
        className,
      )}
      {...restProps}
    />
  );
};
