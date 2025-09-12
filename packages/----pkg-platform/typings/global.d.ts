import { IGlobalWindow } from '----pkg-uni/typings/global-window';

declare namespace NodeJS {
  interface Process {
    browser: boolean;
  }
}

declare global {
  interface Window extends IGlobalWindow {}
}
