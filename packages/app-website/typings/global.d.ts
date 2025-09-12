import type messages_zhCN from '@/locales/zh-CN.json';
import { IGlobalWindow } from '----pkg-platform/typings/window-type';


declare module 'use-intl' {
  interface AppConfig {
    Messages: typeof messages_zhCN;
  }
}


declare global {
  interface Window extends IGlobalWindow {
  }
}
