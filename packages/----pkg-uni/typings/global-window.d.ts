import { IEnvBuildInfo } from '----pkg-uni/uni-configs/build-config';

export interface IGlobalWindow {
  vConsole?: any;
  VConsole?: any;
  ga?: any;
  gtag?: any;
  toggleReactQueryDevtools?: any;
  __BUILDINFO__: IEnvBuildInfo;
}
