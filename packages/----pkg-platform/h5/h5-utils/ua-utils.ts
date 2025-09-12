import { SCREENS } from '----pkg-uni/uni-consts/css-const';

export const detectDeviceUA = () => {
  const ua = navigator.userAgent.toLowerCase();
  // console.log('detectDeviceUA() ua -', ua);

  const isWindowsPhone = /(windows phone)/.test(ua);
  const isSymbian = /(symbianos)/.test(ua) || isWindowsPhone;
  const isAndroid = /(android)/.test(ua);
  const isFireFox = /(firefox)/.test(ua);
  const isChrome = /(chrome|crios)/.test(ua);
  const isTablet =
    /(ipad|playbook)/.test(ua) ||
    (isAndroid && !/(mobile)/.test(ua)) ||
    (isFireFox && /(tablet)/.test(ua));
  const isIPhone = /(iphone)/.test(ua) && !isTablet;
  const isIPad = /(ipad)/.test(ua) && isTablet;
  const isIOS = /(iphone|ipad|ipod|ios)/.test(ua);
  const isMiuiBrowser = /(miuibrowser)/.test(ua);
  const isWeixin = /(micromessenger)/.test(ua);
  const isWeibo = /(weibo)/.test(ua);
  const isPc = !isIPhone && !isAndroid && !isSymbian;
  const isMobile = !isPc;

  return {
    userAgent: ua,
    // soft
    isChrome,
    isIOS,
    isAndroid,
    isMiuiBrowser,
    isWeixin,
    isWeibo,
    isPc,
    isTablet,
    isMobile,
    // hard
    isIPhone,
    isIPad,
  };
};

// --------------------------------------
const ipad = navigator.userAgent.match(/(ipad).*\s([\d_]+)/i);
const iphone = navigator.userAgent.match(/(iphone)\sos\s([\d_]+)/i);
const android = navigator.userAgent.match(/(android)\s([\d.]+)/i);

export const getOsVersion = (): string => {
  if (android) return android[2];
  if (iphone) return iphone[2].replace(/_/g, '.');
  if (ipad) return ipad[2].replace(/_/g, '.');

  return '';
};

export const getOsName = (): string => {
  if (android) return 'Android';
  if (iphone) return 'iOS';
  if (ipad) return 'iOS';

  return '';
};

// --------------------------------------

export function isWebview() {
  const useragent = navigator.userAgent;
  const rules = [
    'WebView',
    '(iPhone|iPod|iPad)(?!.*Safari/)',
    'Android.*(wv|.0.0.0)',
  ];
  const regex = new RegExp(`(${rules.join('|')})`, 'ig');

  return Boolean(useragent.match(regex));
}

const WebpImage = `data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=`;

// Source https://stackoverflow.com/questions/5573096/detecting-webp-support
export function isCanvasWebpSupported(): boolean {
  const elem = document.createElement('canvas');

  if (elem && elem?.getContext && elem?.getContext('2d')) {
    // was able or not to get WebP representation
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }

  // very old browser like IE 8, canvas not supported
  return false;
}

// Is this runtime able to support webp
export function isWebpImageSupported(): Promise<boolean> {
  // Some browsers (firefox) support rendering webp but not creating with canvas
  const img = new Image();
  const promise = new Promise<boolean>((resolve) => {
    img.onload = (): void => resolve(true);
    img.onerror = (): void => resolve(false);
  });

  img.src = WebpImage;
  return promise;
}

// Is WebP able to be rendered in this environment
// export function isSupportWebp(): Promise<boolean> {
//   // eslint-disable-next-line consistent-return
//   return new Promise((resolve) => {
//     if (isCanvasWebpSupported()) return resolve(true);
//     isWebpImageSupported().then(resolve);
//   });
// }

export const ua = detectDeviceUA();

//
// 不能自动播放 Video（< PC 电脑宽度 md 768）
export const canNotAutoPlayVideoMb =
  // 微信 + iOS
  (ua.isWeixin && !ua.isIOS) ||
  // 微博 + MB
  (window.innerWidth < SCREENS.md && ua.isWeibo);

//
// 不能自动播放 Video（> PC 电脑宽度 md 768）
export const canNotAutoPlayVideoPc =
  // 微信 + iOS
  (window.innerWidth > SCREENS.md && ua.isWeixin && !ua.isIOS) ||
  // 微博 + PC
  (window.innerWidth > SCREENS.md && ua.isWeibo);
