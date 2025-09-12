import React, { forwardRef, type ImgHTMLAttributes } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import styles from './styles.module.scss';

interface IUScrollViewProps
  extends IUiCompBaseProps,
    ImgHTMLAttributes<HTMLDivElement> {
  accessible?: boolean; // FOR RN PROPS ONLY
  onClick?: () => void;
  //
  children?: any;
  block?: boolean;

  style?: any;
}

export const UScrollView = forwardRef<HTMLDivElement, IUScrollViewProps>(
  (props, ref) => {
    const {
      className,
      block, // FOR RN REST ONLY
      ...restProps
    } = props;

    return (
      <div
        ref={ref}
        className={cx(
          styles['comp-wrapper'],
          {
            [styles['comp-wrapper--block']]: block,
          },
          className,
          'g-uni-comp--UScrollView',
        )}
        onClick={props.onClick}
        {...restProps}
      />
    );
  },
);
