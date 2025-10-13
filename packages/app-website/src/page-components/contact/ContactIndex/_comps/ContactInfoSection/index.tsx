import { LuMail, LuMapPin, LuPhone } from 'react-icons/lu';

import { cx } from '----pkg-platform/h5/h5-utils/cx-util--h5';

import styles from './styles.module.scss';

interface IContactInfo {
  phone: string;
  email: string;
  address: string;
  zipCode: string;
  qrCode1: string;
  qrCode1Label: string;
  qrCode2: string;
  qrCode2Label: string;
}

interface IProps {
  contactInfo: IContactInfo;
}

export const ContactInfoSection = (props: IProps) => {
  const { contactInfo } = props;

  return (
    <div className={cx(styles['info-section'])}>
      {/* 联系方式标题 */}
      <div className={cx(styles['info-section-title'])}>联系方式</div>

      {/* 联系方式卡片列表 */}
      <div className={cx(styles['info-list'])}>
        {/* 电话卡片 */}
        <div className={cx(styles['info-card'])}>
          <div className={cx(styles['icon-wrapper'])}>
            <LuPhone className={cx(styles['icon'])} />
          </div>
          <div className={cx(styles['card-content'])}>
            <h3 className={cx(styles['card-title'])}>电话咨询</h3>
            <p className={cx(styles['card-text'])}>
              客服热线：{contactInfo.phone}
            </p>
          </div>
        </div>

        {/* 邮箱卡片 */}
        <div className={cx(styles['info-card'])}>
          <div className={cx(styles['icon-wrapper'])}>
            <LuMail className={cx(styles['icon'])} />
          </div>
          <div className={cx(styles['card-content'])}>
            <h3 className={cx(styles['card-title'])}>邮箱联系</h3>
            <p className={cx(styles['card-text'])}>
              业务咨询：{contactInfo.email}
            </p>
          </div>
        </div>

        {/* 地址卡片 */}
        <div className={cx(styles['info-card'])}>
          <div className={cx(styles['icon-wrapper'])}>
            <LuMapPin className={cx(styles['icon'])} />
          </div>
          <div className={cx(styles['card-content'])}>
            <h3 className={cx(styles['card-title'])}>公司地址</h3>
            <p className={cx(styles['card-text'])}>{contactInfo.address}</p>
            <p className={cx(styles['card-text'])}>
              邮编：{contactInfo.zipCode}
            </p>
          </div>
        </div>
      </div>

      {/* 二维码区域 */}
      <div className={cx(styles['qrcode-section-title'])}>二维码</div>
      <div className={cx(styles['qrcode-section'])}>
        <div className={cx(styles['qrcode-item'])}>
          <img
            src={contactInfo.qrCode1}
            alt={contactInfo.qrCode1Label}
            className={cx(styles['qrcode-image'])}
          />
          <p className={cx(styles['qrcode-label'])}>
            {contactInfo.qrCode1Label}
          </p>
        </div>
        <div className={cx(styles['qrcode-item'])}>
          <img
            src={contactInfo.qrCode2}
            alt={contactInfo.qrCode2Label}
            className={cx(styles['qrcode-image'])}
          />
          <p className={cx(styles['qrcode-label'])}>
            {contactInfo.qrCode2Label}
          </p>
        </div>
      </div>
    </div>
  );
};
