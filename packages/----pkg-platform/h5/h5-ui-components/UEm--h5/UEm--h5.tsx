import React, { forwardRef } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { useIsDarkMode } from '----pkg-uni/uni-hooks/useIsDarkMode';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import styles from './styles.module.scss';

interface IUEmProps extends IUiCompBaseProps {}

type IUEmRef = HTMLElement;

export const UEm = forwardRef<IUEmRef, IUEmProps>((props, ref) => {
  const { isDarkMode } = useIsDarkMode();

  const { className, style, ...restProps } = props;
  return (
    <strong
      ref={ref}
      className={cx(
        styles['comp-wrapper'],
        {
          [styles['comp-wrapper--isDarkMode']]: isDarkMode,
        },
        props.className,
        'g-uni-comp--UEm',
      )}
      style={style}
      {...restProps}
    />
  );
});
