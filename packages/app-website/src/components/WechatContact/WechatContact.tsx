import { forwardRef, useState } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { UniversalImage } from '@/components/UniversalImage';

import wechatIcon from '@/assets/images/wechat.svg';

import styles from './styles.module.scss';

interface IWechatContactProps extends IUiCompBaseProps {
  qrCodeUrl?: string;
  title?: string;
  description?: string;
}

export const WechatContact = forwardRef<HTMLDivElement, IWechatContactProps>(
  (props, ref) => {
    const {
      className,
      qrCodeUrl = 'https://www.easylook.com.cn/wp-content/uploads/2025/01/qrcode_for_gh_4fa8321d06c4_1280-1.jpg',
      title = '扫码关注"视立优"',
      description = '获取使用教程',
      ...rest
    } = props;

    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        ref={ref}
        className={cx(styles['wechat-contact'], className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...rest}
      >
        {/* 微信图标 */}
        <div className={cx(styles['wechat-icon'])}>
          <img src={wechatIcon} alt="微信" />
        </div>

        {/* Hover弹出层 */}
        {isHovered && (
          <div className={cx(styles['popup-overlay'])}>
            <div className={cx(styles['popup-content'])}>
              <div className={cx(styles['popup-qr-section'])}>
                <UniversalImage
                  src={qrCodeUrl}
                  alt="微信二维码"
                  className={cx(styles['popup-qr-image'])}
                  objectFit="cover"
                  skeletonHeight={120}
                  errorText="二维码加载失败"
                />
              </div>

              <div className={cx(styles['popup-text-section'])}>
                <h4 className={cx(styles['popup-title'])}>{title}</h4>
                <p className={cx(styles['popup-description'])}>{description}</p>
              </div>

              {/* 箭头指示器 */}
              <div className={cx(styles['popup-arrow'])} />
            </div>
          </div>
        )}
      </div>
    );
  },
);

WechatContact.displayName = 'WechatContact';
