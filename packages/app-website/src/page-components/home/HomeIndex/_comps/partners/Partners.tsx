import { forwardRef, useEffect, useRef, useState } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { ContainerTitle } from '@/components/ContainerTitle';

import styles from './styles.module.scss';

interface IPartnersProps extends IUiCompBaseProps {}

interface PartnerItem {
  id: string;
  logo: string;
  website: string;
}

export const Partners = forwardRef<HTMLDivElement, IPartnersProps>(
  (props, ref) => {
    const { className } = props;
    const [isPaused, setIsPaused] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    // 合作伙伴数据 - 使用airdoc网站的合作伙伴图片
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

    // 为了无缝循环，复制数据
    const duplicatedPartners = [...partnersData, ...partnersData];

    useEffect(() => {
      const scrollContainer = scrollRef.current;
      if (!scrollContainer || isPaused) return;

      let animationId: number;
      let startTime: number | null = null;
      const scrollSpeed = 30; // 每秒滚动像素数

      const animate = (currentTime: number) => {
        if (startTime === null) {
          startTime = currentTime;
        }

        const deltaTime = currentTime - startTime;
        const scrollLeft = (deltaTime * scrollSpeed) / 1000;

        // 当滚动到一半时重置（因为我们复制了数据）
        const maxScroll = scrollContainer.scrollWidth / 2;
        const normalizedScrollLeft = scrollLeft % maxScroll;

        scrollContainer.scrollLeft = normalizedScrollLeft;
        animationId = requestAnimationFrame(animate);
      };

      animationId = requestAnimationFrame(animate);

      return () => {
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
      };
    }, [isPaused]);

    const handleMouseEnter = () => {
      setIsPaused(true);
    };

    const handleMouseLeave = () => {
      setIsPaused(false);
    };

    return (
      <div
        ref={ref}
        className={cx(
          styles['comp-wrapper'],
          className,
          'g-uni-comp--Partners',
        )}
      >
        <ContainerTitle
          title="合作伙伴"
          subtitle="与广大合作伙伴携手，共同推进视觉健康技术发展"
        />

        <div
          ref={containerRef}
          className={cx(styles['partners-container'])}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* 左侧渐变蒙层 */}
          <div
            className={cx(
              styles['gradient-mask'],
              styles['gradient-mask--left'],
            )}
          />

          {/* 滚动容器 */}
          <div ref={scrollRef} className={cx(styles['partners-scroll'])}>
            <div className={cx(styles['partners-track'])}>
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className={cx(styles['partner-item'])}
                  onClick={() => window.open(partner.website, '_blank')}
                >
                  <div className={cx(styles['partner-logo'])}>
                    <img
                      src={partner.logo}
                      alt={`Partner ${partner.id}`}
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧渐变蒙层 */}
          <div
            className={cx(
              styles['gradient-mask'],
              styles['gradient-mask--right'],
            )}
          />
        </div>
      </div>
    );
  },
);

Partners.displayName = 'Partners';
