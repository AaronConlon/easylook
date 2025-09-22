import { forwardRef, useState } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { ImageSkeleton } from '@/components/ImageSkeleton';

import styles from './styles.module.scss';

interface IUniversalImageProps extends IUiCompBaseProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down' | 'none';
  loading?: 'lazy' | 'eager';
  skeletonHeight?: string | number;
  showError?: boolean;
  errorText?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export const UniversalImage = forwardRef<
  HTMLImageElement,
  IUniversalImageProps
>((props, ref) => {
  const {
    className,
    src,
    alt,
    width,
    height,
    objectFit = 'cover',
    loading = 'lazy',
    skeletonHeight = 200,
    showError = true,
    errorText = '加载失败',
    onLoad,
    onError,
    style,
    ...rest
  } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  return (
    <div
      className={cx(styles['image-container'], className)}
      style={{
        width,
        height,
        ...style,
      }}
    >
      {isLoading && (
        <div className={cx(styles['loading-overlay'])}>
          <ImageSkeleton width="100%" height={skeletonHeight} animated={true} />
        </div>
      )}

      {hasError && showError ? (
        <div className={cx(styles['error-overlay'])}>
          <div className={cx(styles['error-text'])}>{errorText}</div>
        </div>
      ) : (
        <img
          ref={ref}
          src={src}
          alt={alt}
          loading={loading}
          className={cx(styles['image'], {
            [styles['image--hidden']]: isLoading,
          })}
          style={{
            objectFit,
          }}
          onLoad={handleLoad}
          onError={handleError}
          {...rest}
        />
      )}
    </div>
  );
});

UniversalImage.displayName = 'UniversalImage';
