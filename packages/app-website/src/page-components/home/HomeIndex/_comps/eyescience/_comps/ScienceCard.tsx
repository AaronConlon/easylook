import { forwardRef, useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { RoughNotation } from 'react-rough-notation';

import { cx } from '----pkg-uni/uni-utils/cx-util';

export interface EyeScienceItem {
  id: string;
  title: string;
  amount: number;
  startAmount: number;
  subTitle?: string;
  highlight: string;
  description: string;
  image: string;
}

interface ScienceCardProps {
  item: EyeScienceItem;
  index: number;
  className?: string;
  styles: Record<string, string>;
  startAmount: number;
}

export const ScienceCard = forwardRef<HTMLDivElement, ScienceCardProps>(
  ({ item, index, className, styles, startAmount }, ref) => {
    const [isInView, setIsInView] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [showNotation, setShowNotation] = useState(false);
    const [startCountUp, setStartCountUp] = useState(false);
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
                300 + index * 200,
              );

              // 延迟启动 CountUp 动画
              setTimeout(
                () => {
                  setStartCountUp(true);
                },
                600 + index * 200,
              );

              // 动画完成后断开观察器
              if (observerRef.current) {
                observerRef.current.unobserve(entry.target);
              }
            }
          });
        },
        {
          threshold: 0.2, // 当卡片 20% 可见时触发
          rootMargin: '50px', // 提前 50px 触发
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
          styles['science-card'],
          styles[`science-card--${item.id}`],
          className,
        )}
      >
        <div className={cx(styles['card-image'])}>
          <img src={item.image} alt={item.title} />
          <div className={cx(styles['image-overlay'])} />
        </div>

        <div className={cx(styles['card-content'])}>
          <div className={cx(styles['card-header'])}>
            <h3 className={cx(styles['card-title'])}>
              <RoughNotation
                type="highlight"
                show={showNotation}
                color="#0052d923"
                animationDuration={800}
              >
                {item.title}
              </RoughNotation>
            </h3>
            <br />
            <div className={cx(styles['card-amount'])}>
              {item.amount === 0 ? null : (
                <CountUp
                  start={startAmount}
                  end={startCountUp ? item.amount : 0}
                  duration={2} // 动画时长 2 秒
                  separator="," // 千分位分隔符
                  decimal="." // 小数点符号，可选
                  decimals={0} // 小数位数
                />
              )}
              {item.subTitle && (
                <span
                  className={cx(styles['card-subTitle'])}
                  style={{
                    fontSize: '1.2rem',
                    marginLeft: '4px',
                  }}
                >
                  {item.subTitle}
                </span>
              )}
            </div>
          </div>

          <div className={cx(styles['card-highlight'])}>{item.highlight}</div>

          <p className={cx(styles['card-description'])}>{item.description}</p>
        </div>
      </div>
    );
  },
);

ScienceCard.displayName = 'ScienceCard';
