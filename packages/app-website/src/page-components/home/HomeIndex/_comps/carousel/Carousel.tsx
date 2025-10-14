import { forwardRef, useState } from 'react';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import { Autoplay, Navigation, Pagination, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { usePageStore } from '----pkg-uni/uni-stores/usePageStore';

import styles from './styles.module.scss';

import 'swiper/swiper-bundle.css';

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

    const homeData = usePageStore((s) => s.page$_pageItem.home);

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
          {homeData.carousel.map((item, index) => (
            <SwiperSlide key={index} className={cx(styles['carousel-item'])}>
              <div className={styles['carousel-image-wrapper']}>
                <div className={styles['carousel-mask']} />
                <img
                  src={item.sourceUrl}
                  alt={item.title}
                  className={cx(styles['full-banner-image'])}
                />
              </div>
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
          slidesPerView={homeData.carousel.length}
          watchSlidesProgress
          className={styles['thumbs']}
          // loop
        >
          {homeData.carousel.map((_, idx) => (
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
