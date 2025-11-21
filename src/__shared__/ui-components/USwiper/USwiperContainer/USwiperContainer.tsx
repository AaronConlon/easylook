import React, { forwardRef } from 'react';
import type { SwiperProps, SwiperRef } from 'swiper/react';
import { Swiper } from 'swiper/react';
import cx from 'classnames';

import type { ICompBaseProps } from '__shared__/typings/comp-type';

import styles from './styles.module.scss';

export type IUSwiperContainerProps = React.RefAttributes<SwiperRef> &
  React.PropsWithChildren<SwiperProps> &
  ICompBaseProps;

export const USwiperContainer = forwardRef<SwiperRef, IUSwiperContainerProps>(
  (props, ref) => {
    const { className, style, children, ...restProps } = props;

    return (
      <Swiper
        ref={ref}
        className={cx(
          styles['comp-wrapper'],
          className,
          `g-comp--USwiperContainer`,
        )}
        style={style}
        {...restProps}
      >
        {children}
      </Swiper>
    );
  },
);
