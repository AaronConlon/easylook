import React, { forwardRef, useRef } from 'react';
import CountUp from 'react-countup';
import { InView } from 'react-intersection-observer';

import { cx } from '__shared__/utils/cx-util';

import styles from '../styles.module.scss';

export interface EyeScienceItem {
  id: string;
  title: string;
  enTitle: string;
  description: string;
  colorTheme: string;
  amount?: number;
  duration?: number;
  unit?: string;
  style?: 'icon' | 'default';
  icon?: React.ComponentType<{ className?: string }>;
}

interface ScienceCardProps {
  item: EyeScienceItem;
  index: number;
  duration?: number;
  threshold?: number;
  className?: string;
  // styles: Record<string, string>;
}

export const ScienceCard = forwardRef<HTMLDivElement, ScienceCardProps>(
  ({ item, index, className, ...restProps }, ref) => {
    const isIcon = item.style === 'icon';
    const showCounter = !isIcon && item.amount !== undefined;
    const IconComponent = item.icon;
    const onStartRef = useRef<any>(null);

    const calcStartAmount = () => {
      const amount = item.amount || 0;

      // 过亿
      if (amount > 1000 * 10000) {
        return amount - 1000 * 10000;
      } else if (amount > 10000) {
        return amount - 10000;
      } else {
        return 0;
      }
    };

    return (
      <div
        ref={ref}
        id={item.id}
        className={cx(
          styles['science-card'],
          // styles[`science-card-${index + 1}`],
          isIcon && styles['science-card--icon'],
          className,
          'scroll-animate',
        )}
        data-number={isIcon ? '' : `0${index + 1}`}
      >
        {/* 右上角数字 Counter */}
        {showCounter && item.amount !== undefined && (
          <InView
            threshold={restProps.threshold || 1}
            triggerOnce
            onChange={(v) => {
              if (v) {
                onStartRef?.current();
              }
            }}
          >
            {({ ref: inViewRef, inView }) => (
              <div className={cx(styles['card-counter'])} ref={inViewRef}>
                <CountUp
                  // startOnMount={false}
                  // start={calcStartAmount()}
                  end={item.amount || 0}
                  duration={restProps?.duration || 2.5}
                  separator=","
                  decimals={(item?.amount || 0) < 100 ? 1 : 0}
                  decimal="."
                >
                  {({ countUpRef, start: onStart }) => {
                    onStartRef.current = onStart;

                    return (
                      <div>
                        <span ref={countUpRef} />
                      </div>
                    );
                  }}
                </CountUp>

                {item.unit && (
                  <span className={cx(styles['card-unit'])}>{item.unit}</span>
                )}
              </div>
            )}
          </InView>
        )}

        {/* 右上角图标 */}
        {isIcon && IconComponent && (
          <div className={cx(styles['card-icon'])}>
            <IconComponent className={cx(styles['icon'])} />
          </div>
        )}

        <h3 className={cx(styles['card-title'])}>{item.title}</h3>
        <p className={cx(styles['card-subtitle'])}>{item.enTitle}</p>
        <p className={cx(styles['card-description'])}>{item.description}</p>
      </div>
    );
  },
);

ScienceCard.displayName = 'ScienceCard';
