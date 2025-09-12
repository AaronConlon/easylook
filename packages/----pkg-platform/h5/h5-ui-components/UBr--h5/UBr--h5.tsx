import React, { forwardRef } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { useIsDarkMode } from '----pkg-uni/uni-hooks/useIsDarkMode';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import styles from './styles.module.scss';

interface IUBrProps extends IUiCompBaseProps {}

type IUBrRef = HTMLBRElement;

export const UBr = forwardRef<IUBrRef, IUBrProps>((props, ref) => {
  const { isDarkMode } = useIsDarkMode();

  const { className, style, ...restProps } = props;

  return (
    <br
      ref={ref}
      className={cx(
        styles['comp-wrapper'],
        {
          [styles['comp-wrapper--isDarkMode']]: isDarkMode,
        },
        className,
        'g-uni-comp--UBr',
      )}
      style={style}
      {...restProps}
    />
  );
});
