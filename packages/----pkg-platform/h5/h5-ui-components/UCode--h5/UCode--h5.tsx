import React, { forwardRef } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { useIsDarkMode } from '----pkg-uni/uni-hooks/useIsDarkMode';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

interface IUCodeProps extends IUiCompBaseProps {}

type IUCodeRef = HTMLElement;

import styles from './styles.module.scss';

export const UCode = forwardRef<IUCodeRef, IUCodeProps>((props, ref) => {
  const { isDarkMode } = useIsDarkMode();

  const { className, style, ...restProps } = props;

  return (
    <code
      ref={ref}
      className={cx(
        styles['comp-wrapper'],
        {
          [styles['comp-wrapper--isDarkMode']]: isDarkMode,
        },
        props.className,
        'g-uni-comp--UCode',
      )}
      style={style}
      {...restProps}
    />
  );
});
