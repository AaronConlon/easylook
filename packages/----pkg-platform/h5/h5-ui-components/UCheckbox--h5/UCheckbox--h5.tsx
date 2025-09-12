import type { CheckboxProps } from 'antd';
import { Checkbox as AntdCheckbox } from 'antd';
import React from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { useIsDarkMode } from '----pkg-uni/uni-hooks/useIsDarkMode';

import styles from './styles.module.scss';

interface ICheckboxProps extends CheckboxProps {}

export const UCheckbox = (props: ICheckboxProps) => {
  const { isDarkMode } = useIsDarkMode();

  const { className, ...restProps } = props;

  return (
    <AntdCheckbox
      className={cx(
        'g-uni-comp--UCheckbox',
        styles['comp-wrapper'],
        {
          [styles['comp-wrapper--isDarkMode']]: isDarkMode,
        },
        className,
      )}
      {...restProps}
    />
  );
};
