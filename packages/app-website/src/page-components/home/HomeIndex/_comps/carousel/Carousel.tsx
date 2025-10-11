import { forwardRef } from 'react';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import styles from './styles.module.scss';

import 'swiper/swiper-bundle.css';

// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';

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
        sourceUrl:
          'https://sly-2025-10-10.i5lin.top/professional-eye-care-technology-blue-tones-medica.jpg',
        subTitle:
          '视立优训练盒是视立优品牌旗下的一款产品，主要用于视力训练和视力恢复。',
      },
      {
        title: '专业视力保护方案',
        type: 'image',
        sourceUrl:
          'https://sly-2025-10-10.i5lin.top/modern-eye-health-equipment-medical-device.jpg',
        subTitle:
          '从儿童到成年，从近视到弱视，从散光到远视，从眼底病变到眼压过高，视立优专业视力保护方案，为您和您的家人提供全方位的视力保护。',
      },
      // {
      //   title: 'EasyLook · 视立优',
      //   type: 'video',
      //   sourceUrl: firstVideoUrl,
      // },
    ];

    return (
      <div
        ref={ref}
        className={cx(
          styles['comp-wrapper'],
          className,
          'g-uni-comp--Carousel',
        )}
      >
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: autoPlayInterval,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          //   el: `.${styles['custom-pagination']}`,
          //   bulletClass: 'custom-bullet',
          //   bulletActiveClass: 'custom-bullet-active',
          // }}
          navigation={{
            prevEl: `.${styles['carousel-prev']}`,
            nextEl: `.${styles['carousel-next']}`,
          }}
          loop
          className={cx(styles['full-banner-wrapper'])}
          onSlideChange={() => {
            onUserInteract?.();
          }}
          onTouchStart={() => {
            onUserInteract?.();
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index} className={cx(styles['carousel-item'])}>
              {item.type === 'image' ? (
                <div className={styles['carousel-image-wrapper']}>
                  <div className={styles['carousel-mask']} />
                  <img
                    src={item.sourceUrl}
                    alt={item.title}
                    className={cx(styles['full-banner-image'])}
                  />
                </div>
              ) : (
                <video
                  src={item.sourceUrl}
                  className={cx(styles['full-banner-video'])}
                  poster="first_frame.jpg"
                  muted
                  loop
                  playsInline
                  autoPlay
                />
              )}
              <div className={cx(styles['banner-title'])}>
                <h1>{item.title}</h1>
                {item.subTitle && <p>{item.subTitle}</p>}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles['carousel-prev']}>
          <MdOutlineKeyboardArrowLeft />
        </div>
        <div className={styles['carousel-next']}>
          <MdOutlineKeyboardArrowRight />
        </div>
      </div>
    );
  },
);
