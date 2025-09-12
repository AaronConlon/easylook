import type { TooltipProps } from 'antd';
import { Tooltip as AntdTooltip } from 'antd';
import React from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import styles from './styles.module.scss';

type ITooltipProps = TooltipProps & {};

export const UTooltip = (props: ITooltipProps) => {
  const { className, ...restProps } = props;

  return (
    <AntdTooltip
      className={cx(
        'g-uni-comp--UTooltip',
        styles['comp-wrapper'],
        className,
      )}
      {...restProps}
    />
  );
};
