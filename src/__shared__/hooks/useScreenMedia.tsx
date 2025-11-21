import { useWindowSize } from 'react-use';

export const useScreenMedia = (opts: {
  screens: { [key: string]: number };
}) => {
  const windowSize = useWindowSize();

  const S = opts.screens;

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
