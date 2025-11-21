import React, { forwardRef } from 'react';

import type { ICompBaseProps } from '__shared__/typings/comp-type';

import { cx } from '__shared__/utils/cx-util';
import { useIsDarkMode } from '__shared__/hooks/useIsDarkMode';

import { USpin } from '__shared__/ui-components/USpin';

import styles from './styles.module.scss';

export interface IUSpinLoadingProps extends ICompBaseProps {
  useThemeStore: any;
}

export const USpinLoading = forwardRef<HTMLSpanElement, IUSpinLoadingProps>(
  (props, ref) => {
    const { isDarkMode } = useIsDarkMode({
      useThemeStore: props.useThemeStore,
    });

    const { className, ...restProps } = props;

    return (
      <USpin
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
