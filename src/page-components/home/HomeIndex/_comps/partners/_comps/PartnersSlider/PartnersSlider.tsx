import { forwardRef } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { ICompBaseProps } from '__shared__/typings/comp-type';

import { cx } from '__shared__/utils/cx-util';


import { ContainerTitle } from '@/components/ContainerTitle';

import 'swiper/swiper-bundle.css';

import styles from './styles.module.scss';

interface IUViewProps extends ICompBaseProps {}

interface PartnerItem {
  id: string;
  logo: string;
  website: string;
}

export const PartnersSlider = forwardRef<HTMLDivElement, IUViewProps>(
  (props, ref) => {
    const { className } = props;

    // 合作伙伴数据
    const partnersData: PartnerItem[] = [
      {
        id: 'partner-1',
        logo: 'https://www.airdoc.com/sites/default/files/2021-05/1_0.png',
        website: '/',
      },
      {
        id: 'partner-2',
        logo: 'https://www.airdoc.com/sites/default/files/2021-05/2_0.png',
        website: '/',
      },
      {
        id: 'partner-3',
        logo: 'https://www.airdoc.com/sites/default/files/2021-05/3_0.png',
        website: '/',
      },
      {
        id: 'partner-4',
        logo: 'https://www.airdoc.com/sites/default/files/2021-05/4_0.png',
        website: '/',
      },
      {
        id: 'partner-5',
        logo: 'https://www.airdoc.com/sites/default/files/2021-05/5_0.png',
        website: '/',
      },
      {
        id: 'partner-6',
        logo: 'https://www.airdoc.com/sites/default/files/2021-05/6.png',
        website: '/',
      },
      {
        id: 'partner-7',
        logo: 'https://www.airdoc.com/sites/default/files/2021-05/7.png',
        website: '/',
      },
      {
        id: 'partner-8',
        logo: 'https://www.airdoc.com/sites/default/files/2021-05/8.png',
        website: '/',
      },
      {
        id: 'partner-10',
        logo: 'https://www.airdoc.com/sites/default/files/2021-05/10.png',
        website: '/',
      },
      {
        id: 'partner-11',
        logo: 'https://www.airdoc.com/sites/default/files/2021-05/11.png',
        website: '/',
      },
      {
        id: 'partner-12',
        logo: 'https://www.airdoc.com/sites/default/files/2021-05/12.png',
        website: '/',
      },
      {
        id: 'partner-13',
        logo: 'https://www.airdoc.com/sites/default/files/2021-05/13.png',
        website: '/',
      },
      {
        id: 'partner-14',
        logo: 'https://www.airdoc.com/sites/default/files/2021-05/14.png',
        website: '/',
      },
      {
        id: 'partner-16',
        logo: 'https://www.airdoc.com/sites/default/files/2021-05/16.png',
        website: '/',
      },
      {
        id: 'partner-17',
        logo: 'https://www.airdoc.com/sites/default/files/2021-05/17.png',
        website: '/',
      },
      {
        id: 'partner-18',
        logo: 'https://www.airdoc.com/sites/default/files/2021-05/18.png',
        website: '/',
      },
      {
        id: 'partner-19',
        logo: 'https://www.airdoc.com/sites/default/files/2021-05/19.png',
        website: '/',
      },
      {
        id: 'partner-20',
        logo: 'https://www.airdoc.com/sites/default/files/2021-05/20.png',
        website: '/',
      },
      {
        id: 'partner-21',
        logo: 'https://www.airdoc.com/sites/default/files/2021-05/21.png',
        website: '/',
      },
      {
        id: 'partner-24',
        logo: 'https://www.airdoc.com/sites/default/files/2021-05/24.png',
        website: '/',
      },
    ];

    const handlePartnerClick = (website: string) => {
      if (website && website !== '/') {
        window.open(website, '_blank');
      }
    };

    return (
      <section
        ref={ref}
        className={cx(
          styles['comp-wrapper'],
          className,
          'g-uni-comp--PartnersSlider',
        )}
      >
        <div className={cx(styles['container'])}>
          {/* 标题 */}
          <div className={cx(styles['header'], 'scroll-animate')}>
            <ContainerTitle
              title="合作共赢"
              subtitle="与广大合作伙伴携手，共同推进视觉健康技术发展"
            />
          </div>

          {/* 第一行 Swiper 滑块 - 从左到右 */}
          <div className={cx(styles['slider-wrapper'], 'scroll-animate')}>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={32}
              slidesPerView="auto"
              loop={true}
              speed={8000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                reverseDirection: false,
              }}
              allowTouchMove={false}
              className={cx(styles['partners-swiper'])}
            >
              {partnersData.map((partner) => (
                <SwiperSlide
                  key={partner.id}
                  className={cx(styles['partner-slide'])}
                >
                  <div
                    className={cx(styles['partner-item'])}
                    onClick={() => handlePartnerClick(partner.website)}
                  >
                    <div className={cx(styles['partner-logo'])}>
                      <img
                        src={partner.logo}
                        alt={`Partner ${partner.id}`}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* 第二行 Swiper 滑块 - 从右到左 */}
          <div
            className={cx(styles['slider-wrapper'], 'scroll-animate')}
            data-delay="200"
          >
            <Swiper
              modules={[Autoplay]}
              spaceBetween={32}
              slidesPerView="auto"
              loop={true}
              speed={8000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                reverseDirection: true,
              }}
              allowTouchMove={false}
              className={cx(styles['partners-swiper'])}
            >
              {partnersData.map((partner) => (
                <SwiperSlide
                  key={`reverse-${partner.id}`}
                  className={cx(styles['partner-slide'])}
                >
                  <div
                    className={cx(styles['partner-item'])}
                    onClick={() => handlePartnerClick(partner.website)}
                  >
                    <div className={cx(styles['partner-logo'])}>
                      <img
                        src={partner.logo}
                        alt={`Partner ${partner.id}`}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    );
  },
);
