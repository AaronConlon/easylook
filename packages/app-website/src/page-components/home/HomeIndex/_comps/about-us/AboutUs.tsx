import { forwardRef } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { useNavigate } from '----pkg-uni/uni-hooks/useNavigate';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { usePageStore } from '----pkg-uni/uni-stores/usePageStore';

import { ContainerTitle } from '@/components/ContainerTitle';

import { MASTER_ROUTER_PATHS } from '@/consts/master-router-paths';

import styles from './styles.module.scss';

interface IAboutUsProps extends IUiCompBaseProps {}

export const AboutUs = forwardRef<HTMLDivElement, IAboutUsProps>(
  (props, ref) => {
    const { className } = props;
    const navigate = useNavigate();

    const page$_pageItem = usePageStore((s) => s.page$_pageItem);

    const handleCardClick = (section: string) => {
      switch (section) {
        case 'company':
          navigate({ to: MASTER_ROUTER_PATHS['/about/company'] });
          break;
        case 'development':
          navigate({ to: MASTER_ROUTER_PATHS['/about/story'] });
          break;
        case 'partners':
          navigate({ to: MASTER_ROUTER_PATHS['/about/partners'] });
          break;
        case 'honors':
          navigate({ to: MASTER_ROUTER_PATHS['/about/honor'] });
          break;
        default:
          break;
      }
    };

    return (
      <div
        ref={ref}
        id="about-us"
        className={cx(
          styles['comp-wrapper'],
          className,
          'g-uni-comp--AboutUs',
          'scroll-animate',
        )}
      >
        <ContainerTitle
          title={page$_pageItem.home.aboutUs.title}
          subtitle={page$_pageItem.home.aboutUs.subtitle}
        />

        <br />
        <br />

        <div className={cx(styles['about-grid'])}>
          {/* 企业介绍 - 左上 */}
          <div
            className={cx(styles['grid-item'], styles['company-section'])}
            onClick={() => handleCardClick('company')}
          >
            <div className={cx(styles['card-overlay'])} />
            <div className={cx(styles['card-content'])}>
              <div className={cx(styles['card-header'])}>
                <span className={cx(styles['card-subtitle'])}>
                  {page$_pageItem.home.aboutUs.sections[0].enTitle}
                </span>
                <h3 className={cx(styles['card-title'])}>
                  {page$_pageItem.home.aboutUs.sections[0].title}
                </h3>
              </div>
              <p className={cx(styles['card-description'])}>
                {page$_pageItem.home.aboutUs.sections[0].description}
              </p>
            </div>
          </div>

          {/* 发展历程 - 右上 */}
          <div
            className={cx(styles['grid-item'], styles['development-section'])}
            onClick={() => handleCardClick('development')}
          >
            <div className={cx(styles['card-overlay'])} />
            <div className={cx(styles['card-content'])}>
              <div className={cx(styles['card-header'])}>
                <span className={cx(styles['card-subtitle'])}>
                  {page$_pageItem.home.aboutUs.sections[1].enTitle}
                </span>
                <h3 className={cx(styles['card-title'])}>
                  {page$_pageItem.home.aboutUs.sections[1].title}
                </h3>
              </div>
              <p className={cx(styles['card-description'])}>
                {page$_pageItem.home.aboutUs.sections[1].description}
              </p>
            </div>
            {/* <div className={cx(styles['chart-decoration'])}>
              <div className={cx(styles['chart-line'])} />
              <div className={cx(styles['chart-points'])}>
                <span className={cx(styles['chart-point'])}>151</span>
                <span className={cx(styles['chart-point'])}>58</span>
                <span className={cx(styles['chart-point'])}>50</span>
                <span className={cx(styles['chart-point'])}>37</span>
              </div>
            </div> */}
          </div>

          {/* 合作伙伴 - 左下 */}
          <div
            className={cx(styles['grid-item'], styles['partners-section'])}
            onClick={() => handleCardClick('partners')}
          >
            <div className={cx(styles['card-overlay'])} />
            <div className={cx(styles['card-content'])}>
              <div className={cx(styles['card-header'])}>
                <span className={cx(styles['card-subtitle'])}>
                  {page$_pageItem.home.aboutUs.sections[2].enTitle}
                </span>
                <h3 className={cx(styles['card-title'])}>
                  {page$_pageItem.home.aboutUs.sections[2].title}
                </h3>
              </div>
              <p className={cx(styles['card-description'])}>
                {page$_pageItem.home.aboutUs.sections[2].description}
              </p>
            </div>
          </div>

          {/* 荣誉资质 - 右下 */}
          <div
            className={cx(styles['grid-item'], styles['honors-section'])}
            onClick={() => handleCardClick('honors')}
          >
            <div className={cx(styles['card-overlay'])} />
            <div className={cx(styles['card-content'])}>
              <div className={cx(styles['card-header'])}>
                <span className={cx(styles['card-subtitle'])}>
                  {page$_pageItem.home.aboutUs.sections[3].enTitle}
                </span>
                <h3 className={cx(styles['card-title'])}>
                  {page$_pageItem.home.aboutUs.sections[3].title}
                </h3>
              </div>
              <p className={cx(styles['card-description'])}>
                {page$_pageItem.home.aboutUs.sections[3].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

AboutUs.displayName = 'AboutUs';
