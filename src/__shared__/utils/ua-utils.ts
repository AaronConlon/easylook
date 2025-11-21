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

export const ua = detectDeviceUA();
