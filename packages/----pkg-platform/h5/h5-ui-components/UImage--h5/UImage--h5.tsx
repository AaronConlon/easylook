import type { ImgHTMLAttributes } from 'react';
import React, { forwardRef } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { useIsDarkMode } from '----pkg-uni/uni-hooks/useIsDarkMode';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import styles from '../Nbsp--h5/styles.module.scss';

// @ts-ignore
interface IUImageProps
  extends IUiCompBaseProps,
    ImgHTMLAttributes<HTMLImageElement> {
  children?: never; // img 本来就没有 children
}

export const UImage = forwardRef<HTMLImageElement, IUImageProps>(
  (props, ref) => {
    const { isDarkMode } = useIsDarkMode();

    const { className, ...restProps } = props;

    return (
      <img
        alt={props.alt || 'Image'}
        ref={ref}
        className={cx(
          'g-uni-comp--UImage',
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
