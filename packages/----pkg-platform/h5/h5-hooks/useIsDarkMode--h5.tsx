import { useIsSysDarkMode } from '----pkg-uni/uni-hooks/useIsSysDarkMode';

import { useThemeStore } from '----pkg-uni/uni-stores/useThemeStore';

export function useIsDarkMode() {
  // forSTORE
  const theme$_isDarkMode = useThemeStore((s) => s.theme$_isDarkMode);
  const theme$_appTheme = useThemeStore((s) => s.theme$_appTheme);
  // forSTORE

  const { isSysDarkMode } = useIsSysDarkMode();

  return {
    isDarkMode:
      // 看主题
      theme$_appTheme
        ? // 如果有选择过，就按 theme 走
          theme$_isDarkMode
        : // 不然按 sys 走
          isSysDarkMode,
  };
}
