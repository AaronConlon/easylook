import { useRef, useState } from 'react';
import { LuShoppingCart } from 'react-icons/lu';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { usePageStore } from '----pkg-uni/uni-stores/usePageStore';

import styles from './styles.module.scss';

interface ProductHeroSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  onBuyClick?: () => void;
}

export const ProductHeroSection = (props: ProductHeroSectionProps) => {
  const { title, description, imageSrc, imageAlt, onBuyClick } = props;
  const page$_product = usePageStore((s) => s.page$_pageItem.product);

  const imageRef = useRef<HTMLDivElement>(null);
  const [imageTransform, setImageTransform] = useState({
    rotateX: 0,
    rotateY: 0,
  });

  const handleImageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // 鼠标相对于图片的 x 坐标
    const y = e.clientY - rect.top; // 鼠标相对于图片的 y 坐标

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // 计算旋转角度（最大 10 度）
    const rotateY = ((x - centerX) / centerX) * 10;
    const rotateX = ((centerY - y) / centerY) * 10;

    setImageTransform({ rotateX, rotateY });
  };

  const handleImageMouseLeave = () => {
    setImageTransform({ rotateX: 0, rotateY: 0 });
  };

  const handleBuyClick = () => {
    if (onBuyClick) {
      onBuyClick();
    } else {
      // 默认行为：可以跳转到购买页面或显示联系方式
      console.log('立即购买');
    }
  };

  return (
    <section className={cx(styles['hero-section'], 'scroll-animate')}>
      <div className={cx(styles['container'])}>
        <div className={cx(styles['hero-grid'])}>
          <div className={cx(styles['hero-content'])}>
            <h1 className={cx(styles['hero-title'])}>{title}</h1>
            <p className={cx(styles['hero-description'])}>{description}</p>
            <button
              className={cx(styles['buy-button'])}
              onClick={handleBuyClick}
            >
              <LuShoppingCart className={cx(styles['cart-icon'])} />
              <span>{page$_product.share.buyNowText}</span>
            </button>
          </div>
          <div
            ref={imageRef}
            className={cx(styles['hero-image-wrapper'])}
            onMouseMove={handleImageMouseMove}
            onMouseLeave={handleImageMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${imageTransform.rotateX}deg) rotateY(${imageTransform.rotateY}deg)`,
            }}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className={cx(styles['hero-image'])}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
