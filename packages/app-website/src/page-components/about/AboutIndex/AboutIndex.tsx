import { forwardRef } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { usePageStore } from '----pkg-uni/uni-stores/usePageStore';

import { CommonPageHeader } from '@/components/CommonPageHeader';

import styles from './styles.module.scss';

interface IUViewProps extends IUiCompBaseProps {}

export const AboutIndex = forwardRef<HTMLDivElement, IUViewProps>(
  (props, ref) => {
    const { className } = props;

    const page$_about = usePageStore((s) => s.page$_pageItem.about);

    return (
      <div
        className={cx(
          styles['comp-wrapper'],
          className,
          'g-uni-comp--AboutIndex',
        )}
      >
        {/* Company Introduction */}
        <CommonPageHeader
          title={page$_about.company.title}
          subTitle={page$_about.company.subtitle}
          // bgImage="https://plus.unsplash.com/premium_photo-1682091109243-3c25af07f13a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
        />

        {/* 公司介绍内容 */}
        <section className={cx(styles['company-intro-section'])}>
          <div className={cx(styles['intro-container'])}>
            <div className={cx(styles['intro-header'], 'scroll-animate')}>
              <h2 className={cx(styles['intro-title'])}>
                {page$_about.company.companyName}
              </h2>
              <div className={cx(styles['title-divider'])} />
            </div>

            <div className="scroll-animate" data-delay={`100`}>
              <div className={cx(styles['intro-content'])}>
                {page$_about.company.paragraphs.map((paragraph, index) => (
                  <p key={index} className={cx(styles['intro-paragraph'])}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className={cx(styles['feature-cards'])}>
                {page$_about.company.features.map((feature, index) => (
                  <div key={index} className={cx(styles['feature-card'])}>
                    <div className={cx(styles['feature-title'])}>
                      {feature.title}
                    </div>
                    <p className={cx(styles['feature-description'])}>
                      {feature.description}
                    </p>
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
