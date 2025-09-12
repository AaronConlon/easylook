import React from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { useIsDarkMode } from '----pkg-uni/uni-hooks/useIsDarkMode';

import type { IconProps } from '----pkg-uni/uni-assets/iconfont';
import IconFont from '----pkg-uni/uni-assets/iconfont';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

export interface IUIconProps extends IUiCompBaseProps, IconProps {
  style?: any;
}

import styles from './styles.module.scss';

export const UIcon = (props: IUIconProps) => {
  const { isDarkMode } = useIsDarkMode();

  const { className, name, style, size, color } = props;

  return (
    <IconFont
      // @ts-ignore
      className={cx(
        styles['comp-wrapper'],
        {
          [styles['comp-wrapper--isDarkMode']]: isDarkMode,
        },
        className,
        'g-uni-comp--UIcon',
      )}
      style={style}
      color={color || style?.color}
      size={size || style?.width || style?.height}
      name={name}
    />
  );
};
