import React, { useState } from 'react';
import { Spin as AntdSpin } from 'antd';
import { Helmet } from 'react-helmet';
import { IntlProvider } from 'use-intl';
import { QueryClientProvider } from '@tanstack/react-query';
import { DndContext } from '@dnd-kit/core';

import { UButton } from '----pkg-platform/h5/h5-ui-components/UButton--h5';

import { USpinLoading } from '----pkg-uni/uni-ui-components/USpinLoading';

import { useHtmlStore } from '----pkg-uni/uni-stores/useHtmlStore';
import { rqClient } from '----pkg-uni/uni-libs/rq-lib';

import { AppErrorBoundary } from '@/components/AppErrorBoundary';
import { AppGlobal__DEBUG__ } from '@/components/AppGlobal__DEBUG__';
import { AppGlobalStackRouter } from '@/components/AppGlobalStackRouter';

import messages_zhCN from '@/locales/zh-CN.json';
import messages_enUS from '@/locales/en-US.json';

console.log('messages_zhCN', messages_zhCN);

AntdSpin.setDefaultIndicator(<USpinLoading />);

export const App = () => {
  // forSTORE
  const html$_title = useHtmlStore((s) => s.html$_title); // prettier-ignore
  // forSTORE

  const [lang, setLang] = useState(messages_enUS);

  return (
    <AppErrorBoundary>
      <QueryClientProvider client={rqClient}>
        <DndContext>
          <Helmet>
            <title>{html$_title}</title>
          </Helmet>

          <div>
            <UButton
              onClick={() => {
                setLang(messages_zhCN);
              }}
            >
              messages_zhCN
            </UButton>

            <UButton
              onClick={() => {
                setLang(messages_enUS);
              }}
            >
              messages_enUS
            </UButton>
          </div>

          <IntlProvider
            // messages={messages_zhCN}
            messages={lang}
            locale=""
            // locale="zh-CN"
            // locale="en-US"
          >
            <AppGlobalStackRouter />
          </IntlProvider>

          <AppGlobal__DEBUG__ />
        </DndContext>
      </QueryClientProvider>
    </AppErrorBoundary>
  );
};
