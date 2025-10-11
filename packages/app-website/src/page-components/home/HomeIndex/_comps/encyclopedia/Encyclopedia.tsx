import { forwardRef, useRef } from 'react';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay, Mousewheel, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { useNavigate } from '----pkg-uni/uni-hooks/useNavigate';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { ContainerTitle } from '@/components/ContainerTitle';

import { encyclopediaData } from '@/consts/encyclopedia.data';

import styles from './styles.module.scss';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

interface IEncyclopediaProps extends IUiCompBaseProps {}

export const Encyclopedia = forwardRef<HTMLDivElement, IEncyclopediaProps>(
  (props, ref) => {
    const { className } = props;
    const navigate = useNavigate();
    const swiperRef = useRef<SwiperType | null>(null);

    return (
      <div
        ref={ref}
        id="encyclopedia"
        className={cx(
          styles['comp-wrapper'],
          className,
          'g-uni-comp--Encyclopedia',
        )}
      >
        <ContainerTitle
          title="眼界百科"
          subtitle="专业眼科知识，科学护眼指南"
          styles={{
            p: {
              marginBottom: '36px',
            },
          }}
        />

        {/* 横向滚动的内容区域，采用 Swiper 组件来实现 */}
        <div className={cx(styles['swiper-container'])}>
          <Swiper
            modules={[Autoplay, Mousewheel, Navigation]}
            spaceBetween={24}
            slidesPerView="auto"
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            mousewheel={{
              enabled: true,
              forceToAxis: true,
              sensitivity: 1,
              releaseOnEdges: false,
              thresholdDelta: 10,
              thresholdTime: 300,
            }}
            navigation={{
              prevEl: `.${styles['encyclopedia-prev']}`,
              nextEl: `.${styles['encyclopedia-next']}`,
            }}
            loop={true}
            speed={600}
            className={cx(styles['encyclopedia-swiper'])}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {encyclopediaData.map((item) => (
              <SwiperSlide key={item.id} className={cx(styles['swiper-slide'])}>
                <div
                  className={cx(styles['encyclopedia-card'])}
                  onMouseEnter={() => {
                    swiperRef.current?.autoplay?.stop();
                  }}
                  onMouseLeave={() => {
                    swiperRef.current?.autoplay?.start();
                  }}
                >
                  <div className={cx(styles['card-image'])}>
                    <img src={item.cover} alt={item.title} />
                    <div className={cx(styles['card-overlay'])} />
                  </div>

                  <div className={cx(styles['card-content'])}>
                    <div className={cx(styles['card-header'])}>
                      {item.category && (
                        <span className={cx(styles['category-badge'])}>
                          {item.category}
                        </span>
                      )}
                    </div>

                    <h3 className={cx(styles['card-title'])}>{item.title}</h3>

                    <p className={cx(styles['card-description'])}>
                      {item.description}
                    </p>

                    <div className={cx(styles['card-footer'])}>
                      <span className={cx(styles['card-date'])}>
                        {item.date}
                      </span>
                      {item.source && (
                        <span className={cx(styles['card-source'])}>
                          {item.source}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* 导航控制器和查看更多按钮 */}
          <div className={cx(styles['controls-wrapper'])}>
            {/* 左侧导航按钮 */}
            <div className={cx(styles['nav-buttons'])}>
              <div className={styles['encyclopedia-prev']}>
                <MdOutlineKeyboardArrowLeft />
              </div>
              <div className={styles['encyclopedia-next']}>
                <MdOutlineKeyboardArrowRight />
              </div>
            </div>

            {/* 右侧查看更多按钮 */}
            <button
              className={cx(styles['more-button'])}
              onClick={() => navigate({ to: '/encyclopedia' })}
            >
              查看更多百科文章
            </button>
          </div>
        </div>
      </div>
    );
  },
);

Encyclopedia.displayName = 'Encyclopedia';
