import { forwardRef, useState } from 'react';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import { Autoplay, Navigation, Pagination, Thumbs } from 'swiper/modules';
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
}

export const Carousel = forwardRef<HTMLDivElement, ICarouselProps>(
  (props, ref) => {
    const { className, autoPlayInterval = 10000 } = props;

    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

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
      {
        title: '视觉训练套盒',
        type: 'image',
        sourceUrl:
          'https://sly-2025-10-10.i5lin.top/professional-eye-care-technology-blue-tones-medica.jpg',
        subTitle:
          '视立优训练盒是视立优品牌旗下的一款产品，主要用于视力训练和视力恢复。',
      },
      {
        title: '视觉训练套盒',
        type: 'image',
        sourceUrl:
          'https://sly-2025-10-10.i5lin.top/eye-refraction-disorder-vision-problem.jpg',
        subTitle:
          '视立优训练盒是视立优品牌旗下的一款产品，主要用于视力训练和视力恢复。',
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
          modules={[Autoplay, Pagination, Navigation, Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: autoPlayInterval,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: `.${styles['carousel-prev']}`,
            nextEl: `.${styles['carousel-next']}`,
          }}
          loop
          className={cx(styles['full-banner-wrapper'])}
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
              <div className={cx(styles['banner-info'])}>
                <div className={styles['banner-title']}>{item.title}</div>
                {item.subTitle ? (
                  <p className={styles['banner-subtitle']}>{item.subTitle}</p>
                ) : null}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 镜像 swiper */}
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[Thumbs]}
          spaceBetween={6}
          slidesPerView={items.length}
          watchSlidesProgress
          className={styles['thumbs']}
          loop
        >
          {items.map((_, idx) => (
            <SwiperSlide
              className={styles['thumb']}
              key={`${idx}-${_.title}`}
            ></SwiperSlide>
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
