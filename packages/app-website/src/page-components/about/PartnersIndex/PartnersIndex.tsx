import { forwardRef } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { usePageStore } from '----pkg-uni/uni-stores/usePageStore';

import { CommonPageHeader } from '@/components/CommonPageHeader';

import styles from './styles.module.scss';

interface IPartnersIndexProps extends IUiCompBaseProps {}

export const PartnersIndex = forwardRef<HTMLDivElement, IPartnersIndexProps>(
  (props, ref) => {
    const { className } = props;

    const page$_about = usePageStore((s) => s.page$_pageItem.about);

    return (
      <div
        ref={ref}
        className={cx(
          styles['comp-wrapper'],
          className,
          'g-uni-comp--PartnersIndex',
        )}
      >
        <CommonPageHeader
          title={page$_about.partners.title}
          subTitle={page$_about.partners.subtitle}
        />

        {/* 合作伙伴内容 */}
        <section className={cx(styles['partners-section'])}>
          <div className={cx(styles['partners-container'])}>
            <div className={cx(styles['partners-header'], 'scroll-animate')}>
              <p className={cx(styles['partners-description'])}>
                {page$_about.partners.description}
              </p>
            </div>

            {page$_about.partners.categories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={cx(styles['category-section'], 'scroll-animate')}
                data-delay={`${categoryIndex * 200}`}
              >
                <h2 className={cx(styles['category-title'])}>
                  {category.title}
                </h2>

                <div className={cx(styles['partners-grid'])}>
                  {category.partners.map((partner, partnerIndex) => (
                    <div
                      key={partnerIndex}
                      className={cx(styles['partner-card'], 'scroll-animate')}
                      data-delay={`${categoryIndex * 200 + partnerIndex * 100}`}
                    >
                      <div className={cx(styles['partner-logo'])}>
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                      <div className={cx(styles['partner-info'])}>
                        <h3 className={cx(styles['partner-name'])}>
                          {partner.name}
                        </h3>
                        <p className={cx(styles['partner-description'])}>
                          {partner.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  },
);

PartnersIndex.displayName = 'PartnersIndex';
