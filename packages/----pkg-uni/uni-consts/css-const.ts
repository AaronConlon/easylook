import { UNI_STYLE_CSS_VARS_ANTD_MEIDA } from '----pkg-uni/uni-styles/uni-style-antd-media/__raw__uni-style-css-vars-antd-media';

// export const CSS_VARS = {
//   '--app-body-class-name-prefix': 'g-body-',
//   '--app-page-class-name-prefix': 'g-page-',
//   '--app-theme-dark': 'theme-dark',
// };

const xs = UNI_STYLE_CSS_VARS_ANTD_MEIDA['screen-xs']; // iPhone
const sm = UNI_STYLE_CSS_VARS_ANTD_MEIDA['screen-sm']; // iPad P
const md = UNI_STYLE_CSS_VARS_ANTD_MEIDA['screen-md']; // iPad L
const lg = UNI_STYLE_CSS_VARS_ANTD_MEIDA['screen-lg']; // PC
const xl = UNI_STYLE_CSS_VARS_ANTD_MEIDA['screen-xl']; // Wide
const xxl = UNI_STYLE_CSS_VARS_ANTD_MEIDA['screen-xxl']; // HD

export const SCREENS = {
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

// console.log('SCREENS', SCREENS);
