import { useWindowSize } from 'react-use';

import { SCREENS as S } from '----pkg-uni/uni-consts/css-const';

export const useScreenMedia = () => {
  const windowSize = useWindowSize();

  return {
    windowSize,
    screenMedia: {
      xs: windowSize.width < S.sm,
      sm: windowSize.width >= S.sm && windowSize.width < S.md,
      md: windowSize.width >= S.md && windowSize.width < S.lg,
      lg: windowSize.width >= S.lg && windowSize.width < S.xl,
      xl: windowSize.width >= S.xl && windowSize.width < S.xxl,
      xxl: windowSize.width >= S.xxl,
      //
      //
      '>xs': windowSize.width >= S.xsMin,
      '>sm': windowSize.width >= S.smMin,
      '>md': windowSize.width >= S.mdMin,
      '>lg': windowSize.width >= S.lgMin,
      '>xl': windowSize.width >= S.xlMin,
      '>xxl': windowSize.width >= S.xxlMin,
      //
      // ext
      isPc: windowSize.width >= S.mdMin,
    },
  };
};
