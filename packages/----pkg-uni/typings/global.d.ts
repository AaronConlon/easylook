// global.d.ts（或任意你项目中已设置的 *.d.ts）
import { IGlobalWindow } from '----pkg-uni/typings/global-window';

declare global {
  interface Window extends IGlobalWindow {}
}

export {};
