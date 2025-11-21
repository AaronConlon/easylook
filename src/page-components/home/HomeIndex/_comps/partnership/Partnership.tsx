import { forwardRef } from 'react';
import CountUp from 'react-countup';
import { LuAward, LuHandshake, LuTrendingUp, LuUsers } from 'react-icons/lu';

import type { ICompBaseProps } from '__shared__/typings/comp-type';

import { cx } from '__shared__/utils/cx-util';


import { usePageStore } from '@/stores/usePageStore';

import { ContainerTitle } from '@/components/ContainerTitle';

import styles from './styles.module.scss';

interface IPartnershipProps extends ICompBaseProps {}

export const Partnership = forwardRef<HTMLDivElement, IPartnershipProps>(
  (props, ref) => {
    const { className } = props;

    const page$_pageItem = usePageStore((s) => s.page$_pageItem);

    const page$_share = usePageStore((s) => s.page$_share);

    const iconMap = {
      'amblyopia-children': <LuTrendingUp />,
      'vision-recovery-market': <LuUsers />,
      'policy-support': <LuAward />,
    };

    return (
      <div
        ref={ref}
        id="partnership"
        className={cx(
          styles['comp-wrapper'],
          className,
          'g-uni-comp--Partnership',
        )}
      >
        <ContainerTitle
          title={page$_pageItem.home.partnership.title}
          subtitle={page$_pageItem.home.partnership.subtitle}
          styles={{
            p: {
              marginBottom: '56px',
            },
            h2: {
              marginTop: '80px',
            },
          }}
        />

        {/* 主横幅区域 */}
        <div className={cx(styles['hero-banner'])}>
          {/* 内容容器 - 绝对定位居中 */}
          <div className={cx(styles['banner-overlay'])}>
            {/* 顶部标签 */}
            <div className={cx(styles['top-badge'])}>
              {page$_pageItem.home.partnership.banner.topBadge}
            </div>

            {/* 主标题 */}
            <h1 className={cx(styles['main-title'])}>
              {page$_pageItem.home.partnership.banner.mainTitle}
            </h1>

            {/* 副标题 */}
            <p className={cx(styles['subtitle'])}>
              <span className={cx(styles['highlight'])}>
                {page$_pageItem.home.partnership.banner.subtitle}
              </span>
            </p>

            {/* 行动召唤 */}
            <p className={cx(styles['cta-text'])}>
              {page$_pageItem.home.partnership.banner.ctaText}
            </p>

            {/* 按钮组 */}
            <div className={cx(styles['button-group'])}>
              <a
                href={`tel:${page$_share.site.phone}`}
                className={cx(styles['phone-button'])}
              >
                <span className={cx(styles['phone-label'])}>
                  {page$_pageItem.home.partnership.banner.phoneLabel}
                </span>
                <span className={cx(styles['phone-number'])}>
                  {page$_share.site.phone}
                </span>
              </a>
            </div>
          </div>

          {/* 装饰图标 - 右上角 */}
          <div className={cx(styles['decoration-icon'])}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
              <circle cx="12" cy="8" r="6"></circle>
            </svg>
          </div>
        </div>

        {/* 市场数据副标题 */}
        <div className={cx(styles['market-data-subtitle'])}>
          {page$_pageItem.home.partnership.secondTitle}
        </div>

        {/* 市场数据卡片 */}
        <div className={cx(styles['market-data-section'])}>
          <div className={cx(styles['data-cards'])}>
            {page$_pageItem.home.partnership.market.map((data, index) => (
              <div key={index} className={cx(styles['data-card'])}>
                <div className={cx(styles['card-icon'])}>
                  {iconMap[data.slug as keyof typeof iconMap]}
                </div>
                <div className={cx(styles['card-number'])}>
                  <CountUp
                    start={0}
                    end={data.number}
                    duration={2.5}
                    separator=","
                    decimals={0}
                  />
                  <span className={cx(styles['card-suffix'])}>
                    {data.suffix}
                  </span>
                </div>
                <div className={cx(styles['card-title'])}>{data.title}</div>
                <div className={cx(styles['card-subtitle'])}>
                  {data.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 合作伙伴权益 */}
        <div className={cx(styles['benefits-section'])}>
          <div className={cx(styles['benefits-container'])}>
            {/* 左侧文案内容 */}
            <div className={cx(styles['benefits-content'])}>
              <div className={cx(styles['benefits-header'])}>
                <div className={cx(styles['benefits-title-wrapper'])}>
                  <div className={cx(styles['benefits-title-icon'])}>
                    <LuHandshake />
                  </div>
                  <h2 className={cx(styles['benefits-title'])}>
                    {page$_pageItem.home.partnership.benefitsTitle}
                  </h2>
                </div>
                <p className={cx(styles['benefits-subtitle'])}>
                  {page$_pageItem.home.partnership.benefitsSubtitle}
                </p>
              </div>

              <div className={cx(styles['benefits-list'])}>
                {page$_pageItem.home.partnership.benefits.map(
                  (benefit, index) => (
                    <div key={index} className={cx(styles['benefit-item'])}>
                      <div className={cx(styles['benefit-number'])}>
                        {index + 1}
                      </div>
                      <div className={cx(styles['benefit-content'])}>
                        <h4 className={cx(styles['benefit-title'])}>
                          {benefit.title}
                        </h4>
                        <p className={cx(styles['benefit-description'])}>
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* 右侧握手图片 */}
            <div className={cx(styles['benefits-image'])}>
              <img
                src="https://de4965e.webp.li/blog-images/2025/10/9f46fae74442e8cb7e83d891e9c3029a.png"
                alt="合作伙伴"
              />
            </div>
          </div>
        </div>

        {/* 底部政策横幅 */}
        <div className={cx(styles['policy-banner'])}>
          {page$_pageItem.home.partnership.policyBanner}
        </div>
      </div>
    );
  },
);

Partnership.displayName = 'Partnership';
