import { App as AntdApp } from 'antd';
import { useEffect } from 'react';

import { setAppMessage } from '----pkg-uni/uni-utils/message-util';

export const AppGlobalAntdFn = () => {
  const { message } = AntdApp.useApp();

  useEffect(() => {
    setAppMessage(message);
  }, [message]);

  return null;
};
