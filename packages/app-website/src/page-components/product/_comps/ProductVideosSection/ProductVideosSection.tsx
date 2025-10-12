import { useState } from 'react';
import { LuChevronLeft, LuChevronRight, LuPlay, LuVolumeX } from 'react-icons/lu';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import styles from './styles.module.scss';

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
}

interface ProductVideosSectionProps {
  title?: string;
  subtitle?: string;
  videos: Video[];
}

export const ProductVideosSection = (props: ProductVideosSectionProps) => {
  const { title = '训练视频展示', subtitle, videos } = props;
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const activeVideo = videos[activeVideoIndex];

  const handlePrevVideo = () => {
    setActiveVideoIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNextVideo = () => {
    setActiveVideoIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={cx(styles['videos-section'])}>
      <div className={cx(styles['container'])}>
        <h2 className={cx(styles['section-title'], 'scroll-animate')}>
          {title}
        </h2>
        {subtitle && (
          <p
            className={cx(styles['section-subtitle'], 'scroll-animate')}
            data-delay="100"
          >
            {subtitle}
          </p>
        )}

        <div
          className={cx(styles['video-player-wrapper'], 'scroll-animate')}
          data-delay="100"
        >
          {/* 主视频播放器 */}
          <div className={cx(styles['main-video'])}>
            <div className={cx(styles['video-container'])}>
              <img
                src={activeVideo.thumbnail}
                alt={activeVideo.title}
                className={cx(styles['video-thumbnail'])}
              />
              <div className={cx(styles['video-overlay'])}>
                <h3 className={cx(styles['video-title'])}>
                  {activeVideo.title}
                </h3>
                <p className={cx(styles['video-subtitle'])}>
                  了解如何正确使用视觉训练设备，掌握基础训练方法
                </p>
                <div className={cx(styles['video-controls'])}>
                  <button
                    className={cx(styles['control-btn'], styles['play-btn'])}
                    aria-label="Play"
                  >
                    <LuPlay />
                  </button>
                  <button
                    className={cx(styles['control-btn'])}
                    aria-label="Unmute"
                  >
                    <LuVolumeX />
                  </button>
                  <div className={cx(styles['progress-bar'])}>
                    <div className={cx(styles['progress-fill'])} />
                  </div>
                  <span className={cx(styles['video-time'])}>
                    1:24 / {activeVideo.duration}
                  </span>
                </div>
              </div>

              {/* 导航按钮 */}
              <button
                className={cx(styles['nav-btn'], styles['nav-prev'])}
                onClick={handlePrevVideo}
                aria-label="Previous video"
              >
                <LuChevronLeft />
              </button>
              <button
                className={cx(styles['nav-btn'], styles['nav-next'])}
                onClick={handleNextVideo}
                aria-label="Next video"
              >
                <LuChevronRight />
              </button>
            </div>
          </div>

          {/* 视频缩略图列表 */}
          <div className={cx(styles['video-thumbnails'])}>
            {videos.map((video, index) => (
              <button
                key={video.id}
                className={cx(
                  styles['thumbnail-btn'],
                  index === activeVideoIndex && styles['active'],
                )}
                onClick={() => setActiveVideoIndex(index)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className={cx(styles['thumbnail-image'])}
                />
                <div className={cx(styles['thumbnail-overlay'])}>
                  <p className={cx(styles['thumbnail-title'])}>{video.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

