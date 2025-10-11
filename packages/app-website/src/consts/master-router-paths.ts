// 假如启用 i18n 需要加入这个 params
// const LANG_PREFIX = '/{-$lang}';

const LANG_PREFIX = '';

export const MASTER_ROUTER_PATHS = {
  '/': `${LANG_PREFIX}/`,
  // about us
  '/about/company': `${LANG_PREFIX}/about/company`, // 公司介绍
  '/about/story': `${LANG_PREFIX}/about/story`, // 发展历程
  '/about/partners': `${LANG_PREFIX}/about/partners`, // 合作伙伴
  '/about/honor': `${LANG_PREFIX}/about/honor`, // 公司荣誉
  //
  '/product-1': `${LANG_PREFIX}/product-1`, // 视觉训练套盒
  '/product-2': `${LANG_PREFIX}/product-2`, // 眼视光训练器
  //
  '/contact': `${LANG_PREFIX}/contact`, // 联系我们
  '/cooperation': `${LANG_PREFIX}/cooperation`, // 合作加盟

  //
  // 产品相关路径
  '/features': `${LANG_PREFIX}/features`,
  '/pricing': `${LANG_PREFIX}/pricing`,
  '/integrations': `${LANG_PREFIX}/integrations`,
  '/changelog': `${LANG_PREFIX}/changelog`,
  //
  // 法律相关路径
  '/privacy': `${LANG_PREFIX}/privacy`,
  '/terms': `${LANG_PREFIX}/terms`,
  '/cookies': `${LANG_PREFIX}/cookies`,

  // 眼界百科
  '/encyclopedia': `${LANG_PREFIX}/encyclopedia`,
};

export type IMenuItem = {
  label?: React.ReactNode; // '首页',
  path?: string;
  children?: IMenuItem[];
};

export const MASTER_HEADER_MENUS: IMenuItem[] = [
  {
    label: '首页',
    path: MASTER_ROUTER_PATHS['/'],
  },
  {
    label: '产品介绍',
    path: MASTER_ROUTER_PATHS['/product-1'],
    children: [
      {
        path: MASTER_ROUTER_PATHS['/product-1'],
        label: '视觉训练套盒',
      },
      {
        path: MASTER_ROUTER_PATHS['/product-2'],
        label: '眼视光训练器',
      },
    ],
  },
  {
    path: MASTER_ROUTER_PATHS['/encyclopedia'],
    label: '眼界百科',
  },
  {
    path: MASTER_ROUTER_PATHS['/about/company'],
    label: '关于我们',
    children: [
      {
        path: MASTER_ROUTER_PATHS['/about/company'],
        label: '公司介绍',
      },
      {
        path: MASTER_ROUTER_PATHS['/about/story'],
        label: '发展历程',
      },
      {
        path: MASTER_ROUTER_PATHS['/about/partners'],
        label: '合作伙伴',
      },
      {
        path: MASTER_ROUTER_PATHS['/about/honor'],
        label: '公司荣誉',
      },
    ],
  },
  {
    path: MASTER_ROUTER_PATHS['/cooperation'],
    label: '合作加盟',
  },
  {
    path: MASTER_ROUTER_PATHS['/contact'],
    label: '联系我们',
  },
];
