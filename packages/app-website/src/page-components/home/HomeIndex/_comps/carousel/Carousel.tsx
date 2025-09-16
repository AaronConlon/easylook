import { forwardRef, useState, useEffect, useRef } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import styles from './styles.module.scss';

export interface CarouselItem {
  title: string;
  type: 'image' | 'video';
  sourceUrl: string;
  subTitle?: string;
}

interface ICarouselProps extends IUiCompBaseProps {
  autoPlayInterval?: number;
  onUserInteract?: () => void;
}

export const Carousel = forwardRef<HTMLDivElement, ICarouselProps>(
  (props, ref) => {
    const { className, autoPlayInterval = 10000, onUserInteract } = props;

    const firstVideoUrl =
      'https://www.easylook.com.cn/wp-content/uploads/2025/01/b6a4094be7fc37fd298d687a6e2d6aab-1.mp4';
    const imgSourceUrl =
      'https://cdn.yun.sooce.cn/6/48873/gif/1750396791830bc80c675a20edf07c96ec3527d2c19a8.gif?version=0';

    const items: CarouselItem[] = [
      {
        title: '视觉训练套盒',
        type: 'image',
        sourceUrl: 'product-box2.jpg',
        subTitle:
          '视力优训练盒是视力优品牌旗下的一款产品，主要用于视力训练和视力恢复。',
      },
      {
        title: 'Visual Training Box',
        type: 'image',
        sourceUrl: 'product-box6.jpg',
        subTitle:
          'The visual training box uses the most advanced visual training technology, mainly for visual training and visual recovery.',
      },
      {
        title: 'EasyLook · 视力优',
        type: 'video',
        sourceUrl: firstVideoUrl,
      },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [hasUserInteracted, setHasUserInteracted] = useState(false);
    const [isVideoReady, setIsVideoReady] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // 轮播自动切换 - 只有在视频加载完成且未 hover 时才启动
    useEffect(() => {
      if (isVideoReady && !isHovered) {
        intervalRef.current = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % items.length);
        }, autoPlayInterval);
      } else {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      }

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }, [items.length, autoPlayInterval, isVideoReady, isHovered]);

    // 监听鼠标移动事件，用于视频自动播放
    useEffect(() => {
      const handleMouseMove = () => {
        if (!hasUserInteracted) {
          setHasUserInteracted(true);
          onUserInteract?.();
          // 播放当前视频
          const currentVideo = videoRefs.current[currentIndex];
          if (currentVideo && items[currentIndex].type === 'video') {
            currentVideo.play().catch(console.error);
          }
        }
      };

      document.addEventListener('mousemove', handleMouseMove);
      return () => document.removeEventListener('mousemove', handleMouseMove);
    }, [hasUserInteracted, currentIndex, items, onUserInteract]);

    // 当轮播切换到视频时，重置视频并尝试播放
    useEffect(() => {
      const currentVideo = videoRefs.current[currentIndex];
      if (items[currentIndex].type === 'video' && currentVideo) {
        currentVideo.currentTime = 0;
        if (hasUserInteracted) {
          currentVideo.play().catch(console.error);
        }
      }
    }, [currentIndex, items, hasUserInteracted]);

    // 处理视频加载完成
    const handleVideoLoaded = (index: number) => {
      if (index === 0) {
        // 第一个视频加载完成
        setIsVideoReady(true);
      }
    };

    // 手动切换轮播
    const goToPrevious = () => {
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    const goToNext = () => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    };

    const goToSlide = (index: number) => {
      setCurrentIndex(index);
    };

    return (
      <div
        ref={ref}
        className={cx(
          styles['comp-wrapper'],
          className,
          'g-uni-comp--Carousel',
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={cx(styles['full-banner-wrapper'])}>
          {/* 渲染所有项目 */}
          {items.map((item, index) => (
            <div
              key={index}
              className={cx(
                styles['carousel-item'],
                index === currentIndex && styles['carousel-item--active'],
              )}
            >
              {item.type === 'image' ? (
                <img
                  src={item.sourceUrl}
                  alt={item.title}
                  className={cx(styles['full-banner-image'])}
                />
              ) : (
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={item.sourceUrl}
                  className={cx(styles['full-banner-video'])}
                  poster="first_frame.jpg"
                  muted
                  loop
                  playsInline
                  onCanPlayThrough={() => handleVideoLoaded(index)}
                />
              )}
            </div>
          ))}

          {/* 控制按钮 */}
          <button
            className={cx(
              styles['carousel-control'],
              styles['carousel-control--prev'],
            )}
            onClick={goToPrevious}
            aria-label="上一张"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            className={cx(
              styles['carousel-control'],
              styles['carousel-control--next'],
            )}
            onClick={goToNext}
            aria-label="下一张"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* 轮播指示器 */}
          {/* <div className={cx(styles['carousel-indicators'])}>
            {items.map((_, index) => (
              <button
                key={index}
                className={cx(
                  styles['carousel-indicator'],
                  index === currentIndex &&
                    styles['carousel-indicator--active'],
                )}
                onClick={() => goToSlide(index)}
                aria-label={`切换到第${index + 1}张`}
              />
            ))}
          </div> */}

          <div className={cx(styles['banner-title'])}>
            <h1>{items[currentIndex].title}</h1>
            <p>{items[currentIndex].subTitle}</p>
          </div>
        </div>
      </div>
    );
  },
);
