import React from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import styles from './styles.module.scss';

interface IProps extends IUiCompBaseProps {}

export const ScreenMediaWidthCentered: React.FC<IProps> = (props) => {
  return (
    <div
      className={cx(
        styles['comp-wrapper'],
        'g-comp-ScreenMediaWidthCentered',
        props.className,
      )}
    >
      {props.children}
    </div>
  );
};
