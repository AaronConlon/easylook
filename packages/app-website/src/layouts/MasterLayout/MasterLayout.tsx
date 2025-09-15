import React, { useEffect } from 'react';
import { Outlet, useParams } from '@tanstack/react-router';
import { NuqsAdapter } from 'nuqs/adapters/tanstack-router';

import { DebugReactQueryDevtools } from '----pkg-platform/h5/h5-components/__Debug__/DebugReactQueryDevtools--h5';
import { useScreenMedia } from '----pkg-platform/h5/h5-hooks/useScreenMedia--h5';

import { DebugBarButton } from '----pkg-uni/uni-components/DebugBarButton';
import { DebugCssMediaLabel } from '----pkg-uni/uni-components/DebugCssMediaLabel';
import { use__DebugStore__ } from '----pkg-uni/uni-stores/use__Debug__Store';

import { AppGlobalAntdFn } from '@/components/AppGlobalAntdFn';
import { AppGlobalEvent } from '@/components/AppGlobalEvent';
import { AppGlobalFetch } from '@/components/AppGlobalFetch';
import { AppGlobalAntdConfig } from '@/components/AppGlobalAntdConfig';

import { MasterHeaderPc } from '@/layouts/MasterLayout/_comps/MasterHeaderPc';
import { MasterFooter } from '@/layouts/MasterLayout/_comps/MasterFooter';
import { MasterHeaderMb } from '@/layouts/MasterLayout/_comps/MasterHeaderMb';

export const MasterLayout = () => {
  // forSTORE
  const debug$_IS_OPEN = use__DebugStore__((s) => s.debug$_IS_OPEN);
  // forSTORE

  useEffect(() => {}, []);

  const { screenMedia, windowSize } = useScreenMedia();

  // const params = useParams({ strict: false });

  return (
    <AppGlobalAntdConfig>
      <AppGlobalAntdFn />
      <AppGlobalEvent />
      <AppGlobalFetch />

      {screenMedia['>md'] ? <MasterHeaderPc /> : <MasterHeaderMb />}

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

      <MasterFooter />
    </AppGlobalAntdConfig>
  );
};
