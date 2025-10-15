import React from 'react';

import { buildConfig } from '----pkg-uni/uni-configs/build-config';

export const calcVersion = (opts?: { onlyString?: boolean; APP_VERSION?: string }) => {
  const APP_VERSION = opts?.APP_VERSION || buildConfig?.VERSION;

  if (opts?.onlyString) return `v${APP_VERSION}`;

  return <span>v{APP_VERSION}</span>;
};

/**
 * 比较版本号
 * @param v1 版本号 1
 * @param v2 版本号 2
 * @returns 1: v1 新，-1: v2 新，0: 相同
 */
export function compareVersion(v1: string, v2: string): number {
  const a1 = v1.split('.').map(Number);
  const a2 = v2.split('.').map(Number);
  const len = Math.max(a1.length, a2.length);

  for (let i = 0; i < len; i++) {
    const n1 = a1[i] || 0;
    const n2 = a2[i] || 0;
    if (n1 > n2) return 1; // v1 新
    if (n1 < n2) return -1; // v2 新
  }
  return 0; // 相同
}