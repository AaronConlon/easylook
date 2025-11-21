import { StrictMode } from 'react';

import { AppMasterRouterProvider } from '@/providers/AppMasterRouterProvider';
import { AppErrorBoundaryProvider } from '@/providers/AppErrorBoundaryProvider';
import { AppAntdConfigProvider } from '@/providers/AppAntdConfigProvider';
import { AppAntdMessageProvider } from '@/providers/AppAntdMessageProvider';
import { AppQueryClientProvider } from '@/providers/AppQueryClientProvider';

import { AppGlobal__DEBUG__ } from '@/app-global-compoents/AppGlobal__DEBUG__';
import { AppGlobalHelmet } from '@/app-global-compoents/AppGlobalHelmet';
import { AppGlobalEvent } from '@/app-global-compoents/AppGlobalEvent';
import { AppGlobalFetch } from '@/app-global-compoents/AppGlobalFetch';

export const App = () => {
  return (
    // <StrictMode>
    <AppErrorBoundaryProvider>
      <AppAntdConfigProvider>
        <AppAntdMessageProvider>
          <AppQueryClientProvider>
            <AppGlobalHelmet />
            <AppGlobalEvent />
            <AppGlobalFetch />

            <AppMasterRouterProvider />

            <AppGlobal__DEBUG__ />
          </AppQueryClientProvider>
        </AppAntdMessageProvider>
      </AppAntdConfigProvider>
    </AppErrorBoundaryProvider>
    // </StrictMode>
  );
};
