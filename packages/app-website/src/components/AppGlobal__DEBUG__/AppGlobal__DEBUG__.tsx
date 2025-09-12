import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { useEffect, useState } from 'react';

import { useAppStore } from '----pkg-uni/uni-stores/useAppStore';

const ReactQueryDevtoolsProduction = React.lazy(() =>
  import('@tanstack/react-query-devtools/production').then((d) => ({
    default: d.ReactQueryDevtools,
  })),
);

export const AppGlobal__DEBUG__ = () => {
  // for PROD, in Chrome DevTools run toggleReactQueryDevtools();
  const [showReactQueryDevtools, setShowReactQueryDevtools] = useState(false);

  // forSTORE
  const app$__IS_DEBUG_MODE__ = useAppStore((s) => s.app$__IS_DEBUG_MODE__); // prettier-ignore
  // forSTORE

  useEffect(() => {
    // @ts-ignore
    window.toggleReactQueryDevtools = () =>
      setShowReactQueryDevtools((prev) => !prev);
  }, []);

  return app$__IS_DEBUG_MODE__ ? (
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
