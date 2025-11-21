// ⚠️ 如果对此处文件有修改，请执行 yarn gencss

// antd
// {
//   xs: '480px',
//   sm: '576px',
//   md: '768px',
//   lg: '992px',
//   xl: '1200px',
//   xxl: '1600px',
// }
export const STYLE_MEDIA_CONST = {
  'screen-xs': 480,
  'screen-sm': 576,
  'screen-md': 768,
  'screen-lg': 992,
  'screen-xl': 1200,
  'screen-xxl': 999999999, // Drop
};

const xs = STYLE_MEDIA_CONST['screen-xs']; // iPhone
const sm = STYLE_MEDIA_CONST['screen-sm']; // iPad P
const md = STYLE_MEDIA_CONST['screen-md']; // iPad L
const lg = STYLE_MEDIA_CONST['screen-lg']; // PC
const xl = STYLE_MEDIA_CONST['screen-xl']; // Wide
const xxl = STYLE_MEDIA_CONST['screen-xxl']; // HD

export const STYLE_SCREENS_CONST = {
  xs,
  xsMin: xs,
  xsMax: sm - 1,
  //
  sm,
  smMin: sm,
  smMax: md - 1,
  //
  md,
  mdMin: md,
  mdMax: lg - 1,
  //
  lg,
  lgMin: lg,
  lgMax: xl - 1,
  //
  xl,
  xlMin: xl,
  xlMax: xxl - 1,
  //
  xxl,
  xxlMin: xxl,
};
