import { forwardRef, useRef } from 'react';
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
    const cardRef = useRef<HTMLDivElement>(null);

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
                  end={startAmount ? item.amount : 0}
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
