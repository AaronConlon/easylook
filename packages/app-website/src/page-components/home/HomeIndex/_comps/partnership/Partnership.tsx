import { forwardRef } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { ContainerTitle } from '@/components/ContainerTitle';

import styles from './styles.module.scss';

interface IPartnershipProps extends IUiCompBaseProps {}

export const Partnership = forwardRef<HTMLDivElement, IPartnershipProps>(
  (props, ref) => {
    const { className } = props;

    const mainChannels = [
      '医院眼科（或眼科医院）',
      '验光配镜中心（视光中心）',
      '视力康复机构（视力康复保健中心、低视力防治中心等）',
    ];

    const partnershipTargets = [
      '医院及相关医疗机构；',
      '与医院有良好关系和信用的公司或个人',
      '有医疗器械、药品运做经验的公司或个人',
      '具有资金实力及启动市场能力的公司或个人',
    ];

    const afterSalesServices = [
      '免费上门培训。',
      '免费提供产品和科普视科普资料，宣传单张。',
      '定期上门维护。',
      '提供 24 小时售后客服热线（4008777511）支持。',
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
        <ContainerTitle title="加盟合作" subtitle="完善的售后服务保障" />
        <br />
        <br />

        <div className={cx(styles['partnership-grid'])}>
          {/* 主要渠道 - 左上 */}
          <div className={cx(styles['grid-item'], styles['channels-section'])}>
            <div className={cx(styles['section-header'])}>
              <h3 className={cx(styles['section-title'])}>主要渠道</h3>
              <div className={cx(styles['title-decoration'])} />
            </div>
            <div className={cx(styles['section-content'])}>
              <div className={cx(styles['doctor-image'])}>
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face"
                  alt="医生"
                />
              </div>
              <ul className={cx(styles['channels-list'])}>
                {mainChannels.map((channel, index) => (
                  <li key={index} className={cx(styles['list-item'])}>
                    <span className={cx(styles['item-number'])}>
                      {index + 1}.
                    </span>
                    <span className={cx(styles['item-text'])}>{channel}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 售后服务 - 右上 */}
          <div className={cx(styles['grid-item'], styles['services-section'])}>
            <div className={cx(styles['section-header'])}>
              <h3 className={cx(styles['section-title'])}>售后服务</h3>
              <div className={cx(styles['title-decoration'])} />
            </div>
            <div className={cx(styles['section-content'])}>
              <div className={cx(styles['service-image'])}>
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop&crop=face"
                  alt="客服"
                />
              </div>
              <ul className={cx(styles['services-list'])}>
                {afterSalesServices.map((service, index) => (
                  <li key={index} className={cx(styles['list-item'])}>
                    <span className={cx(styles['item-number'])}>
                      {index + 1}.
                    </span>
                    <span className={cx(styles['item-text'])}>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 合作对象 - 左下 */}
          <div className={cx(styles['grid-item'], styles['targets-section'])}>
            <div className={cx(styles['section-header'])}>
              <h3 className={cx(styles['section-title'])}>合作对象</h3>
              <div className={cx(styles['title-decoration'])} />
            </div>
            <div className={cx(styles['section-content'])}>
              <ul className={cx(styles['targets-list'])}>
                {partnershipTargets.map((target, index) => (
                  <li key={index} className={cx(styles['list-item'])}>
                    <span className={cx(styles['item-number'])}>
                      {index + 1}.
                    </span>
                    <span className={cx(styles['item-text'])}>{target}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 合作伙伴图片 - 右下 */}
          {/* <div
            className={cx(
              styles['grid-item'],
              styles['partnership-image-section'],
            )}
          >
            <div className={cx(styles['partnership-image'])}>
              <img
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop"
                alt="合作伙伴"
              />
            </div>
          </div> */}
        </div>
      </div>
    );
  },
);

Partnership.displayName = 'Partnership';
