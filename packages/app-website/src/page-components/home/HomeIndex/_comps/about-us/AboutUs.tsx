import { forwardRef } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { useNavigate } from '----pkg-uni/uni-hooks/useNavigate';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { ContainerTitle } from '@/components/ContainerTitle';

import { MASTER_ROUTER_PATHS } from '@/consts/master-router-paths';

import styles from './styles.module.scss';

interface IAboutUsProps extends IUiCompBaseProps {}

export const AboutUs = forwardRef<HTMLDivElement, IAboutUsProps>(
  (props, ref) => {
    const { className } = props;
    const navigate = useNavigate();

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
          title="关于我们"
          subtitle="专业、创新、值得信赖的视力保护专家"
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
                  Company Introduction
                </span>
                <h3 className={cx(styles['card-title'])}>企业介绍</h3>
              </div>
              <p className={cx(styles['card-description'])}>
                {'视立优成立于 2018 年，专注于视力保护领域的研发与创新'}
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
                  Development History
                </span>
                <h3 className={cx(styles['card-title'])}>发展历程</h3>
              </div>
              <p className={cx(styles['card-description'])}>
                {'从 2018 年成立至今，持续创新，服务用户超百万'}
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
                <span className={cx(styles['card-subtitle'])}>Partners</span>
                <h3 className={cx(styles['card-title'])}>合作伙伴</h3>
              </div>
              <p className={cx(styles['card-description'])}>
                {'与多家知名医疗机构建立长期合作，服务网络遍及全国'}
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
                  Honors & Qualifications
                </span>
                <h3 className={cx(styles['card-title'])}>荣誉资质</h3>
              </div>
              <p className={cx(styles['card-description'])}>
                {'国家医疗器械认证、ISO 质量体系认证等多项荣誉'}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

AboutUs.displayName = 'AboutUs';
