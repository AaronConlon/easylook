// @ts-ignore
import { getBuildInfo } from 'gen-buildinfo-webpack-plugin';
//

export const buildInfo = getBuildInfo({
  package: require('../../package.json'),
});
