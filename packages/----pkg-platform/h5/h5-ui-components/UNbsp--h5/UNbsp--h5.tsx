import React, { forwardRef } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { useIsDarkMode } from '----pkg-uni/uni-hooks/useIsDarkMode';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import styles from './styles.module.scss';

export interface IUNbspProps extends IUiCompBaseProps {}

export const UNbsp = forwardRef<HTMLSpanElement, IUNbspProps>(
  (props, ref) => {
    const { isDarkMode } = useIsDarkMode();

    const { className, ...restProps } = props;

    return (
      <span
        ref={ref}
        className={cx(
          'g-uni-comp--UNbsp',
          styles['comp-wrapper'],
          {
            [styles['comp-wrapper--isDarkMode']]: isDarkMode,
          },
          className,
        )}
        {...restProps}
      >
        &nbsp;
      </span>
    );
  },
);
