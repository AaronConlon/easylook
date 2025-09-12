import React, { forwardRef } from 'react';
import type { ButtonProps } from 'antd';
import { Button as AntdButton } from 'antd';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { useIsDarkMode } from '../../h5-hooks/useIsDarkMode--h5';

import styles from './styles.module.scss';

interface IButtonProps extends ButtonProps {
  accessible?: boolean; // FOR RN PROPS ONLY
}

export const UButton = forwardRef<HTMLButtonElement, IButtonProps>(
  (props, ref) => {
    const { isDarkMode } = useIsDarkMode();

    const {
      className,
      accessible, // FOR RN REST ONLY
      ...restProps
    } = props;

    return (
      <AntdButton
        ref={ref}
        className={cx(
          styles['comp-wrapper'],
          {
            [styles['comp-wrapper--isDarkMode']]: isDarkMode,
          },
          className,
          'g-uni-comp--UButton',
        )}
        {...restProps}
      />
    );
  },
);
