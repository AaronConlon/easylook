import type React from 'react';

interface IProps {
  children?: React.ReactNode | any;
}

export const AppGlobalFetch: React.FC<IProps> = (props) => {
  /*
   * once
   *
   * 1. __page-meta__.js (假如服务器没有这个，就失败，不影响)
   *      version: 3.3.3 检查 是不是和 app 一样。如果修改 3.3.3-mod 反正不一样就触发需要更新
   *
   *      refresh-list: ['page-about-mock.js']
   *                     axios -> get
   *                     set store
   *
   * cdn  xxx.com/mock/__page-meta__.js
   *                   page-about-mock.js
   *
   *
   *
   *
   *  */

  return props.children || null;
};
