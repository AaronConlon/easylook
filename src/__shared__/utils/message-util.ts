import type { MessageInstance } from 'antd/es/message/interface';

const noopFn: any = () => {};

export let uiMessage = {
  open: noopFn,
  info: noopFn,
  success: noopFn,
  error: noopFn,
  warning: noopFn,
  loading: noopFn,
};

export const setUiMessage = (msgInst: MessageInstance) => {
  uiMessage = msgInst;
};
