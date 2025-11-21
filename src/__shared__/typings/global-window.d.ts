import type { IEnvBuildInfo } from '__shared__/configs/build-config';

export interface IGlobalWindow {
  vConsole?: any;
  VConsole?: any;
  ga?: any;
  gtag?: any;
  toggleReactQueryDevtools?: any;
  __BUILDINFO__: IEnvBuildInfo;
  __HYXHYX_PAGE_JSON_DATA__: any;
  wx?: {
    ready?: any;
    config?: any;
    updateTimelineShareData?: any;
    updateAppMessageShareData?: any;
    onMenuShareAppMessage?: any;
  };
}
