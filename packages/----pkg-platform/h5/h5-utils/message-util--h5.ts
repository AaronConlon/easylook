import type { MessageInstance, TypeOpen } from 'antd/es/message/interface';

export let appErrorMsg: TypeOpen;
export let appSuccessMsg: TypeOpen;

export const setAppMessage = (msgInst: MessageInstance) => {
  // appMessage = inst;
  appErrorMsg = msgInst.error;
  appSuccessMsg = msgInst.success;
};
