import {
  createRootRouteWithContext,
  createRoute,
  createRouter,
  NotFoundRoute,
  RouterProvider,
} from '@tanstack/react-router';

import { UView } from '----pkg-uni/uni-ui-components/UView';
import { UText } from '----pkg-uni/uni-ui-components/UText';
import { USmartLink } from '----pkg-uni/uni-ui-components/USmartLink';

import { AboutIndex } from '----pkg-uni/uni-page-components/about/AboutIndex';
import { URL_PATHS_CONST } from '----pkg-uni/uni-routers/uni-router';
import { MyIndex } from '----pkg-uni/uni-page-components/my/MyIndex';
import { TestAnyIndex } from '----pkg-uni/uni-page-components/__test__/TestAnyIndex';
import { TestUniCompIndex } from '----pkg-uni/uni-page-components/__test__/TestUniCompIndex';

import { MasterLayout } from '@/layouts/MasterLayout';
import { HomeIndex } from '@/page-components/home/HomeIndex';
import { XyzIndex } from '@/page-components/xyz/XyzIndex';
import { PageNotFoundIndex } from '@/page-components/404/PageNotFoundIndex';

const rootRoute = createRootRouteWithContext<{}>()({
  component: MasterLayout,
  notFoundComponent: (): any => {
    // @ts-ignore
    return (
      <UView>
        <UText>Not Found Component</UText>
        <USmartLink to={URL_PATHS_CONST['/'].name}>To Home</USmartLink>
      </UView>
    );
  },
});

// const routerMapping = [
//   // { path: URL_PATHS_CONST['/'].name, component: HomeIndex },
//   { path: URL_PATHS_CONST['/'].name, component: HomeIndex },
//   { path: URL_PATHS_CONST['/about'].name, component: AboutIndex },
//   { path: URL_PATHS_CONST['/my'].name, component: MyIndex },
//   //
//   { path: URL_PATHS_CONST['/test/any'].name, component: TestAnyIndex },
//   { path: URL_PATHS_CONST['/test/uni-comp'].name, component: TestUniCompIndex },
// ];

// const langP = '';

// 旧网站
// /post/1
// /$module/$id
//
// /-$lang/$module/$id
//
// lang: post
// $module: 1
// $id: null

// 旧网站
// /post/1

const langP = '/{-$lang}';

const routerMapping = [
  // { path: URL_PATHS_CONST['/'].name, component: HomeIndex },
  // { path: '/{$lang}', component: HomeIndex },
  // { path: '/', component: HomeIndex },
  // { path: '/my', component: MyIndex },
  // { path: '/xyz/{-$lang}/{$id}', component: XyzIndex },
  { path: `${langP}/xyz/{$id}`, component: XyzIndex },
  { path: `${langP}/about`, component: AboutIndex },
  { path: `${langP}}`, component: HomeIndex },
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

  // defaultNotFoundComponent: PageNotFoundIndex,
  // history: hashHistory,
  // defaultPreload: 'intent',
  // defaultPreloadStaleTime: 0,
});

export const AppGlobalStackRouter = () => {
  return <RouterProvider router={router} />;
};
