import { create } from 'zustand';
import { combine, devtools } from 'zustand/middleware';

const INIT_STATE = {
  app$____TEST_APP_RENDERING____: 666,
  app$____TEST_APP_NUM____: 777,
};

const AppStore = combine(INIT_STATE, (set, get) => ({
  app$_set_____TEST_APP_RENDERING_add_1____: () => {
    set(() => ({
      app$____TEST_APP_RENDERING____: get().app$____TEST_APP_RENDERING____ + 1,
    }));
  },
  app$_set_____TEST_APP_NUM_add_1____: () => {
    set(() => ({
      app$____TEST_APP_NUM____: get().app$____TEST_APP_NUM____ + 1,
    }));
  },
}));

export const useAppStore = create(
  devtools(AppStore, {
    name: 'AppStore',
  }),
);
