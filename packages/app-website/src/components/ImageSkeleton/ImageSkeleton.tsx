import { forwardRef } from 'react';
import { cx } from '----pkg-uni/uni-utils/cx-util';
import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';
import styles from './styles.module.scss';

interface IImageSkeletonProps extends IUiCompBaseProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  animated?: boolean;
}

export const ImageSkeleton = forwardRef<HTMLDivElement, IImageSkeletonProps>(
  (props, ref) => {
    const {
      className,
      width = '100%',
      height = '200px',
      borderRadius = '8px',
      animated = true,
      style,
      ...rest
    } = props;

    return (
      <div
        ref={ref}
        className={cx(
          styles['image-skeleton'],
          {
            [styles['image-skeleton--animated']]: animated,
          },
          className,
        )}
        style={{
          width,
          height,
          borderRadius,
          ...style,
        }}
        {...rest}
      >
        <div className={cx(styles['skeleton-shimmer'])} />
        <div className={cx(styles['skeleton-icon'])}>
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    );
  },
);

ImageSkeleton.displayName = 'ImageSkeleton';
