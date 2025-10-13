import { forwardRef } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { CommonPageHeader } from '@/components/CommonPageHeader';

import styles from './styles.module.scss';

interface IUViewProps extends IUiCompBaseProps {}

export const AboutIndex = forwardRef<HTMLDivElement, IUViewProps>(
  (props, ref) => {
    const { className } = props;

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
          title="公司介绍"
          subTitle="Company Introduction"
          // bgImage="https://plus.unsplash.com/premium_photo-1682091109243-3c25af07f13a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
        />

        {/* 公司介绍内容 */}
        <section className={cx(styles['company-intro-section'])}>
          <div className={cx(styles['intro-container'])}>
            <div className={cx(styles['intro-header'], 'scroll-animate')}>
              <h2 className={cx(styles['intro-title'])}>
                上海惟爱医疗科技有限公司
              </h2>
              <div className={cx(styles['title-divider'])} />
            </div>

            <div className={cx(styles['intro-content'])}>
              <p
                className={cx(styles['intro-paragraph'], 'scroll-animate')}
                data-delay="100"
              >
                上海惟爱医疗科技有限公司是一家专注于眼科全产业链的医疗科技公司，总部位于上海市。公司业务触及多个领域，主营眼视光产品自研、线下实体诊所、医疗软件研发和销售、医疗设备及产品供应链、会务会展承办等。
              </p>
              <p
                className={cx(styles['intro-paragraph'], 'scroll-animate')}
                data-delay="200"
              >
                惟爱医疗深耕于眼视光医疗行业，旗下品牌有惟爱视觉 (FEAL
                VISION)，致力于为大众提供近视防控、行为视光、视觉康复、成人视疲劳等各类眼视光前沿性产品；并通过科普宣传、优医推荐以及大数据分析进行个性化的眼视光健康服务；视立优
                EASYLOOK
                致力于提供高品质、专业化的视功能产品，推动视健康发展，为全民创造美好生活！不仅如此，视立优专为斜弱视问题、学习阅读障碍、提升专注力等问题提供解决方案，是追求视觉健康家庭的理想选择！
              </p>
              <p
                className={cx(styles['intro-paragraph'], 'scroll-animate')}
                data-delay="300"
              >
                公司的产品主要应用于白内障、青光眼、近视眼、远视眼等眼科疾病的治疗和诊断。该公司的技术团队由一批具有多年经验的医学、工程和管理专业人士组成。通过持续不断的研发和创新，旨在为中国及全球的眼科医疗事业做出贡献。
              </p>
            </div>

            <div className={cx(styles['feature-cards'])}>
              <div
                className={cx(styles['feature-card'], 'scroll-animate')}
                data-delay="400"
              >
                <div className={cx(styles['feature-title'])}>全产业链</div>
                <p className={cx(styles['feature-description'])}>
                  眼科医疗全方位覆盖
                </p>
              </div>
              <div
                className={cx(styles['feature-card'], 'scroll-animate')}
                data-delay="500"
              >
                <div className={cx(styles['feature-title'])}>专业团队</div>
                <p className={cx(styles['feature-description'])}>
                  医学工程管理专家
                </p>
              </div>
              <div
                className={cx(styles['feature-card'], 'scroll-animate')}
                data-delay="600"
              >
                <div className={cx(styles['feature-title'])}>持续创新</div>
                <p className={cx(styles['feature-description'])}>
                  前沿产品研发能力
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  },
);
