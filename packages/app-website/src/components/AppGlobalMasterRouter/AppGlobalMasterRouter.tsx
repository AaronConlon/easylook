import {
  createRootRouteWithContext,
  createRoute,
  createRouter,
  RouterProvider,
} from '@tanstack/react-router';

import { UView } from '----pkg-uni/uni-ui-components/UView';
import { UText } from '----pkg-uni/uni-ui-components/UText';
import { USmartLink } from '----pkg-uni/uni-ui-components/USmartLink';

import { AboutIndex } from '----pkg-uni/uni-page-components/about/AboutIndex';

import { MasterLayout } from '@/layouts/MasterLayout';
import { HomeIndex } from '@/page-components/home/HomeIndex';
import { MASTER_ROUTER_PATHS } from '@/consts/master-router-paths';

const rootRoute = createRootRouteWithContext<{}>()({
  component: MasterLayout,
  notFoundComponent: (): any => {
    // @ts-ignore
    return (
      <UView>
        <UText>Not Found Component</UText>
        <USmartLink to={MASTER_ROUTER_PATHS['/']}>To Home</USmartLink>
      </UView>
    );
  },
});

const routerMapping = [
  { path: MASTER_ROUTER_PATHS['/about'], component: AboutIndex },
  { path: MASTER_ROUTER_PATHS['/'], component: HomeIndex },
  //
  //
  // { path: '/test/any', component: TestAnyIndex },
  // { path: '/{-$lang}/about', component: AboutIndex },
  // { path: '/*', component: PageNotFoundIndex },
  // { path: '/test/uni-comp', component: TestUniCompIndex },
];

export const routeTree = rootRoute.addChildren(
  routerMapping.map((r) =>
    createRoute({
      getParentRoute: () => rootRoute,
      path: r.path,
      component: r.component,
    }),
  ),
);

// routeTree.addChildren([
//   new NotFoundRoute({
//     getParentRoute: () => rootRoute,
//     component: PageNotFoundIndex,
//   }),
// ]);

// Set up a Router instance
const router = createRouter({
  routeTree,
  scrollRestoration: true,
});

export const AppGlobalMasterRouter = () => {
  return <RouterProvider router={router} />;
};
