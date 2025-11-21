// Standard root route
import { createRootRoute } from '@tanstack/react-router';

import { MasterLayout } from '@/layouts/MasterLayout';

import { PageNotFoundIndex } from '@/page-components/404/PageNotFoundIndex';

export const Route = createRootRoute({
  component: () =>
    MasterLayout({
      showHeader: true,
      showFooter: true,
    }),
  notFoundComponent: (): any => <PageNotFoundIndex />,
});


// Root route with Context
// import { createRootRouteWithContext } from '@tanstack/react-router';
// import type { QueryClient } from '@tanstack/react-query';
//
// export interface MyRouterContext {
//   queryClient: QueryClient;
// }
// export const Route = createRootRouteWithContext<MyRouterContext>({});
