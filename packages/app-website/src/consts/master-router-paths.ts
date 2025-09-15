// 假如启用 i18n 需要加入这个 params
// const LANG_PREFIX = '/{-$lang}';
import type { MenuProps } from 'antd';

const LANG_PREFIX = '';

export const MASTER_ROUTER_PATHS = {
  '/': `${LANG_PREFIX}/`,
  '/about': `${LANG_PREFIX}/about`,
  //
  '/news-weiai': `${LANG_PREFIX}/news-weiai`,
  '/news-kepu': `${LANG_PREFIX}/news-kepu`,
  '/news': `${LANG_PREFIX}/news`,
  //
  '/brand': `${LANG_PREFIX}/brand`,
  '/brand-easylook': `${LANG_PREFIX}/brand-easylook`,
  '/brand-weiai': `${LANG_PREFIX}/brand-weiai`,
  //
  '/contact': `${LANG_PREFIX}/contact`,
  '/service': `${LANG_PREFIX}/service`,
  '/story': `${LANG_PREFIX}/story`,
  '/honor': `${LANG_PREFIX}/honor`,
  '/recruit': `${LANG_PREFIX}/recruit`,
  //
  // 产品相关路径
  '/features': `${LANG_PREFIX}/features`,
  '/pricing': `${LANG_PREFIX}/pricing`,
  '/integrations': `${LANG_PREFIX}/integrations`,
  '/changelog': `${LANG_PREFIX}/changelog`,
  //
  // 资源相关路径
  '/documentation': `${LANG_PREFIX}/documentation`,
  '/tutorials': `${LANG_PREFIX}/tutorials`,
  '/blog': `${LANG_PREFIX}/blog`,
  '/support': `${LANG_PREFIX}/support`,
  //
  // 公司相关路径
  '/careers': `${LANG_PREFIX}/careers`,
  '/partners': `${LANG_PREFIX}/partners`,
  //
  // 法律相关路径
  '/privacy': `${LANG_PREFIX}/privacy`,
  '/terms': `${LANG_PREFIX}/terms`,
  '/cookies': `${LANG_PREFIX}/cookies`,
};

export type IMenuItem = {
  key?: string; // 'home',
  label?: React.ReactNode; // '首页',

  children?: IMenuItem[];
};

export const MASTER_HEADER_MENUS: IMenuItem[] = [
  {
    key: MASTER_ROUTER_PATHS['/'],
    label: '首页',
  },
  {
    key: MASTER_ROUTER_PATHS['/about'],
    label: '关于我们',
    children: [
      {
        key: MASTER_ROUTER_PATHS['/news-weiai'],
        label: '公司介绍',
      },
      {
        key: MASTER_ROUTER_PATHS['/news-kepu'],
        label: '发展历程',
      },
      {
        key: MASTER_ROUTER_PATHS['/news-kepu'],
        label: '合作伙伴',
      },
      {
        key: MASTER_ROUTER_PATHS['/news-kepu'],
        label: '公司荣誉',
      },
    ],
  },
  {
    key: MASTER_ROUTER_PATHS['/brand'],
    label: '品牌产品',
    children: [
      {
        key: MASTER_ROUTER_PATHS['/news-weiai'],
        label: '训练盒',
      },
      {
        key: MASTER_ROUTER_PATHS['/news-kepu'],
        label: '眼科训练仪',
      },
    ],
  },
  {
    key: MASTER_ROUTER_PATHS['/service'],
    label: '服务场景',
    children: [
      {
        key: MASTER_ROUTER_PATHS['/news-weiai'],
        label: '视力优医疗',
      },
      {
        key: MASTER_ROUTER_PATHS['/news-weiai'],
        label: '视力优健康',
      },
      {
        key: MASTER_ROUTER_PATHS['/news-weiai'],
        label: '视力优教育',
      },
    ],
  },
  {
    key: MASTER_ROUTER_PATHS['/story'],
    label: '公司动态',
    children: [
      {
        key: MASTER_ROUTER_PATHS['/news-weiai'],
        label: '公司新闻',
      },
      {
        key: MASTER_ROUTER_PATHS['/news-weiai'],
        label: '行业资讯',
      },
    ],
  },
  {
    key: MASTER_ROUTER_PATHS['/recruit'],
    label: '招贤纳士',
  },
  {
    key: MASTER_ROUTER_PATHS['/contact'],
    label: '联系我们',
  },
];
