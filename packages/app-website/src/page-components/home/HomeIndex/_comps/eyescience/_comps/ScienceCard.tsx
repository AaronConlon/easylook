import { forwardRef } from 'react';
import CountUp from 'react-countup';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { TrendLineChart } from './TrendLineChart';

export interface EyeScienceItem {
  id: string;
  title: string;
  enTitle: string;
  description: string;
  colorTheme: string;
  amount?: number;
  unit?: string;
  style?: 'trend-line' | 'image' | 'default';
  trendData?: number[];
  image?: string;
}

interface ScienceCardProps {
  item: EyeScienceItem;
  index: number;
  className?: string;
  styles: Record<string, string>;
}

export const ScienceCard = forwardRef<HTMLDivElement, ScienceCardProps>(
  ({ item, index, className, styles }, ref) => {
    const isTrendLine = item.style === 'trend-line';
    const isImage = item.style === 'image';
    const showCounter = !isTrendLine && !isImage && item.amount !== undefined;

    return (
      <div
        ref={ref}
        id={item.id}
        className={cx(
          styles['science-card'],
          styles[`science-card-${index + 1}`],
          isTrendLine && styles['science-card--trend-line'],
          isImage && styles['science-card--image'],
          className,
          'scroll-animate',
        )}
        data-number={isTrendLine || isImage ? '' : `0${index + 1}`}
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

        {/* 右上角图片 */}
        {isImage && item.image && (
          <div className={cx(styles['card-image'])}>
            <img src={item.image} alt={item.title} />
          </div>
        )}

        {/* 趋势线图表 */}
        {isTrendLine && (
          <div className={cx(styles['card-chart'])}>
            <TrendLineChart
              data={item.trendData}
              className={cx(styles['trend-chart'])}
              color="rgba(255, 255, 255, 0.95)"
            />
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
