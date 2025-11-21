import React from 'react';
import { IntlProvider } from 'use-intl';

export const AppI18nProvider = (props: { children?: any }) => {
  return (
    <IntlProvider
      // messages={messages_zhCN}
      // messages={lang}
      // locale=""
      locale="zh-CN"
      // locale="en-US"
      // locale="fr-FR"
    >
      {props.children || null}
    </IntlProvider>
  );
};
