import { forwardRef, useState } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import styles from './ProductVideos.module.scss';

interface IProductVideosProps extends IUiCompBaseProps {}

interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  category: string;
}

export const ProductVideos = forwardRef<HTMLDivElement, IProductVideosProps>(
  (props, ref) => {
    const { className } = props;
    const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

    const videoData: VideoItem[] = [
      {
        id: 'training-demo',
        title: '视觉训练套盒演示',
        description: '了解视觉训练套盒的使用方法和效果',
        thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
        duration: '3:45',
        category: '产品演示',
      },
      {
        id: 'integrated-trainer',
        title: '集合训练器介绍',
        description: '集合训练器的功能特点和使用场景',
        thumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop',
        duration: '4:20',
        category: '产品介绍',
      },
      {
        id: 'eye-health',
        title: '眼健康科普',
        description: '专业眼科知识，科学护眼指南',
        thumbnail: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&h=300&fit=crop',
        duration: '5:15',
        category: '科普教育',
      },
      {
        id: 'success-story',
        title: '用户成功案例',
        description: '真实用户使用体验和效果分享',
        thumbnail: 'https://images.unsplash.com/photo-1633114128729-0a8dc13406b9?w=400&h=300&fit=crop',
        duration: '6:30',
        category: '用户案例',
      },
    ];

    const handleVideoHover = (videoId: string) => {
      setHoveredVideo(videoId);
    };

    const handleVideoLeave = () => {
      setHoveredVideo(null);
    };

    return (
      <div
        ref={ref}
        className={cx(
          styles['videos-container'],
          className,
          'g-uni-comp--ProductVideos',
        )}
      >
        <div className={cx(styles['videos-grid'])}>
          {videoData.map((video, index) => (
            <div
              key={video.id}
              className={cx(
                styles['video-card'],
                hoveredVideo === video.id && styles['video-card--hovered'],
                hoveredVideo && hoveredVideo !== video.id && styles['video-card--dimmed'],
              )}
              onMouseEnter={() => handleVideoHover(video.id)}
              onMouseLeave={handleVideoLeave}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={cx(styles['video-thumbnail'])}>
                <img src={video.thumbnail} alt={video.title} />
                <div className={cx(styles['play-overlay'])}>
                  <div className={cx(styles['play-button'])}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 5V19L19 12L8 5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <div className={cx(styles['video-duration'])}>
                  {video.duration}
                </div>
                <div className={cx(styles['video-category'])}>
                  {video.category}
                </div>
              </div>
              
              <div className={cx(styles['video-content'])}>
                <h3 className={cx(styles['video-title'])}>{video.title}</h3>
                <p className={cx(styles['video-description'])}>
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
);

ProductVideos.displayName = 'ProductVideos';
