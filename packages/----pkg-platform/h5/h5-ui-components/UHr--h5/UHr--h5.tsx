import React, { forwardRef } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { useIsDarkMode } from '----pkg-uni/uni-hooks/useIsDarkMode';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import styles from './styles.module.scss';

interface IUHrProps extends IUiCompBaseProps {}

export const UHr = forwardRef<HTMLHRElement, IUHrProps>((props, ref) => {
  const { isDarkMode } = useIsDarkMode();

  const { className, style, ...restProps } = props;

  return (
    <hr
      ref={ref}
      className={cx(
        styles['comp-wrapper'],
        {
          [styles['comp-wrapper--isDarkMode']]: isDarkMode,
        },
        className,
        'g-uni-comp--UHr',
      )}
      style={style}
      {...restProps}
    />
  );
});
