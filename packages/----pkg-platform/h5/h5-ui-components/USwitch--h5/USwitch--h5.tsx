import type { SwitchProps as AntdSwitchProps } from 'antd';
import { Switch as AntdSwitch } from 'antd';
import React from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import styles from './styles.module.scss';

// 对齐 props，以 antd 为准，如果 rn 没有，就想办法实现
// @ts-ignore
interface ISwitchProps extends IUiCompBaseProps, AntdSwitchProps {}

export const USwitch = (props: ISwitchProps) => {
  const { className, ...restProps } = props;

  return (
    <AntdSwitch
      className={cx('g-uni-comp--USwitch', styles['comp-wrapper'], className)}
      {...restProps}
    />
  );
};
