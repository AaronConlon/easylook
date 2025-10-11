import { Divider } from 'antd';
import { RiMessageLine } from 'react-icons/ri';

import { cx } from '----pkg-platform/h5/h5-utils/cx-util--h5';

import { ContactForm } from '@/components/ContactForm';
import { ScreenMediaWidthCentered } from '@/components/ScreenMediaWidthCentered';
import { ScrollBgBar } from '@/components/ScrollBgBar';

import { ContactInfoSection } from './_comps/ContactInfoSection';

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
      <ScrollBgBar
        title="联系我们"
        subtitle="欢迎与我们联系，了解更多关于视立优的信息"
        backgroundText={
          'We are committed to providing high-quality and professional '
          // 'visual function products to accelerate visual health and bring a better life to all!'
        }
      />

      <ScreenMediaWidthCentered className={cx(styles['contact-content'])}>
        <div className={cx(styles['content-layout'])}>
          {/* 左侧地图 */}
          <div className={cx(styles['map-section'])}>
            <img
              src="https://img3.airdoc.com/staticResources/website/static/map_bj_1.png"
              alt="公司地图"
              className={cx(styles['map-image'])}
            />
          </div>

          {/* 右侧联系信息 */}
          <ContactInfoSection contactInfo={contactInfo} />
        </div>
      </ScreenMediaWidthCentered>

      <ScreenMediaWidthCentered className={cx(styles['form-section'])}>
        <Divider>
          <RiMessageLine
            style={{ marginRight: 8, position: 'relative', top: 2 }}
          />
          信息反馈
        </Divider>
        <ContactForm />
      </ScreenMediaWidthCentered>
    </div>
  );
};
