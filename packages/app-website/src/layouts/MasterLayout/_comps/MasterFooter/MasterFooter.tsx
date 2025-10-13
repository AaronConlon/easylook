import { LuMail, LuMapPin, LuPhone } from 'react-icons/lu';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { AppLogo } from '@/components/AppLogo';

import gzhImg from '@/assets/images/gzh.jpg';
import wechatImg from '@/assets/images/qr-code.jpg';

import styles from './styles.module.scss';

interface IProps extends IUiCompBaseProps {}

export const MasterFooter = (props: IProps) => {
  const { className } = props;

  const quickLinks = [
    { label: '产品介绍', href: '/product-1' },
    { label: '眼界百科', href: '/encyclopedia' },
    { label: '合作加盟', href: '/cooperation' },
    { label: '关于我们', href: '/about/company' },
  ];

  const contactInfo = [
    {
      label: '400-901-83138',
      icon: <LuPhone />,
    },
    {
      label: 'easylook.business@weiaihealthcare.com',
      icon: <LuMail />,
    },
    {
      label: '上海市普陀区交通路 4711 号李子园大厦 1308 室',
      icon: <LuMapPin />,
    },
  ];

  const companyInfo = {
    name: '视立优',
    icp: '沪ICP备2023018740号-3',
    description: '专业的视力保护解决方案提供商，守护您的视界健康。',
  };
  return (
    <footer
      className={cx(
        styles['comp-wrapper'],
        className,
        'g-uni-comp--MasterFooter',
      )}
    >
      <div className={cx(styles['container'])}>
        <div className={cx(styles['footer-grid'])}>
          {/* 第一列：品牌信息 */}
          <div className={cx(styles['brand-section'])}>
            {/* <h3 className={cx(styles['brand-title'])}>{companyInfo.name}</h3> */}
            <AppLogo logoType="footer" className={styles['brand-logo']} />
            <p className={cx(styles['brand-description'])}>
              {companyInfo.description}
            </p>
          </div>

          {/* 第二列：快速链接 */}
          <div className={cx(styles['links-section'])}>
            <h4 className={cx(styles['links-title'])}>快速链接</h4>
            <ul className={cx(styles['links-list'])}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a className={cx(styles['footer-link'])} href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 第三列：联系方式 */}
          <div className={cx(styles['contact-section'])}>
            <h4 className={cx(styles['contact-title'])}>联系方式</h4>
            <ul className={cx(styles['contact-list'])}>
              {contactInfo.map((contact, index) => (
                <li key={index} className={cx(styles['contact-item'])}>
                  <span className={cx(styles['contact-icon'])}>
                    {contact.icon}
                  </span>
                  <span>{contact.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 第四列：关注我们 */}
          <div className={cx(styles['follow-section'])}>
            <h4 className={cx(styles['follow-title'])}>关注我们</h4>
            <div className={cx(styles['qr-container'])}>
              <img src={wechatImg} alt="微信二维码" />
              <img src={gzhImg} alt="公众号二维码" />
            </div>
          </div>
        </div>

        {/* 底部版权信息 */}
        <div className={cx(styles['footer-bottom'])}>
          <p className={cx(styles['copyright-text'])}>
            <span>© 2025 {companyInfo.name}. All rights reserved.</span>
            <span className={cx(styles['copyright-separator'])}>|</span>
            <span>{companyInfo.icp}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
