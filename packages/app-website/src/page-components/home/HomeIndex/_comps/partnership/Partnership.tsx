import { forwardRef } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';


import styles from './styles.module.scss';

interface IPartnershipProps extends IUiCompBaseProps {}

export const Partnership = forwardRef<HTMLDivElement, IPartnershipProps>(
  (props, ref) => {
    const { className } = props;

    const marketData = [
      {
        icon: '📈',
        number: '1500 万',
        title: '弱视儿童市场',
        subtitle: '不足 1% 的治疗率',
      },
      {
        icon: '💰',
        number: '1000 亿',
        title: '视力康复市场容量',
        subtitle: '持续增长，潜力无限',
      },
      {
        icon: '🏆',
        number: '国产化',
        title: '医疗器械政策支持',
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
        {/* 主横幅区域 */}
        <div className={cx(styles['hero-banner'])}>
          <div className={cx(styles['banner-content'])}>
            {/* 顶部标签 */}
            <div className={cx(styles['top-badge'])}>
              国家科技部创新基金支持项目
            </div>

            {/* 主标题 */}
            <h1 className={cx(styles['main-title'])}>
              金眼科，银外科——千亿市场等你发掘！
            </h1>

            {/* 副标题 */}
            <div className={cx(styles['subtitle'])}>
              <span className={cx(styles['highlight'])}>加入我们</span>
            </div>

            {/* 行动召唤 */}
            <p className={cx(styles['cta-text'])}>
              下一个千万精英代理，就是你！
            </p>

            {/* 按钮组 */}
            <div className={cx(styles['button-group'])}>
              <button className={cx(styles['primary-button'])}>立即咨询</button>
              <div className={cx(styles['phone-button'])}>
                <span className={cx(styles['phone-label'])}>
                  免费咨询热线：
                </span>
                <span className={cx(styles['phone-number'])}>4008-777-511</span>
              </div>
            </div>
          </div>

          {/* 右侧图片 */}
          <div className={cx(styles['banner-image'])}>
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=600&fit=crop&crop=face"
              alt="合作伙伴"
            />
          </div>

          {/* 装饰图标 */}
          <div className={cx(styles['decoration-icon'])}>🏆</div>
        </div>

        {/* 市场数据卡片 */}
        <div className={cx(styles['market-data-section'])}>
          <div className={cx(styles['data-cards'])}>
            {marketData.map((data, index) => (
              <div key={index} className={cx(styles['data-card'])}>
                <div className={cx(styles['card-icon'])}>{data.icon}</div>
                <div className={cx(styles['card-number'])}>{data.number}</div>
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
          <div className={cx(styles['benefits-content'])}>
            <div className={cx(styles['benefits-header'])}>
              <h2 className={cx(styles['benefits-title'])}>
                成为我们的合作伙伴
              </h2>
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
                    <h3 className={cx(styles['benefit-title'])}>
                      {benefit.title}
                    </h3>
                    <p className={cx(styles['benefit-description'])}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={cx(styles['benefits-image'])}>
            <img
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=500&fit=crop"
              alt="合作伙伴握手"
            />
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
