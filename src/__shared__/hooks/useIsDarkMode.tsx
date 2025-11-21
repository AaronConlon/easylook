import { appConfig } from '__shared__/configs/app-config';
import { useIsSysDarkMode } from '__shared__/hooks/useIsSysDarkMode';

export function useIsDarkMode(props: { useThemeStore: any }) {
  // forSTORE
  const theme$_isDarkMode = props.useThemeStore(
    (s: any) => s.theme$_isDarkMode,
  );
  const theme$_appTheme = props.useThemeStore((s: any) => s.theme$_appTheme);
  // forSTORE

  // 默认不开启暗色模式
  let isDarkMode = false;

  const { isSysDarkMode } = useIsSysDarkMode();

  // 只有开启了，才变换
  if (!appConfig.ENABLE_DARK_THEME || appConfig.ENABLE_DARK_THEME !== 'false') {
    // 看主题
    isDarkMode = theme$_appTheme
      ? // 如果有选择过，就按 theme 走
        theme$_isDarkMode
      : // 不然按 sys 走
        isSysDarkMode;
  }

  return {
    isDarkMode,
  };
}
