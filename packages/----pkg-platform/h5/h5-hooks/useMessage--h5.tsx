import { App as AntdApp } from 'antd';
import { useEffect } from 'react';

export const useMessage = () => {
  // return AntdApp.useApp();

  const { message, modal, notification } = AntdApp.useApp();

  useEffect(() => {
    //@ts-ignore
    if (!window.__ANTD_MESSAGE__) {
      //@ts-ignore
      window.__ANTD_MESSAGE__ = message;
    }
  }, []);

  return {
    message,
    modal,
    notification,
  };
};
