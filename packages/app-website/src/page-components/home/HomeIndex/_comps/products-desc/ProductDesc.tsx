import { forwardRef } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { useNavigate } from '----pkg-uni/uni-hooks/useNavigate';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { ContainerTitle } from '@/components/ContainerTitle';

import { ProductVideos } from './_comps/ProductVideos';

import styles from './styles.module.scss';

interface IProductDescProps extends IUiCompBaseProps {}

export const ProductDesc = forwardRef<HTMLDivElement, IProductDescProps>(
  (props, ref) => {
    const { className } = props;
    const navigate = useNavigate();

    const handleCardClick = (
      productType: 'training-box' | 'integrated-trainer',
    ) => {
      // 跳转到对应的产品详情页
      if (productType === 'training-box') {
        navigate({ to: '/brand-easylook' });
      } else {
        navigate({ to: '/brand-weiai' });
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

        <div className={cx(styles['products-container'])}>
          {/* 视觉训练套盒 */}
          <div
            className={cx(
              styles['product-card'],
              styles['product-card--training-box'],
            )}
            onClick={() => handleCardClick('training-box')}
          >
            <div className={cx(styles['card-image'])}>
              <img src="product-box2.jpg" alt="视觉训练套盒" />
              <div className={cx(styles['image-overlay'])} />
            </div>
            <div className={cx(styles['card-content'])}>
              <h3 className={cx(styles['card-title'])}>视觉训练套盒</h3>
              <p className={cx(styles['card-description'])}>
                {'视立优 - 视觉训练套盒是一款集成式一体化的通用视觉训练方案。'}
              </p>
            </div>
          </div>
          {/* 集合训练器 */}
          <div
            className={cx(
              styles['product-card'],
              styles['product-card--integrated-trainer'],
            )}
            onClick={() => handleCardClick('integrated-trainer')}
          >
            <div className={cx(styles['card-image'])}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/eye-with-warm-tones-and-circular-scanning-patterns-VPs8gh06LzUJQvBF66TDXa9mCaWDye.jpg"
                alt="集合训练器"
              />
              <div className={cx(styles['image-overlay'])} />
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
          {/* 一行四个视频，hover 到不同的产品，展示不同的视频卡片，使用图片模拟可播放效果的视频卡片 */}
        </div>
        <ProductVideos />
      </div>
    );
  },
);
