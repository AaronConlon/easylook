import { Divider } from 'antd';
import { RiMessageLine } from 'react-icons/ri';

import { cx } from '----pkg-platform/h5/h5-utils/cx-util--h5';

import { CommonPageHeader } from '@/components/CommonPageHeader';
import { ContactForm } from '@/components/ContactForm';
import { ScreenWidthLimitAndCentered } from '@/components/ScreenWidthLimitAndCentered';

import { ContactInfoSection } from './_comps/ContactInfoSection';
import mapImg from './_images/map.png';

import styles from './styles.module.scss';

export const ContactIndex = () => {
  const contactInfo = {
    phone: '400-901-83138',
    email: 'contact@easylook.com',
    address: '北京市朝阳区某某街道某某大厦某某层',
    zipCode: '100000',
    qrCode1: '/qr-code.jpg',
    qrCode1Label: '扫码联系我们',
    qrCode2: '/gzh.jpg',
    qrCode2Label: '关注公众号',
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
        title="联系我们"
        subTitle="Contact Us"
        bgImage="https://images.unsplash.com/photo-1526045612212-70caf35c14df?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
      />

      <ScreenWidthLimitAndCentered className={cx(styles['contact-content'])}>
        <div className={cx(styles['content-layout'])}>
          {/* 左侧地图 */}
          <div className={cx(styles['map-section'])}>
            <div className={cx(styles['map-section-title'])}>公司位置</div>
            <img
              src={mapImg}
              alt="公司地图"
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
          在线留言
        </Divider>
        <ContactForm />
      </ScreenWidthLimitAndCentered>
    </div>
  );
};
