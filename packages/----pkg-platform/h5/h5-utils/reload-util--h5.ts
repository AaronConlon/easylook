import qs from 'qs';

import { getUrlPartOfBase, getUrlQuerys } from '----pkg-uni/uni-utils/url-util';

// 算是一种 软 soft reload hack

// export function softReload() {
//   const prevUrl = `${window.location.pathname}${window.location.search}`;
//   window.__ROUTER_NAVIGATE__('/empty');
//
//   setTimeout(() => window.__ROUTER_NAVIGATE__(prevUrl, { replace: true }), 10);
// }

export function hardReload(opts?: {
  url?: string;
  by?: 'service-worker-registration';
}) {
  const optsUrl = opts?.url || window.location.href;
  const urlPartOfBase = getUrlPartOfBase({ url: optsUrl });
  const urlQuerys = getUrlQuerys({ url: optsUrl });

  const urlQuerysStr = qs.stringify(
    {
      ...urlQuerys,
      // ⚠️ 是否是 APP 就是通过 url.includes 这个判断的一定要加上！
      // pwaapp: window.__IN_APP__ ? 1 : undefined,
      // pwa: window.__IN_APP__ ? undefined : 1,
      // channel: window.__IN_APP__ ? window.__APP_CHANNEL__ : undefined,
    },
    { addQueryPrefix: true },
  );

  const nextUrl = `${urlPartOfBase}${urlQuerysStr}`;

  console.log('hardReload() - nextUrl', nextUrl);

  // 然后处理 PWA
  window.location.href = nextUrl;
}
