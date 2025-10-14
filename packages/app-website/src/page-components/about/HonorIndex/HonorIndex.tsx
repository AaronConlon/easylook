import { forwardRef } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { usePageStore } from '----pkg-uni/uni-stores/usePageStore';

import { CommonPageHeader } from '@/components/CommonPageHeader';

import styles from './styles.module.scss';

interface IHonorIndexProps extends IUiCompBaseProps {}

export const HonorIndex = forwardRef<HTMLDivElement, IHonorIndexProps>(
  (props, ref) => {
    const { className } = props;

    const page$_about = usePageStore((s) => s.page$_pageItem.about);

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
          title={page$_about.honor.title}
          subTitle={page$_about.honor.subtitle}
        />

        {/* 荣誉资质内容 */}
        <section className={cx(styles['honor-section'])}>
          <div className={cx(styles['honor-container'])}>
            <div className={cx(styles['honor-header'], 'scroll-animate')}>
              <p className={cx(styles['honor-description'])}>
                {page$_about.honor.description}
              </p>
            </div>

            {page$_about.honor.categories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={cx(styles['category-section'], 'scroll-animate')}
                data-delay={`${categoryIndex * 200}`}
              >
                <h2 className={cx(styles['category-title'])}>
                  {category.title}
                </h2>

                <div className={cx(styles['honors-grid'])}>
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className={cx(styles['honor-card'], 'scroll-animate')}
                      data-delay={`${categoryIndex * 200 + itemIndex * 100}`}
                    >
                      <div className={cx(styles['honor-image'])}>
                        <img
                          src={item.image}
                          alt={item.title}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                      <div className={cx(styles['honor-info'])}>
                        <h3 className={cx(styles['honor-title'])}>
                          {item.title}
                        </h3>
                        <p className={cx(styles['honor-issuer'])}>
                          {item.issuer}
                        </p>
                        <p className={cx(styles['honor-date'])}>{item.date}</p>
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

HonorIndex.displayName = 'HonorIndex';
