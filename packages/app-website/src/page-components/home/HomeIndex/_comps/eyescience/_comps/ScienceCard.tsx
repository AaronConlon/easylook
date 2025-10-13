import { forwardRef } from 'react';
import CountUp from 'react-countup';

import { cx } from '----pkg-uni/uni-utils/cx-util';

export interface EyeScienceItem {
  id: string;
  title: string;
  enTitle: string;
  description: string;
  colorTheme: string;
  amount?: number;
  unit?: string;
  style?: 'icon' | 'default';
  icon?: React.ComponentType<{ className?: string }>;
}

interface ScienceCardProps {
  item: EyeScienceItem;
  index: number;
  className?: string;
  styles: Record<string, string>;
}

export const ScienceCard = forwardRef<HTMLDivElement, ScienceCardProps>(
  ({ item, index, className, styles }, ref) => {
    const isIcon = item.style === 'icon';
    const showCounter = !isIcon && item.amount !== undefined;
    const IconComponent = item.icon;

    return (
      <div
        ref={ref}
        id={item.id}
        className={cx(
          styles['science-card'],
          styles[`science-card-${index + 1}`],
          isIcon && styles['science-card--icon'],
          className,
          'scroll-animate',
        )}
        data-number={isIcon ? '' : `0${index + 1}`}
      >
        {/* 右上角数字 Counter */}
        {showCounter && item.amount !== undefined && (
          <div className={cx(styles['card-counter'])}>
            <CountUp
              start={0}
              end={item.amount}
              duration={2.5}
              separator=","
              decimals={item.amount < 100 ? 1 : 0}
              decimal="."
            />
            {item.unit && (
              <span className={cx(styles['card-unit'])}>{item.unit}</span>
            )}
          </div>
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
