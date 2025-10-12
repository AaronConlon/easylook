import { forwardRef } from 'react';
import CountUp from 'react-countup';
import { LuAward, LuHandshake, LuTrendingUp, LuUsers } from 'react-icons/lu';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { ContainerTitle } from '@/components/ContainerTitle';

import styles from './styles.module.scss';

interface IPartnershipProps extends IUiCompBaseProps {}

export const Partnership = forwardRef<HTMLDivElement, IPartnershipProps>(
  (props, ref) => {
    const { className } = props;

    const marketData = [
      {
        icon: <LuTrendingUp />,
        number: 1500,
        suffix: '万',
        title: '弱视儿童市场',
        subtitle: '不足 1% 的治疗率',
      },
      {
        icon: <LuUsers />,
        number: 1000,
        suffix: '亿',
        title: '视力康复市场容量',
        subtitle: '持续增长，潜力无限',
      },
      {
        icon: <LuAward />,
        number: 100,
        suffix: '%',
        title: '政策支持力度',
        subtitle: '国家政策大力扶持',
      },
    ];

    const partnershipBenefits = [
      {
        number: '1',
        title: '全方位市场推广支持',
        description: '品牌宣传、营销物料、线上线下推广',
      },
      {
        number: '2',
        title: '成熟商业模式与利润空间',
        description: '经过验证的盈利模式，丰厚回报',
      },
      {
        number: '3',
        title: '专业产品培训与运营指导',
        description: '一对一培训，全程运营支持',
      },
    ];

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
          title="合作加盟"
          subtitle="千亿视力康复市场，国家政策支持，专业团队指导，共创眼健康事业新蓝海"
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
              国家科技部创新基金支持项目
            </div>

            {/* 主标题 */}
            <h1 className={cx(styles['main-title'])}>
              1000 亿视力康复市场容量
            </h1>

            {/* 副标题 */}
            <p className={cx(styles['subtitle'])}>
              <span className={cx(styles['highlight'])}>加入我们</span>
            </p>

            {/* 行动召唤 */}
            <p className={cx(styles['cta-text'])}>
              下一个千万精英代理，就是你！
            </p>

            {/* 按钮组 */}
            <div className={cx(styles['button-group'])}>
              <a href="tel:4008-777-511" className={cx(styles['phone-button'])}>
                <span className={cx(styles['phone-label'])}>
                  免费咨询热线：
                </span>
                <span className={cx(styles['phone-number'])}>
                  400-901-83138
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
          金眼科，银外科——千亿市场等你发掘！
        </div>

        {/* 市场数据卡片 */}
        <div className={cx(styles['market-data-section'])}>
          <div className={cx(styles['data-cards'])}>
            {marketData.map((data, index) => (
              <div key={index} className={cx(styles['data-card'])}>
                <div className={cx(styles['card-icon'])}>{data.icon}</div>
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
                    成为我们的合作伙伴
                  </h2>
                </div>
                <p className={cx(styles['benefits-subtitle'])}>
                  专业培训支持·品牌授权体系·完善售后服务
                </p>
              </div>

              <div className={cx(styles['benefits-list'])}>
                {partnershipBenefits.map((benefit, index) => (
                  <div key={index} className={cx(styles['benefit-item'])}>
                    <div className={cx(styles['benefit-number'])}>
                      {benefit.number}
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
                ))}
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
          国家政策大力支持——医疗器械国产化加速
        </div>
      </div>
    );
  },
);

Partnership.displayName = 'Partnership';
