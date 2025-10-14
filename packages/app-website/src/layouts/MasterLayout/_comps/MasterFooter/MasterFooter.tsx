import { LuMail, LuMapPin, LuPhone } from 'react-icons/lu';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { usePageStore } from '----pkg-uni/uni-stores/usePageStore';

import { AppLogo } from '@/components/AppLogo';

import styles from './styles.module.scss';

interface IProps extends IUiCompBaseProps {}

export const MasterFooter = (props: IProps) => {
  const { className } = props;

  const page$_share = usePageStore((s) => s.page$_share);
  const siteInfo = page$_share.site;
  const companyInfo = page$_share.company;

  const quickLinks = [
    { label: '产品介绍', href: '/product-1' },
    { label: '眼界百科', href: '/encyclopedia' },
    { label: '合作加盟', href: '/cooperation' },
    { label: '关于我们', href: '/about/company' },
  ];

  const contactInfo = [
    {
      label: siteInfo.phone,
      icon: <LuPhone />,
    },
    {
      label: siteInfo.email,
      icon: <LuMail />,
    },
    {
      label: siteInfo.address,
      icon: <LuMapPin />,
    },
  ];
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
              <img src={siteInfo.qrCode1} alt={siteInfo.qrCode1Label} />
              <img src={siteInfo.qrCode2} alt={siteInfo.qrCode2Label} />
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
