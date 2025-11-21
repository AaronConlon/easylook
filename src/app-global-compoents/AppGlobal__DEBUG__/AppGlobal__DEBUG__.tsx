import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { useEffect, useState } from 'react';

import { use__DebugStore__ } from '@/stores/use__Debug__Store';

const ReactQueryDevtoolsProduction = React.lazy(() =>
  import('@tanstack/react-query-devtools/production').then((d) => ({
    default: d.ReactQueryDevtools,
  })),
);

export const AppGlobal__DEBUG__ = () => {
  // for PROD, in Chrome DevTools run toggleReactQueryDevtools();
  const [showReactQueryDevtools, setShowReactQueryDevtools] = useState(false);

  // forSTORE
  const debug$_IS_OPEN = use__DebugStore__((s) => s.debug$_IS_OPEN); // prettier-ignore
  // forSTORE

  useEffect(() => {
    // @ts-ignore
    window.toggleReactQueryDevtools = () =>
      setShowReactQueryDevtools((prev) => !prev);
  }, []);

  return debug$_IS_OPEN ? (
    <>
      {/* for DEV */}
      <ReactQueryDevtools initialIsOpen={false} />

      {/* for PROD */}
      {showReactQueryDevtools && (
        <React.Suspense fallback={null}>
          <ReactQueryDevtoolsProduction />
        </React.Suspense>
      )}
    </>
  ) : null;
};
