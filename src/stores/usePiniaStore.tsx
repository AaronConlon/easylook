import { create } from 'zustand';
import { combine, devtools } from 'zustand/middleware';

const INIT_STATE = {
  aaa: 'aaa',
  bbb: 'bbb',
};

const PiniaStore = combine(INIT_STATE, (set, get) => ({
  actions: {
    set_aaa: () => {
      console.log(111);
    },
    setBbb: () => {
      console.log(33);
    },
  },
}));

export const usePiniaStore = create(
  devtools(PiniaStore, {
    name: 'PiniaStore',
  }),
);
