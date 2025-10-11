import { forwardRef } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import {
  AboutUs,
  Carousel,
  Encyclopedia,
  EyeScience,
  Partnership,
  ProductDesc,
} from './_comps';

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

        {/* 眼界科普 - 奇数（白色背景） */}
        <div className={cx(styles['section'], styles['section--odd'])}>
          <EyeScience />
        </div>

        {/* 产品介绍 - 偶数（灰色背景） */}
        <div className={cx(styles['section'], styles['section--even'])}>
          <ProductDesc />
        </div>

        {/* 眼界百科 - 奇数（白色背景） */}
        <div className={cx(styles['section'], styles['section--odd'])}>
          <Encyclopedia />
        </div>

        {/* 合作加盟 - 偶数（灰色背景） */}
        <div className={cx(styles['section'], styles['section--even'])}>
          <Partnership />
        </div>

        {/* 关于我们 - 奇数（白色背景） */}
        <div className={cx(styles['section'], styles['section--odd'])}>
          <AboutUs />
        </div>

        {/* 合作伙伴 */}
        {/* <Partners /> */}
        {/* 知识产权 */}
        {/* <IntellectualProperty /> */}
      </div>
    );
  },
);
