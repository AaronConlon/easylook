import { create } from 'zustand';
import { combine, devtools } from 'zustand/middleware';

const INIT_STATE = {
  // 默认 load MOCK JSOM
  page$_pageItem: null as any,
};

const PageStore = combine(INIT_STATE, (set, get) => ({}));

export const usePageStore = create(
  devtools(PageStore, {
    name: 'PageStore',
  }),
);
