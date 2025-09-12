import React, { forwardRef } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { useIsDarkMode } from '----pkg-uni/uni-hooks/useIsDarkMode';

import IconFont from '----pkg-uni/uni-assets/iconfont';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import styles from './styles.module.scss';

export interface IUSpinLoadingProps extends IUiCompBaseProps {}

export const USpinLoading = forwardRef<HTMLSpanElement, IUSpinLoadingProps>(
  (props, ref) => {
    const { isDarkMode } = useIsDarkMode();

    const { className, ...restProps } = props;

    return (
      <IconFont
        name="i-ext-loading-2"
        className={cx(
          'g-uni-comp--USpinLoading',
          styles['comp-wrapper'],
          {
            [styles['comp-wrapper--isDarkMode']]: isDarkMode,
          },
          className,
        )}
        {...restProps}
      />
    );
  },
);
