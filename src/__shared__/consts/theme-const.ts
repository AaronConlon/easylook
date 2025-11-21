export const THEME_CONST_DARK_CLASSNAME = 'theme-dark';

export const THEME_CONST_THEME_KEYS = {
  DEFAULT: '',
  LIGHT: 'light',
  DARK: 'dark',
};

// => "" | "light" | "dark"
export type I_THEME_CONST_THEME_KEYS =
  (typeof THEME_CONST_THEME_KEYS)[keyof typeof THEME_CONST_THEME_KEYS];

export const THEME_CONST_THEME_LABELS = {
  [THEME_CONST_THEME_KEYS.DEFAULT]: '跟随系统',
  [THEME_CONST_THEME_KEYS.LIGHT]: '亮色',
  [THEME_CONST_THEME_KEYS.DARK]: '深色',
};

// PS，默认 '' 相当于 'theme-light'，只是不存在这个 用于 DOM（NOT keep state），
export const THEME_CONST_CLASS_NAMES = {
  CLASS_EMPTY: '',
  CLASS_DARK: 'theme-dark',
};

export const __THEME_CONST_FORCE_THEME_DARK__ = 'theme-dark';

export const THEME_CONST_SYS_THEME_KEYS = {
  DEFAULT: '',
  SYS_LIGHT: 'light',
  SYS_DARK: 'dark',
};

// =>  "light" | "dark"
export type I_THEME_CONST_SYS_THEME_KEYS =
  (typeof THEME_CONST_SYS_THEME_KEYS)[keyof typeof THEME_CONST_SYS_THEME_KEYS];

export const THEME_CONST_STATUS_BAR_STYLE = {
  BAR_STYLE_LIGHT: 'dark-content', // light 下显示 dark 黑色
  BAR_STYLE_DARK: 'light-content', // dark 下显示 light 白色
};

export const THEME_CONST_META_THEME_COLORS = {
  COLOR_LIGHT: '#ffffff',
  COLOR_DARK: '#000000',
};
