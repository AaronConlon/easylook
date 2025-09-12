import React from 'react';

import { buildConfig } from '----pkg-uni/uni-configs/build-config';

export const calcVersion = (opts?: {
  onlyString?: boolean;
  APP_VERSION?: string;
}) => {
  const APP_VERSION = opts?.APP_VERSION || buildConfig?.VERSION;

  if (opts?.onlyString) return `v${APP_VERSION}`;

  return <span>v{APP_VERSION}</span>;
};
