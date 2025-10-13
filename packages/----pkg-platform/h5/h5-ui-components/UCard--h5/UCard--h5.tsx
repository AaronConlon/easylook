import { Card } from 'antd';
import type { CardProps } from 'antd';
import React, { forwardRef } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { useIsDarkMode } from '----pkg-uni/uni-hooks/useIsDarkMode';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import styles from './styles.module.scss';

interface IUCardProps extends IUiCompBaseProps, CardProps {
  children?: React.ReactNode;
}

type IUCardRef = unknown;

export const UCard = forwardRef<IUCardRef, IUCardProps>((props) => {
  const { isDarkMode } = useIsDarkMode();

  const { className, style, ...restProps } = props;

  return (
    <Card
      className={cx(
        styles['comp-wrapper'],
        {
          [styles['comp-wrapper--isDarkMode']]: isDarkMode,
        },
        props.className,
        'g-uni-comp--UCard',
      )}
      style={style}
      {...restProps}
    />
  );
});
