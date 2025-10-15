import { create } from 'zustand';
import { combine, devtools } from 'zustand/middleware';

import pageAboutData from '----pkg-uni/__uni-mock__/page-about-mock.json';
import pageHomeData from '----pkg-uni/__uni-mock__/page-home-mock.json';
import pageProductData from '----pkg-uni/__uni-mock__/page-product-mock.json';
import pageShareData from '----pkg-uni/__uni-mock__/page-share-mock.json';

const INIT_STATE = {
  // 默认 load MOCK JSOM
  // page$_pageItem: null as any,
  page$_pageItem: {
    home: pageHomeData,
    about: pageAboutData,
    product: pageProductData,
  },
  page$_share: pageShareData,
};

type IPageStore = typeof INIT_STATE;

const PageStore = combine(INIT_STATE, (set, get) => ({
  setPage$_pageItem_home: (v: IPageStore['page$_pageItem']['home']) => {
    set(() => ({
      page$_pageItem: {
        ...get().page$_pageItem,
        home: v,
      },
    }));
  },
  setPage$_pageItem_about: (v: IPageStore['page$_pageItem']['about']) => {
    set(() => ({
      page$_pageItem: { ...get().page$_pageItem, about: v },
    }));
  },
  setPage$_pageItem_product: (v: IPageStore['page$_pageItem']['product']) => {
    set(() => ({
      page$_pageItem: {
        ...get().page$_pageItem,
        product: v,
      },
    }));
  },
  setPage$_share: (v: IPageStore['page$_share']) => {
    // old data
    set(() => ({ page$_share: v }));
  },
}));

export const usePageStore = create(
  devtools(PageStore, {
    name: 'PageStore',
  }),
);

export type IPageAboutData = typeof pageAboutData;
export type IPageHomeData = typeof pageHomeData;
export type IPageProductData = typeof pageProductData;
export type IPageShareData = typeof pageShareData;
