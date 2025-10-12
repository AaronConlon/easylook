import { forwardRef } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { CommonPageHeader } from '@/components/CommonPageHeader';
import { ContainerTitle } from '@/components/ContainerTitle';

import 'swiper/swiper-bundle.css';

import styles from './styles.module.scss';

interface IUViewProps extends IUiCompBaseProps {}

interface HonorItem {
  id: string;
  title: string;
  year: string;
  image: string;
}

export const HonorIndex = forwardRef<HTMLDivElement, IUViewProps>(
  (props, ref) => {
    const { className } = props;

    // 荣誉数据
    const honorsData: HonorItem[] = [
      {
        id: 'honor-1',
        title: 'ISO9001 质量管理体系认证',
        year: '2022',
        image:
          'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800',
      },
      {
        id: 'honor-2',
        title: '医疗器械注册证',
        year: '2021',
        image:
          'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800',
      },
      {
        id: 'honor-3',
        title: '国家高新技术企业',
        year: '2023',
        image:
          'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
      },
      {
        id: 'honor-4',
        title: '眼健康行业创新奖',
        year: '2024',
        image:
          'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800',
      },
      {
        id: 'honor-5',
        title: '优秀合作伙伴奖',
        year: '2023',
        image:
          'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=800',
      },
      {
        id: 'honor-6',
        title: '产品质量金奖',
        year: '2023',
        image:
          'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800',
      },
      {
        id: 'honor-7',
        title: '科技进步奖',
        year: '2022',
        image:
          'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800',
      },
      {
        id: 'honor-8',
        title: '用户满意度金奖',
        year: '2024',
        image:
          'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800',
      },
    ];

    return (
      <div
        ref={ref}
        className={cx(
          styles['comp-wrapper'],
          className,
          'g-uni-comp--HonorIndex',
        )}
      >
        <CommonPageHeader
          title="公司荣誉"
          subTitle="Company Honors"
          bgImage="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2074"
        />

        <section className={cx(styles['honor-section'])}>
          <div className={cx(styles['container'])}>
            {/* 标题 */}
            <div className={cx(styles['header'], 'scroll-animate')}>
              <ContainerTitle
                title="荣誉资质"
                subtitle="专业认证 · 行业认可 · 持续创新"
              />
            </div>

            {/* Swiper 滚动展示 */}
            <div className={cx(styles['swiper-section'], 'scroll-animate')}>
              <Swiper
                modules={[Autoplay]}
                spaceBetween={24}
                slidesPerView="auto"
                loop={true}
                speed={12000}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                freeMode={true}
                allowTouchMove={true}
                className={cx(styles['honors-swiper'])}
              >
                {[...honorsData, ...honorsData].map((honor, index) => (
                  <SwiperSlide
                    key={`${honor.id}-${index}`}
                    className={cx(styles['honor-slide'])}
                  >
                    <div className={cx(styles['honor-card'])}>
                      <div className={cx(styles['card-image-wrapper'])}>
                        <img
                          src={honor.image}
                          alt={honor.title}
                          className={cx(styles['card-image'])}
                        />
                        <div className={cx(styles['card-overlay'])} />
                      </div>
                      <div className={cx(styles['card-content'])}>
                        <div className={cx(styles['card-year'])}>
                          {honor.year}
                        </div>
                        <h3 className={cx(styles['card-title'])}>
                          {honor.title}
                        </h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* 照片墙 */}
            <div className={cx(styles['gallery-section'], 'scroll-animate')}>
              <div className={cx(styles['gallery-grid'])}>
                {honorsData.map((honor, index) => (
                  <div
                    key={honor.id}
                    className={cx(styles['gallery-item'], 'scroll-animate')}
                    data-delay={index * 50}
                  >
                    <div className={cx(styles['gallery-card'])}>
                      <div className={cx(styles['gallery-image-wrapper'])}>
                        <img
                          src={honor.image}
                          alt={honor.title}
                          className={cx(styles['gallery-image'])}
                        />
                        <div className={cx(styles['gallery-overlay'])} />
                      </div>
                      <div className={cx(styles['gallery-content'])}>
                        <div className={cx(styles['gallery-year'])}>
                          {honor.year}
                        </div>
                        <h3 className={cx(styles['gallery-title'])}>
                          {honor.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  },
);
