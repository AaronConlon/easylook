import React, { useEffect } from 'react';
import { App as AntdApp, message as AntdMessage } from 'antd';

import { setUiMessage } from '__shared__/utils/message-util';

export const __JUST_FOR_setUiMessage__ = (props: { children: any }) => {
  const { message } = AntdApp.useApp();

  useEffect(() => {
    if (!message) return;

    // ingnore SSR
    setUiMessage(message);
  }, [message]);

  return props.children;
};

export const AppAntdMessageProvider = (props: {
  children: React.ReactNode;
}) => {
  const [, contextHolder] = AntdMessage.useMessage({
    // 这里的 options 无效，只认下面的 AntdApp
    // maxCount: 2,
    // duration: 1,
  });

  return (
    <AntdApp message={{ maxCount: 5, duration: 5 }}>
      <__JUST_FOR_setUiMessage__>
        {/* 必须在 AntdApp 下的另一个组件才能使用 useApp，所以独立出去  */}
        {props.children}
      </__JUST_FOR_setUiMessage__>

      {contextHolder}
    </AntdApp>
  );
};
