import { useEffect, useState } from 'react';

import { THEME_CONST_THEME_KEYS } from '__shared__/consts/theme-const';

const getSystemDark = () =>
  window.matchMedia?.(`(prefers-color-scheme: ${THEME_CONST_THEME_KEYS.DARK})`)
    .matches;

export function useIsSysDarkMode() {
  const [isSysDarkMode, setIsSysDarkMode] = useState<boolean>(getSystemDark());

  useEffect(() => {
    const media = window.matchMedia(
      `(prefers-color-scheme: ${THEME_CONST_THEME_KEYS.DARK})`,
    );

    const handleChange = (e: MediaQueryListEvent) => {
      setIsSysDarkMode(e.matches);
    };

    media.addEventListener('change', handleChange);

    return () => {
      media.removeEventListener('change', handleChange);
    };
  }, []);

  return { isSysDarkMode };
}
