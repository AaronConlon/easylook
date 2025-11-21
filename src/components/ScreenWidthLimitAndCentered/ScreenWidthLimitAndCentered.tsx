import React from 'react';

import type { ICompBaseProps } from '__shared__/typings/comp-type';

import { cx } from '__shared__/utils/cx-util';

import styles from './styles.module.scss';

interface IProps extends ICompBaseProps {}

export const ScreenWidthLimitAndCentered = (props: IProps) => {
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
