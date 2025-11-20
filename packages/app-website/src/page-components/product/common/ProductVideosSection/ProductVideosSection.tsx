import type { APITypes } from 'plyr-react';
import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';
import { useEffect, useMemo, useRef, useState } from 'react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import styles from './styles.module.scss';

export interface VideoTask {
  stepId?: string;
  id?: string;
  title: string;
  brief?: string;
  src?: string;
  poster?: string;
  thumbnail?: string;
  duration?: string;
}

export interface Video extends VideoTask {
  id: string;
}

export interface VideoCategory {
  id: string;
  title: string;
  description?: string | null;
  poster?: string;
  taskVoList: VideoTask[];
}

interface ProductVideosSectionProps {
  title?: string;
  subtitle?: string;
  videos?: Video[];
  categories?: VideoCategory[];
}

export const ProductVideosSection = (props: ProductVideosSectionProps) => {
  const {
    title = '训练视频展示',
    subtitle,
    videos = [],
    categories = [],
  } = props;
  const hasCategories = categories.length > 0;
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const plyrRef = useRef<APITypes>(null);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);
  const dragStateRef = useRef({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
  });

  const activeCategory = hasCategories
    ? (categories[activeCategoryIndex] ?? categories[0])
    : undefined;

  const activeVideoList = hasCategories
    ? (activeCategory?.taskVoList ?? [])
    : videos;

  const activeVideo = activeVideoList[activeVideoIndex];

  useEffect(() => {
    if (hasCategories) {
      setActiveVideoIndex(0);
    }
  }, [hasCategories, activeCategoryIndex]);

  useEffect(() => {
    setIsPlaying(false);
  }, [activeVideo]);

  const handlePlayerPlay = () => setIsPlaying(true);
  const handlePlayerPause = () => setIsPlaying(false);
  const handlePlayerEnded = () => setIsPlaying(false);

  const handlePrevVideo = () => {
    if (!activeVideoList.length) return;
    setActiveVideoIndex((prev) =>
      prev === 0 ? activeVideoList.length - 1 : prev - 1,
    );
  };

  const handleNextVideo = () => {
    if (!activeVideoList.length) return;
    setActiveVideoIndex((prev) =>
      prev === activeVideoList.length - 1 ? 0 : prev + 1,
    );
  };

  const hasVideoSource = Boolean(activeVideo?.src);

  const plyrSource = useMemo(() => {
    if (!activeVideo?.src) return undefined;
    return {
      type: 'video' as const,
      title: activeVideo.title,
      poster: activeVideo.thumbnail || activeVideo.poster,
      sources: [
        {
          src: activeVideo.src,
          type: activeVideo.src.endsWith('.m3u8')
            ? 'application/vnd.apple.mpegurl'
            : 'video/mp4',
        },
      ],
    };
  }, [activeVideo]);

  useEffect(() => {
    if (!plyrSource || !plyrRef.current?.plyr) return;
    plyrRef.current.plyr.source = plyrSource;
  }, [plyrSource]);

  const plyrOptions = useMemo(
    () => ({
      controls: [
        'play-large',
        'play',
        'progress',
        'current-time',
        'mute',
        'volume',
        'captions',
        'settings',
        'pip',
        'airplay',
        'fullscreen',
      ],
    }),
    [],
  );

  const handleThumbnailMouseDown = (
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    if (!thumbnailContainerRef.current) return;
    dragStateRef.current.isDragging = true;
    dragStateRef.current.startX =
      event.pageX - thumbnailContainerRef.current.offsetLeft;
    dragStateRef.current.scrollLeft = thumbnailContainerRef.current.scrollLeft;
  };

  const handleThumbnailMouseLeave = () => {
    dragStateRef.current.isDragging = false;
  };

  const handleThumbnailMouseUp = () => {
    dragStateRef.current.isDragging = false;
  };

  const handleThumbnailMouseMove = (
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    if (!dragStateRef.current.isDragging || !thumbnailContainerRef.current) {
      return;
    }
    event.preventDefault();
    const x = event.pageX - thumbnailContainerRef.current.offsetLeft;
    const walk = (x - dragStateRef.current.startX) * 1.2;
    thumbnailContainerRef.current.scrollLeft =
      dragStateRef.current.scrollLeft - walk;
  };

  if (!activeVideo) return null;

  return (
    <section className={cx(styles['videos-section'])}>
      <div className={cx(styles['container'])}>
        <div className={cx(styles['section-header'])}>
          <div>
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
          </div>
          {hasCategories && (
            <div className={cx(styles['video-tabs'], 'scroll-animate')}>
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  className={cx(
                    styles['tab-btn'],
                    index === activeCategoryIndex && styles['tab-active'],
                  )}
                  onClick={() => setActiveCategoryIndex(index)}
                >
                  <span className={cx(styles['tab-title'])}>
                    {category.title}
                  </span>
                  <span className={cx(styles['tab-count'])}>
                    {category.taskVoList.length} 个训练
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {hasCategories && activeCategory?.description && (
          <p className={cx(styles['category-description'])}>
            {activeCategory.description}
          </p>
        )}

        <div
          className={cx(styles['player-layout'], 'scroll-animate')}
          data-delay="100"
        >
          <div className={cx(styles['main-video'])}>
            <div className={cx(styles['video-container'])}>
              {hasVideoSource && plyrSource ? (
                <Plyr
                  ref={plyrRef}
                  source={plyrSource}
                  options={plyrOptions}
                  onPlay={handlePlayerPlay}
                  onPause={handlePlayerPause}
                  onEnded={handlePlayerEnded}
                />
              ) : (
                <img
                  src={activeVideo.thumbnail || activeVideo.poster}
                  alt={activeVideo.title}
                  className={cx(styles['video-element'])}
                />
              )}
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

            <div className={cx(styles['video-info'])}>
              <h3 className={cx(styles['video-title'])}>{activeVideo.title}</h3>
              <p className={cx(styles['video-subtitle'])}>
                {activeVideo.brief ||
                  '了解如何正确使用视觉训练设备，掌握基础训练方法'}
              </p>
            </div>
          </div>

          {activeVideoList.length > 1 && (
            <div className={cx(styles['playlist-panel'])}>
              <p className={cx(styles['playlist-title'])}>更多训练</p>
              <div
                className={cx(styles['video-thumbnails'])}
                ref={thumbnailContainerRef}
                onMouseDown={handleThumbnailMouseDown}
                onMouseLeave={handleThumbnailMouseLeave}
                onMouseUp={handleThumbnailMouseUp}
                onMouseMove={handleThumbnailMouseMove}
              >
                {activeVideoList.map((video, index) => (
                  <button
                    key={video.id || video.stepId || index}
                    className={cx(
                      styles['thumbnail-btn'],
                      index === activeVideoIndex && styles['active'],
                    )}
                    onClick={() => setActiveVideoIndex(index)}
                  >
                    <div
                      className={cx(styles['thumbnail-card'])}
                      style={{
                        backgroundImage: `url(${video.thumbnail || video.poster})`,
                      }}
                    >
                      <p className={cx(styles['thumbnail-title'])}>
                        {video.title}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
