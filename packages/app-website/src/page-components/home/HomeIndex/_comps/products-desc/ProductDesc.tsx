import { forwardRef, useState } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { useNavigate } from '----pkg-uni/uni-hooks/useNavigate';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { ContainerTitle } from '@/components/ContainerTitle';

import { MASTER_ROUTER_PATHS } from '@/consts/master-router-paths';

import styles from './styles.module.scss';

interface IProductDescProps extends IUiCompBaseProps {}

export const ProductDesc = forwardRef<HTMLDivElement, IProductDescProps>(
  (props, ref) => {
    const { className } = props;
    const navigate = useNavigate();

    const [opacity, setOpacity] = useState(1);

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
        <ContainerTitle
          title="产品介绍"
          subtitle="专业的医疗级眼科检测设备，为眼健康提供精准筛查方案"
        />

        <br />
        <br />
        <br />

        <div className={cx(styles['products-container'])}>
          {/* 视觉训练套盒 */}
          <div
            className={cx(styles['product-card'])}
            onClick={() => handleCardClick('training-box')}
            style={{ opacity }}
          >
            <div className={cx(styles['card-image'])}>
              <img src="/product-box2.jpg" alt="视觉训练套盒" />
            </div>
            <div className={cx(styles['card-content'])}>
              <h3 className={cx(styles['card-title'])}>视觉训练套盒</h3>
              <p className={cx(styles['card-description'])}>
                {
                  '视立优·视觉训练套盒是一款集成式一体化通用视觉训练方案，可用于屈光不正人群；弱视、斜视、斜视术后康复人群；眼保健人群；视疲劳、阅读障碍、学习困难等非斜视性双眼视功能异常人群。'
                }
              </p>
            </div>
          </div>
          {/* 集合训练器 */}
          <div
            className={cx(styles['product-card'])}
            onClick={() => handleCardClick('integrated-trainer')}
            onMouseEnter={() => setOpacity(0.5)}
            onMouseLeave={() => setOpacity(1)}
          >
            <div className={cx(styles['card-image'])}>
              <img
                src="https://de4965e.webp.li/blog-images/2025/10/563cfdd6e3d71c15e1f71882e252379a.png"
                alt="集合训练器"
              />
            </div>
            <div className={cx(styles['card-content'])}>
              <h3 className={cx(styles['card-title'])}>集合训练器</h3>
              <p className={cx(styles['card-description'])}>
                {
                  '视立优 - 集合训练器是一类专为视力保护与改善设计的智能硬件设备，广泛应用于近视防控、弱视训练、视功能提升等场景，尤其适合儿童和青少年用户。'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  },
);
