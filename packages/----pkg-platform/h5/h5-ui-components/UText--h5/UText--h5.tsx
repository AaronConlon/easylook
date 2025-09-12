import React, { forwardRef } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { useIsDarkMode } from '----pkg-uni/uni-hooks/useIsDarkMode';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import styles from './styles.module.scss';

export interface IUTextProps extends IUiCompBaseProps {
  preMode?: boolean; // H5 ONLY
}

export const UText = forwardRef<HTMLDivElement, IUTextProps>((props, ref) => {
  const { isDarkMode } = useIsDarkMode();

  const { className, style, preMode, ...restProps } = props;

  return (
    <span
      ref={ref}
      className={cx(
        styles['comp-wrapper'],
        {
          [styles['comp-wrapper--isDarkMode']]: isDarkMode,
          [styles['comp-wrapper--preMode']]: preMode,
        },
        className,
        'g-uni-comp--UText',
      )}
      style={style}
      {...restProps}
    />
  );
});
