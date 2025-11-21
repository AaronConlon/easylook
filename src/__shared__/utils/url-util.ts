import qs from 'qs';

/**
 * 获取 URL ? 前面的部分
 *
 * /abc?id=1&p=2                      --> /abc
 * http://localhost:8010/abc?id=1&p=2 --> /abc
 */
export function getUrlPartOfBase(opts?: { url?: string }): string {
  const url = opts?.url || window.location.href;

  return url.split('?')?.[0];
}

/**
 * 获取 URL ? 后面的部分
 *
 * /abc?id=1&p=2                      --> id=1&p=2
 * http://localhost:8010/abc?id=1&p=2 --> id=1&p=2
 */
export function getUrlPartOfQuery(opts?: { url?: string }): string {
  const url = opts?.url || window.location.href;

  return url.split('?')?.[1];
}

type IGetUrlQuerysResult = { [key: string]: undefined | string };

/**
 * 获取 URL ? 后面的部分，并解析成 Object
 * /user?ordercode=001
 *        Url Params  | Url Query
 *
 * --> { ordercode: '001' }
 */ // /user?ordercode=001
//        Url Params  | Url Query
export function getUrlQuerys<T = IGetUrlQuerysResult>(opts?: {
  url?: string;
  transStringNumberToNumber?: boolean;
}): T {
  const url = opts?.url || window.location.href;
  const urlPartOfQuery = getUrlPartOfQuery({ url });

  if (!urlPartOfQuery) return {} as T;

  let urlQuerys = qs.parse(urlPartOfQuery, {
    ignoreQueryPrefix: true,
  }) as IGetUrlQuerysResult | T;

  if (opts?.transStringNumberToNumber) {
    // @ts-ignore
    urlQuerys = _.mapValues(urlQuerys, (v) => transStringNumberToNumber(v));
  }

  return urlQuerys as T;
}

export function openInNewTab(url?: string) {
  // 需要注意的是 url 很可能是空
  if (!url) return;

  const win = window.open(url, '_blank');
  win?.focus();
}
