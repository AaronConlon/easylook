import { Divider } from 'antd';
import { RiMessageLine } from 'react-icons/ri';

import { cx } from '----pkg-platform/h5/h5-utils/cx-util--h5';

import { usePageStore } from '----pkg-uni/uni-stores/usePageStore';

import { CommonPageHeader } from '@/components/CommonPageHeader';
import { ContactForm } from '@/components/ContactForm';
import { ScreenWidthLimitAndCentered } from '@/components/ScreenWidthLimitAndCentered';

import { ContactInfoSection } from './_comps/ContactInfoSection';
import mapImg from './_images/map.png';

import styles from './styles.module.scss';

export const ContactIndex = () => {
  const page$_share = usePageStore((s) => s.page$_share);
  const contactConfig = page$_share.contact;
  const siteInfo = page$_share.site;

  const contactInfo = {
    phone: siteInfo.phone,
    email: siteInfo.email,
    address: siteInfo.address,
    zipCode: siteInfo.zipCode,
    qrCode1: siteInfo.qrCode1,
    qrCode1Label: siteInfo.qrCode1Label,
    qrCode2: siteInfo.qrCode2,
    qrCode2Label: siteInfo.qrCode2Label,
  };

  return (
    <div className={cx(styles['contact-index-wrapper'])}>
      {/* <ScrollBgBar
        title="联系我们"
        subtitle="欢迎与我们联系，了解更多关于视立优的信息"
        backgroundText={
          'We are committed to providing high-quality and professional '
          // 'visual function products to accelerate visual health and bring a better life to all!'
        }
      /> */}
      <CommonPageHeader
        title={contactConfig.title}
        subTitle={contactConfig.subtitle}
        bgImage={contactConfig.bgImage}
      />

      <ScreenWidthLimitAndCentered className={cx(styles['contact-content'])}>
        <div className={cx(styles['content-layout'])}>
          {/* 左侧地图 */}
          <div className={cx(styles['map-section'])}>
            <div className={cx(styles['map-section-title'])}>
              {contactConfig.sections.map.title}
            </div>
            <img
              src={mapImg}
              alt={contactConfig.sections.map.alt}
              className={cx(styles['map-image'])}
            />
          </div>

          {/* 右侧联系信息 */}
          <ContactInfoSection contactInfo={contactInfo} />
        </div>
      </ScreenWidthLimitAndCentered>

      <ScreenWidthLimitAndCentered className={cx(styles['form-section'])}>
        <Divider>
          <RiMessageLine
            style={{
              marginRight: 8,
              position: 'relative',
              top: 2,
              color: 'var(--app-brand-color)',
            }}
          />
          {contactConfig.sections.form.title}
        </Divider>
        <ContactForm />
      </ScreenWidthLimitAndCentered>
    </div>
  );
};
