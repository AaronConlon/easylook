import { forwardRef } from 'react';
import {
  LuBriefcase,
  LuBuilding2,
  LuHospital,
  LuRocket,
  LuSparkles,
  LuStore,
} from 'react-icons/lu';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { CommonPageHeader } from '@/components/CommonPageHeader';

import styles from './styles.module.scss';

interface IUViewProps extends IUiCompBaseProps {}

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const StoryIndex = forwardRef<HTMLDivElement, IUViewProps>((props, ref) => {
  const { className } = props;

  const timelineData: TimelineItem[] = [
    {
      date: '2020 年 8 月',
      title: '微隽成立',
      description: '上海惟爱医疗科技有限公司前身微爱科技（上海）有限公司成立',
      icon: <LuBuilding2 />,
    },
    {
      date: '2021 年 11 月',
      title: '惟爱·溪颜诞生',
      description: '第一家试点门店正式启动，探索营运新模式',
      icon: <LuStore />,
    },
    {
      date: '2022 年 8 月',
      title: '惟爱医疗成立',
      description: '重构并优化股权架构，上海惟爱医疗科技有限公司正式成立',
      icon: <LuHospital />,
    },
    {
      date: '2022 年 12 月',
      title: '惟爱·海华诞生',
      description:
        '惟爱视觉品牌再升级，与上海海华医院合作成立惟爱·海华视光中心',
      icon: <LuBriefcase />,
    },
    {
      date: '2023 年 8 月',
      title: '办公室开业',
      description: '公司规模扩大，新办公室正式启用',
      icon: <LuRocket />,
    },
    {
      date: '更多精彩',
      title: '持续发展',
      description:
        '上海惟爱医疗科技有限公司聚势前行、企业战略全面升级，开启新篇章。',
      icon: <LuSparkles />,
    },
  ];

  return (
    <div
      ref={ref}
      className={cx(
        styles['comp-wrapper'],
        className,
        'g-uni-comp--StoryIndex',
      )}
    >
      <CommonPageHeader
        title="发展历程"
        subTitle="Our Story"
        bgImage="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
      />

      <section className={cx(styles['timeline-section'])}>
        <div className={cx(styles['timeline-container'])}>
          {/* 桌面端中间的垂直线 */}
          <div className={cx(styles['timeline-line'])} />

          {/* 时间轴项目 */}
          <div className={cx(styles['timeline-items'])}>
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={cx(styles['timeline-item'], 'scroll-animate')}
                  data-delay={index * 100}
                >
                  {/* 移动端布局 */}
                  <div className={cx(styles['timeline-mobile'])}>
                    <div className={cx(styles['timeline-mobile-line'])}>
                      <div className={cx(styles['timeline-icon-wrapper'])}>
                        {item.icon}
                      </div>
                      <div className={cx(styles['timeline-vertical-line'])} />
                    </div>
                    <div className={cx(styles['timeline-content-wrapper'])}>
                      <div className={cx(styles['timeline-card'])}>
                        <p className={cx(styles['timeline-date'])}>
                          {item.date}
                        </p>
                        <h3 className={cx(styles['timeline-title'])}>
                          {item.title}
                        </h3>
                        <p className={cx(styles['timeline-description'])}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 桌面端布局 */}
                  <div className={cx(styles['timeline-desktop'])}>
                    <div className={cx(styles['timeline-desktop-grid'])}>
                      {isLeft ? (
                        <>
                          <div
                            className={cx(styles['timeline-desktop-content'])}
                          >
                            <div
                              className={cx(
                                styles['timeline-card'],
                                styles['timeline-card--left'],
                              )}
                            >
                              <p className={cx(styles['timeline-date'])}>
                                {item.date}
                              </p>
                              <h3 className={cx(styles['timeline-title'])}>
                                {item.title}
                              </h3>
                              <p className={cx(styles['timeline-description'])}>
                                {item.description}
                              </p>
                              <div
                                className={cx(styles['timeline-arrow-right'])}
                              />
                            </div>
                          </div>
                          <div />
                        </>
                      ) : (
                        <>
                          <div />
                          <div
                            className={cx(styles['timeline-desktop-content'])}
                          >
                            <div
                              className={cx(
                                styles['timeline-card'],
                                styles['timeline-card--right'],
                              )}
                            >
                              <p className={cx(styles['timeline-date'])}>
                                {item.date}
                              </p>
                              <h3 className={cx(styles['timeline-title'])}>
                                {item.title}
                              </h3>
                              <p className={cx(styles['timeline-description'])}>
                                {item.description}
                              </p>
                              <div
                                className={cx(styles['timeline-arrow-left'])}
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    {/* 中间的图标 */}
                    <div
                      className={cx(
                        styles['timeline-icon-center'],
                        isLeft
                          ? styles['timeline-icon-center--left']
                          : styles['timeline-icon-center--right'],
                      )}
                    >
                      <div className={cx(styles['timeline-icon-wrapper'])}>
                        {item.icon}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
});
