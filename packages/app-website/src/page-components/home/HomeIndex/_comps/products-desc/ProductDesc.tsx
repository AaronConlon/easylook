import { forwardRef } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { UCard } from '----pkg-uni/uni-ui-components/UCard';

import { useNavigate } from '----pkg-uni/uni-hooks/useNavigate';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { usePageStore } from '----pkg-uni/uni-stores/usePageStore';

import { ContainerTitle } from '@/components/ContainerTitle';
import { ScreenWidthLimitAndCentered } from '@/components/ScreenWidthLimitAndCentered';

import { MASTER_ROUTER_PATHS } from '@/consts/master-router-paths';

import styles from './styles.module.scss';

interface IProductDescProps extends IUiCompBaseProps {}

export const ProductDesc = forwardRef<HTMLDivElement, IProductDescProps>(
  (props, ref) => {
    const { className } = props;
    const navigate = useNavigate();

    const data = usePageStore((s) => s.page$_pageItem.home.productDesc);

    const handleCardClick = (
      productType: 'training-box' | 'integrated-trainer',
    ) => {
      // 跳转到对应的产品详情页
      if (productType === 'training-box') {
        navigate({ to: MASTER_ROUTER_PATHS['/product-1'] });
      } else {
        navigate({ to: MASTER_ROUTER_PATHS['/product-2'] });
      }
    };

    return (
      <div
        ref={ref}
        id="product-desc"
        className={cx(
          styles['comp-wrapper'],
          className,
          'g-uni-comp--ProductDesc',
        )}
      >
        <ContainerTitle title={data.title} subtitle={data.subtitle} />

        <br />
        <br />
        <br />

        <ScreenWidthLimitAndCentered
          className={cx(styles['products-container'])}
        >
          {/* 视觉训练套盒 */}
          <UCard
            className={cx(styles['product-card'])}
            onClick={() => handleCardClick('training-box')}
            // style={{ opacity }}
            cover={
              <div className={cx(styles['card-image'])}>
                <img src={data.items[0].image} alt="视觉训练套盒" />
              </div>
            }
          >
            {/* <div className={cx(styles['card-image'])}> */}
            {/*   <img */}
            {/*     src="https://de4965e.webp.li/blog-images/2025/10/0e5a5c241bd10258b63347226baeb359.png" */}
            {/*     alt="视觉训练套盒" */}
            {/*   /> */}
            {/* </div> */}
            <div className={cx(styles['card-content'])}>
              <h3 className={cx(styles['card-title'])}>
                {data.items[0].title}
              </h3>
              <p className={cx(styles['card-description'])}>
                {data.items[0].description}
              </p>
            </div>
          </UCard>
          {/* 集合训练器 */}
          <UCard
            className={cx(styles['product-card'])}
            onClick={() => handleCardClick('integrated-trainer')}
            // onMouseEnter={() => setOpacity(0.5)}
            // onMouseLeave={() => setOpacity(1)}
            cover={
              <div className={cx(styles['card-image'])}>
                <img src={data.items[1].image} alt="集合训练器" />
              </div>
            }
          >
            <div className={cx(styles['card-content'])}>
              <h3 className={cx(styles['card-title'])}>
                {data.items[1].title}
              </h3>
              <p className={cx(styles['card-description'])}>
                {data.items[1].description}
              </p>
            </div>
          </UCard>
        </ScreenWidthLimitAndCentered>
      </div>
    );
  },
);
