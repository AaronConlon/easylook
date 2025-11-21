import { useEffect, useRef, useState } from 'react';
import { LuShoppingCart } from 'react-icons/lu';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { cx } from '__shared__/utils/cx-util';

import { usePageStore } from '@/stores/usePageStore';

import { product1HeroCarouselImages } from './heroCarouselImages';

import styles from './styles.module.scss';

interface ProductHeroSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const ProductHeroSection = (props: ProductHeroSectionProps) => {
  const { title, description, imageSrc, imageAlt } = props;
  const page$_product = usePageStore((s) => s.page$_pageItem.product);

  const popupWrapperRef = useRef<HTMLDivElement>(null);
  const [isQrPopupVisible, setIsQrPopupVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const qrCodeOptions = [
    { label: '小程序商品', image: '/qr-code.jpg' },
    { label: '淘宝店铺', image: '/qr-code.jpg' },
    { label: '京东店铺', image: '/qr-code.jpg' },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (typeof window === 'undefined') return;
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isQrPopupVisible || isMobile) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        popupWrapperRef.current &&
        !popupWrapperRef.current.contains(event.target as Node)
      ) {
        setIsQrPopupVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isQrPopupVisible, isMobile]);

  const renderQrContent = () => (
    <>
      <p className={cx(styles['qr-popup-title'])}>扫码购买</p>
      <div className={cx(styles['qr-popup-list'])}>
        {qrCodeOptions.map((option) => (
          <div key={option.label} className={cx(styles['qr-popup-item'])}>
            <img
              src={option.image}
              alt={option.label}
              className={cx(styles['qr-popup-image'])}
            />
            <span className={cx(styles['qr-popup-label'])}>{option.label}</span>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <section className={cx(styles['hero-section'], 'scroll-animate')}>
      <div className={cx(styles['container'])}>
        <div className={cx(styles['hero-grid'])}>
          <div className={cx(styles['hero-content'])}>
            <h1 className={cx(styles['hero-title'])}>{title}</h1>
            <p className={cx(styles['hero-description'])}>{description}</p>
            {isMobile ? (
              <div className={cx(styles['qr-inline-container'])}>
                {renderQrContent()}
              </div>
            ) : (
              <div
                className={cx(styles['buy-button-wrapper'])}
                ref={popupWrapperRef}
              >
                <button
                  className={cx(styles['buy-button'])}
                  type="button"
                  onMouseEnter={() => setIsQrPopupVisible((prevState) => true)}
                  onMouseLeave={() => setIsQrPopupVisible((prevState) => false)}
                >
                  <LuShoppingCart className={cx(styles['cart-icon'])} />
                  <span>{page$_product.share.buyNowText}</span>
                </button>

                <div
                  className={cx(
                    styles['qr-popup'],
                    isQrPopupVisible && styles['qr-popup-visible'],
                  )}
                >
                  {renderQrContent()}
                </div>
              </div>
            )}
          </div>
          <div className={cx(styles['hero-image-wrapper'])}>
            <Swiper
              modules={[EffectCards]}
              effect="cards"
              grabCursor
              className={cx(styles['hero-swiper'])}
            >
              {product1HeroCarouselImages.map((heroImage) => (
                <SwiperSlide
                  key={heroImage.id}
                  className={cx(styles['hero-swiper-slide'])}
                >
                  <img
                    src={imageSrc}
                    alt={`${imageAlt}-${heroImage.title}`}
                    className={cx(styles['hero-image'])}
                  />
                  {/* <span className={cx(styles['hero-swiper-label'])}>
                    {heroImage.title}
                  </span> */}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
