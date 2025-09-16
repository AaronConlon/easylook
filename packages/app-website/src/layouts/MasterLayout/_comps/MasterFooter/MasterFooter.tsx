import React from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { ScreenMediaWidthCentered } from '@/components/ScreenMediaWidthCentered';
import { WechatContact } from '@/components/WechatContact';

import { MASTER_ROUTER_PATHS } from '@/consts/master-router-paths';

import xiaohongshu from './_images/xiaohongshu.svg';
import douyin from './_images/douyin.svg';
import logo from './_images/logo.svg';

import styles from './styles.module.scss';

interface IProps extends IUiCompBaseProps {}

export const MasterFooter = (props: IProps) => {
  const { className } = props;

  const productLinks = [
    { label: '产品功能', href: MASTER_ROUTER_PATHS['/features'] },
    { label: '价格方案', href: MASTER_ROUTER_PATHS['/pricing'] },
    { label: '品牌产品', href: MASTER_ROUTER_PATHS['/brand'] },
    { label: '更新日志', href: MASTER_ROUTER_PATHS['/changelog'] },
  ];

  const resourceLinks = [
    { label: '产品文档', href: MASTER_ROUTER_PATHS['/documentation'] },
    { label: '使用教程', href: MASTER_ROUTER_PATHS['/tutorials'] },
    { label: '技术博客', href: MASTER_ROUTER_PATHS['/blog'] },
    { label: '客户支持', href: MASTER_ROUTER_PATHS['/support'] },
  ];

  const companyLinks = [
    { label: '关于我们', href: MASTER_ROUTER_PATHS['/about'] },
    { label: '招聘信息', href: MASTER_ROUTER_PATHS['/recruit'] },
    { label: '联系我们', href: MASTER_ROUTER_PATHS['/contact'] },
    { label: '合作伙伴', href: MASTER_ROUTER_PATHS['/partners'] },
  ];

  const legalLinks = [
    { label: '隐私政策', href: MASTER_ROUTER_PATHS['/privacy'] },
    { label: '服务条款', href: MASTER_ROUTER_PATHS['/terms'] },
    { label: 'Cookie设置', href: MASTER_ROUTER_PATHS['/cookies'] },
  ];

  const socialLinks = [
    {
      label: '小红书',
      href: 'https://www.xiaohongshu.com/',
      icon: 'xiaohongshu',
    },
    { label: 'Douyin', href: 'https://www.douyin.com/', icon: 'douyin' },
  ];

  const companyInfo = {
    name: '上海惟爱医疗科技有限公司',
    phone: '400-901-8138',
    address: '上海市普陀区交通路 4771 号李子园大厦 1308 室',
    icp: '沪ICP备2023018740号-3',
    description:
      '我们致力于提供高品质、专业化的视功能产品，加速视健康为全民带来优质的美好生活！作为近视防控的最佳“伴侣”，视立优与近视防控产品的结合与联合使用能够进一步提升近视防控效果。',
  };

  const wechatUrl =
    'https://www.easylook.com.cn/wp-content/uploads/2025/01/qrcode_for_gh_4fa8321d06c4_1280-1.jpg';

  return (
    <footer
      className={cx(
        styles['comp-wrapper'],
        className,
        'g-uni-comp--MasterFooter',
      )}
    >
      <ScreenMediaWidthCentered>
        <div className={cx(styles['footer-content'])}>
          {/* 左侧：品牌介绍和社交媒体 */}
          <div className={cx(styles['footer-left'])}>
            <div className={cx(styles['brand-section'])}>
              <div className={cx(styles['brand-logo'])}>
                <img src={logo} alt="logo" />
              </div>
              <p className={cx(styles['brand-description'])}>
                {companyInfo.description}
              </p>
            </div>

            <div className={cx(styles['social-section'])}>
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={cx(styles['social-link'])}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon === 'xiaohongshu' && (
                    <span>
                      <img src={xiaohongshu} alt="xiaohongshu" />
                    </span>
                  )}
                  {link.icon === 'douyin' && (
                    <span>
                      <img src={douyin} alt="douyin" />
                    </span>
                  )}
                </a>
              ))}
              {/* 微信公众号 */}
              <WechatContact
                qrCodeUrl={wechatUrl}
                title={`扫码关注"视立优"`}
                description="获取使用教程"
              />
            </div>
          </div>

          {/* 右侧：导航链接 */}
          <div className={cx(styles['footer-right'])}>
            <div className={cx(styles['links-section'])}>
              <div className={cx(styles['link-group'])}>
                <h3 className={cx(styles['link-group-title'])}>产品</h3>
                {productLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={cx(styles['footer-link'])}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className={cx(styles['link-group'])}>
                <h3 className={cx(styles['link-group-title'])}>资源</h3>
                {resourceLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={cx(styles['footer-link'])}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className={cx(styles['link-group'])}>
                <h3 className={cx(styles['link-group-title'])}>公司</h3>
                {companyLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={cx(styles['footer-link'])}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 底部版权和法律信息 */}
        <div className={cx(styles['footer-bottom'])}>
          <div className={cx(styles['copyright'])}>
            <span>© 2025 {companyInfo.name}. 保留所有权利.</span>
            <span className={cx(styles['icp-info'])}>{companyInfo.icp}</span>
          </div>

          <div className={cx(styles['legal-links'])}>
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={cx(styles['legal-link'])}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </ScreenMediaWidthCentered>
    </footer>
  );
};
