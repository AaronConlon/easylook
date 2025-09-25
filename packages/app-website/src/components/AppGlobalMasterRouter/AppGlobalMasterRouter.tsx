import {
  createRootRouteWithContext,
  createRoute,
  createRouter,
  RouterProvider,
} from '@tanstack/react-router';

import { USmartLink } from '----pkg-uni/uni-ui-components/USmartLink';
import { UText } from '----pkg-uni/uni-ui-components/UText';
import { UView } from '----pkg-uni/uni-ui-components/UView';

import { MASTER_ROUTER_PATHS } from '@/consts/master-router-paths';
import { MasterLayout } from '@/layouts/MasterLayout';
import { AboutIndex } from '@/page-components/about/AboutIndex';
import { BrandIndex } from '@/page-components/brand/BrandIndex';
import { ContactIndex } from '@/page-components/contact/ContactIndex';
import { HomeIndex } from '@/page-components/home/HomeIndex';
import { RecruitIndex } from '@/page-components/recruit/RecruitIndex';
import { ServiceIndex } from '@/page-components/service/ServiceIndex';
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

  // 关于我们及其子页面
  { path: MASTER_ROUTER_PATHS['/about'], component: AboutIndex },
  { path: MASTER_ROUTER_PATHS['/about/company'], component: AboutIndex },

  // 品牌产品
  { path: MASTER_ROUTER_PATHS['/brand'], component: BrandIndex },
  { path: MASTER_ROUTER_PATHS['/brand-easylook'], component: BrandIndex },
  { path: MASTER_ROUTER_PATHS['/brand-weiai'], component: BrandIndex },

  // 服务场景
  { path: MASTER_ROUTER_PATHS['/service'], component: ServiceIndex },

  // 公司动态 (新闻)
  { path: MASTER_ROUTER_PATHS['/story'], component: StoryIndex },
  { path: MASTER_ROUTER_PATHS['/news'], component: StoryIndex },
  { path: MASTER_ROUTER_PATHS['/news-weiai'], component: StoryIndex },
  { path: MASTER_ROUTER_PATHS['/news-kepu'], component: StoryIndex },

  // 招贤纳士
  { path: MASTER_ROUTER_PATHS['/recruit'], component: RecruitIndex },
  { path: MASTER_ROUTER_PATHS['/careers'], component: RecruitIndex },

  // 联系我们
  { path: MASTER_ROUTER_PATHS['/contact'], component: ContactIndex },

  // 其他页面路径 (使用现有组件作为占位符)
  { path: MASTER_ROUTER_PATHS['/honor'], component: AboutIndex },
  { path: MASTER_ROUTER_PATHS['/features'], component: BrandIndex },
  { path: MASTER_ROUTER_PATHS['/pricing'], component: BrandIndex },
  { path: MASTER_ROUTER_PATHS['/integrations'], component: BrandIndex },
  { path: MASTER_ROUTER_PATHS['/changelog'], component: StoryIndex },
  { path: MASTER_ROUTER_PATHS['/documentation'], component: StoryIndex },
  { path: MASTER_ROUTER_PATHS['/tutorials'], component: StoryIndex },
  { path: MASTER_ROUTER_PATHS['/blog'], component: StoryIndex },
  { path: MASTER_ROUTER_PATHS['/support'], component: ContactIndex },
  { path: MASTER_ROUTER_PATHS['/partners'], component: AboutIndex },
  { path: MASTER_ROUTER_PATHS['/privacy'], component: AboutIndex },
  { path: MASTER_ROUTER_PATHS['/terms'], component: AboutIndex },
  { path: MASTER_ROUTER_PATHS['/cookies'], component: AboutIndex },
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
      loader: () => {
        return r.path === '/';
      },
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
