import { create } from 'zustand';
import { combine, devtools } from 'zustand/middleware';

const INIT_STATE = {
  html$_title: '', // 默认 '' 就是 Auto
  html$_loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong: '', // 用于测试 eslint max-len
};

//
//

const HtmlStore = combine(INIT_STATE, (set, get) => ({
  html$_setTitle: (v?: string) => {
    set(() => ({ html$_title: v }));
  },
}));

//
//

export const useHtmlStore = create(
  devtools(HtmlStore, {
    name: 'HtmlStore',
  }),
);
