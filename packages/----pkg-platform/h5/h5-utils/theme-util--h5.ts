//

import { THEME_CONST_DARK_CLASSNAME } from '----pkg-uni/uni-consts/theme-const';

/*
e.g.

injectStyle(`
  :root { --app-sample-background: yellow; }
  :root.theme-dark { --app-sample-background: red; }
`);
*/
export const injectStyleToDom = (styleString: string, id?: string) => {
  const style = document.createElement('style');
  style.textContent = styleString;
  style.id = id || 'injectStyle';
  document.head.append(style);
};

export const addDarkModeToDom = () => {
  // console.log('addDarkThemeToHtml');
  document.documentElement.classList.add(THEME_CONST_DARK_CLASSNAME);
};

export const removeDarkModeToDom = () => {
  // console.log('removeDarkThemeToHtml');
  document.documentElement.classList.remove(THEME_CONST_DARK_CLASSNAME);
};

//
//

//
//

export function getMetaThemeColor() {
  return document
    .querySelector(`meta[name="theme-color"]`)
    ?.getAttribute?.('content');
}
