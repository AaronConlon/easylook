import React, { forwardRef } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { useIsDarkMode } from '----pkg-uni/uni-hooks/useIsDarkMode';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import styles from './styles.module.scss';

interface IUStrongProps extends IUiCompBaseProps {}

type IUStrongRef = HTMLElement;

export const UStrong = forwardRef<IUStrongRef, IUStrongProps>(
  (props, ref) => {
    const { isDarkMode } = useIsDarkMode();

    const { className, ...restProps } = props;

    return (
      <strong
        ref={ref}
        className={cx(
          'g-uni-comp--UStrong',
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
