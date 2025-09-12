import React, { forwardRef } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { useIsDarkMode } from '----pkg-uni/uni-hooks/useIsDarkMode';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import styles from './styles.module.scss';

interface IUCanvasProps extends IUiCompBaseProps {}

export const UCanvas = forwardRef<HTMLCanvasElement, IUCanvasProps>(
  (props, ref) => {
    const { isDarkMode } = useIsDarkMode();

    const { className, ...restProps } = props;

    return (
      <canvas
        ref={ref}
        className={cx(
          styles['comp-wrapper'],
          {
            [styles['comp-wrapper--isDarkMode']]: isDarkMode,
          },
          className,
          'g-uni-comp--UCanvas',
        )}
        {...restProps}
      />
    );
  },
);
