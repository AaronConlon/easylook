import React from 'react';
import { Spin as AntdSpin } from 'antd';
import { Helmet } from 'react-helmet';
import { IntlProvider } from 'use-intl';
import { QueryClientProvider } from '@tanstack/react-query';
import { DndContext } from '@dnd-kit/core';

import { USpinLoading } from '----pkg-uni/uni-ui-components/USpinLoading';

import { useHtmlStore } from '----pkg-uni/uni-stores/useHtmlStore';
import { rqClient } from '----pkg-uni/uni-libs/rq-lib';

import { AppErrorBoundary } from '@/components/AppErrorBoundary';
import { AppGlobal__DEBUG__ } from '@/components/AppGlobal__DEBUG__';
import { AppGlobalMasterRouter } from '@/components/AppGlobalMasterRouter';

import messages_zhCN from '@/locales/zh-CN.json';

AntdSpin.setDefaultIndicator(<USpinLoading />);

export const App = () => {
  // forSTORE
  const html$_title = useHtmlStore((s) => s.html$_title); // prettier-ignore
  // forSTORE

  return (
    <AppErrorBoundary>
      <QueryClientProvider client={rqClient}>
        <DndContext>
          <Helmet>
            <title>{html$_title}</title>
          </Helmet>

          <IntlProvider
            messages={messages_zhCN}
            // messages={lang}
            locale=""
            // locale="zh-CN"
            // locale="en-US"
          >
            <AppGlobalMasterRouter />
          </IntlProvider>

          <AppGlobal__DEBUG__ />
        </DndContext>
      </QueryClientProvider>
    </AppErrorBoundary>
  );
};
