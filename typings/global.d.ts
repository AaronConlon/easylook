import type messages_zhCN from '@/locales/zh-CN.json';
import { IGlobalWindow } from '----pkg-uni/typings/global-window';
import {
  router
} from '@/providers/AppMasterRouterProvider/AppMasterRouterProvider';

declare module 'use-intl' {
  interface AppConfig {
    Messages: typeof messages_zhCN;
  }
}

declare global {
  interface Window extends IGlobalWindow {}
}



// 声明合并，把 router 注册到模块
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
