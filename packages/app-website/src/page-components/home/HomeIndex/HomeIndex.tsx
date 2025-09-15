import { forwardRef } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { ScreenMediaWidthCentered } from '@/components/ScreenMediaWidthCentered';

import { Carousel, EyeScience } from './_comps';

import styles from './styles.module.scss';

interface IUViewProps extends IUiCompBaseProps {}

export const HomeIndex = forwardRef<HTMLDivElement, IUViewProps>(
  (props, ref) => {
    const { className } = props;
    return (
      <div
        ref={ref}
        className={cx(
          styles['comp-wrapper'],
          className,
          'g-uni-comp--HomeIndex',
        )}
      >
        {/* 轮播图 */}
        <Carousel />
        <ScreenMediaWidthCentered>
          {/* 眼界科普 */}
          <EyeScience />
          {/* 产品介绍 */}
          {/* <ProductDesc /> */}
        </ScreenMediaWidthCentered>
      </div>
    );
  },
);
