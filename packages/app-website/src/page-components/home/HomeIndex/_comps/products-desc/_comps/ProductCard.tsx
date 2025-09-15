import { forwardRef, useEffect, useRef, useState } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

export interface ProductItem {
  id: string;
  title: string;
  content: string;
  features: string[];
  image: string;
}

interface ProductCardProps {
  item: ProductItem;
  index: number;
  className?: string;
  styles: Record<string, string>;
}

export const ProductCard = forwardRef<HTMLDivElement, ProductCardProps>(
  ({ item, index, className, styles }, ref) => {
    const [isInView, setIsInView] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [showNotation, setShowNotation] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
      const currentCard = cardRef.current;
      if (!currentCard) return;

      // 创建 Intersection Observer
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
              // 设置 data-in-view 属性，触发 CSS 动画
              setIsInView(true);
              setHasAnimated(true);

              // 延迟启动 RoughNotation 动画
              setTimeout(
                () => {
                  setShowNotation(true);
                },
                400 + index * 150,
              );

              // 动画完成后断开观察器
              if (observerRef.current) {
                observerRef.current.unobserve(entry.target);
              }
            }
          });
        },
        {
          threshold: 0.2, // 当卡片20%可见时触发
          rootMargin: '50px', // 提前50px触发
        },
      );

      observerRef.current.observe(currentCard);

      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }, [hasAnimated, index]);

    return (
      <div
        ref={(node) => {
          cardRef.current = node;
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        id={item.id}
        data-in-view={isInView}
        data-animation-index={index}
        className={cx(
          styles['product-card'],
          styles[`product-card--${item.id}`],
          className,
        )}
      >
        <div className={cx(styles['card-image'])}>
          <img src={item.image} alt={item.title} />
          {/* <div className={cx(styles['image-overlay'])} /> */}
        </div>

        <div className={cx(styles['card-content-wrapper'])}>
          <div className={cx(styles['card-header'])}>
            <h3 className={cx(styles['card-title'])}>{item.title}</h3>
          </div>

          <div className={cx(styles['card-content'])}>
            <p className={cx(styles['card-description'])}>{item.content}</p>

            <div className={cx(styles['card-features'])}>
              <h4>主要特点：</h4>
              <ul>
                {item.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

ProductCard.displayName = 'ProductCard';
