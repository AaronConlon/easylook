import React, { useEffect } from 'react';
import { Outlet, useParams } from '@tanstack/react-router';
import { NuqsAdapter } from 'nuqs/adapters/tanstack-router';

import { DebugReactQueryDevtools } from '----pkg-platform/h5/h5-components/__Debug__/DebugReactQueryDevtools--h5';

import { DebugBarButton } from '----pkg-uni/uni-components/DebugBarButton';
import { DebugCssMediaLabel } from '----pkg-uni/uni-components/DebugCssMediaLabel';
import { use__DebugStore__ } from '----pkg-uni/uni-stores/use__Debug__Store';

import { AppGlobalAntdFn } from '@/components/AppGlobalAntdFn';
import { AppGlobalEvent } from '@/components/AppGlobalEvent';
import { AppGlobalFetch } from '@/components/AppGlobalFetch';
import { AppGlobalAntdConfig } from '@/components/AppGlobalAntdConfig';

import { MasterHeader } from '@/layouts/MasterLayout/_comps/MasterHeader';

export const MasterLayout = () => {
  // forSTORE
  const debug$_IS_OPEN = use__DebugStore__((s) => s.debug$_IS_OPEN);
  // forSTORE

  useEffect(() => {}, []);

  const params = useParams({ strict: false });

  console.log(444444444444, params);

  return (
    <AppGlobalAntdConfig>
      <AppGlobalAntdFn />
      <AppGlobalEvent />
      <AppGlobalFetch />

      <MasterHeader />

      <NuqsAdapter>
        <Outlet />
      </NuqsAdapter>

      {debug$_IS_OPEN ? (
        <>
          <DebugBarButton />
          <DebugCssMediaLabel />
          <DebugReactQueryDevtools />
        </>
      ) : null}
    </AppGlobalAntdConfig>
  );
};
