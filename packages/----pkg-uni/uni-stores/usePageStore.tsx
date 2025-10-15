import { create } from 'zustand';
import { combine, devtools } from 'zustand/middleware';

import { pageAboutData } from '----pkg-uni/__uni-mock__/page-about-mock';
import { pageHomeData } from '----pkg-uni/__uni-mock__/page-home-mock';
import { pageProductData } from '----pkg-uni/__uni-mock__/page-product-mock';
import { pageShareData } from '----pkg-uni/__uni-mock__/page-share-mock';

const INIT_STATE = {
  // 默认 load MOCK JSOM
  // page$_pageItem: null as any,
  page$_pageHasFetch: false,
  page$_pageItem: {
    home: pageHomeData,
    about: pageAboutData,
    product: pageProductData,
  },
  page$_share: pageShareData,
};

const PageStore = combine(INIT_STATE, (set, get) => ({}));

export const usePageStore = create(
  devtools(PageStore, {
    name: 'PageStore',
  }),
);


/*

 1. refresh-mock.js
    version: '0.0.33-mod'
    refresh-list: ['page-product-mock']
    
    usePageStore set page-product-mock ---> newData
    

*/

//
/*

page-home-mock.js
page-about-mock.js


build --> all-in-one-mock.js


http://a.com/all-in-one-mock.js


app.js ---> all-in-one-mock.js (build-in),

all-in-one-mock.js


ready -> fetc  http://a.com/all-in-one-mock.js

  faild -> not thing
  ok ----> mod PageStore



*/
