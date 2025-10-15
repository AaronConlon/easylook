import {
  createRootRouteWithContext,
  createRoute,
  createRouter,
  RouterProvider,
} from '@tanstack/react-router';

import { USmartLink } from '----pkg-uni/uni-ui-components/USmartLink';
import { UText } from '----pkg-uni/uni-ui-components/UText';
import { UView } from '----pkg-uni/uni-ui-components/UView';

import { TestAnyIndex } from '----pkg-uni/uni-page-components/__test__/TestAnyIndex';

import { MASTER_ROUTER_PATHS } from '@/consts/master-router-paths';
import { MasterLayout } from '@/layouts/MasterLayout';
import { AboutIndex } from '@/page-components/about/AboutIndex';
import { PartnersIndex } from '@/page-components/about/PartnersIndex';
import { ContactIndex } from '@/page-components/contact/ContactIndex';
import EncyclopediaIndex from '@/page-components/encyclopedia';
import { HomeIndex } from '@/page-components/home/HomeIndex';
import { Partners } from '@/page-components/home/HomeIndex/_comps';
import { HonorIndex } from '@/page-components/honor/HonorIndex';
import { Product1Index } from '@/page-components/product/product1';
import { Product2Index } from '@/page-components/product/product2';
import { StoryIndex } from '@/page-components/story/StoryIndex';

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
  // 首页
  { path: MASTER_ROUTER_PATHS['/'], component: HomeIndex },

  // product
  { path: MASTER_ROUTER_PATHS['/product-1'], component: Product1Index },
  { path: MASTER_ROUTER_PATHS['/product-2'], component: Product2Index },

  // encyclopedia
  { path: MASTER_ROUTER_PATHS['/encyclopedia'], component: EncyclopediaIndex },

  // about us
  { path: MASTER_ROUTER_PATHS['/about/company'], component: AboutIndex },
  { path: MASTER_ROUTER_PATHS['/about/story'], component: StoryIndex },
  { path: MASTER_ROUTER_PATHS['/about/partners'], component: Partners },
  { path: MASTER_ROUTER_PATHS['/about/honor'], component: HonorIndex },

  // cooperation
  { path: MASTER_ROUTER_PATHS['/cooperation'], component: PartnersIndex },

  // contact
  { path: MASTER_ROUTER_PATHS['/contact'], component: ContactIndex },
  { path: MASTER_ROUTER_PATHS['/test/any'], component: TestAnyIndex },
];

const isLoaded = false;

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
