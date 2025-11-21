// global.d.ts（或任意你项目中已设置的 *.d.ts）
import type { IGlobalWindow } from './global-window';

declare global {
  interface Window extends IGlobalWindow {
  }
}

export {};
