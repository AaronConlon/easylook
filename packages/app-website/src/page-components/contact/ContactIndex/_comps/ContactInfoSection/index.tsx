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
      <div className={cx(styles['info-list'])}>
        <div className={cx(styles['info-item'])}>
          <h3 className={cx(styles['info-label'])}>电话</h3>
          <p className={cx(styles['info-value'])}>{contactInfo.phone}</p>
        </div>

        <div className={cx(styles['info-item'])}>
          <h3 className={cx(styles['info-label'])}>邮箱</h3>
          <p className={cx(styles['info-value'])}>{contactInfo.email}</p>
        </div>

        <div className={cx(styles['info-item'])}>
          <h3 className={cx(styles['info-label'])}>地址</h3>
          <p className={cx(styles['info-value'])}>{contactInfo.address}</p>
        </div>

        <div className={cx(styles['info-item'])}>
          <h3 className={cx(styles['info-label'])}>邮编</h3>
          <p className={cx(styles['info-value'])}>{contactInfo.zipCode}</p>
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
