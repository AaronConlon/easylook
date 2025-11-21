import React from 'react';

import { buildConfig } from '__shared__/configs/build-config';

export const calcVersion = (opts?: {
  onlyString?: boolean;
  APP_VERSION?: string;
}) => {
  const APP_VERSION = opts?.APP_VERSION || buildConfig?.VERSION;

  if (opts?.onlyString) return `v${APP_VERSION}`;

  return <span>v{APP_VERSION}</span>;
};
