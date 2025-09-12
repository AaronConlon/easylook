import { AboutIndex } from '----pkg-uni/uni-page-components/about/AboutIndex';
import { SettingIndex } from '----pkg-uni/uni-page-components/setting/SettingIndex';
import { MyIndex } from '----pkg-uni/uni-page-components/my/MyIndex';
import { URL_PATHS_CONST } from '----pkg-uni/uni-routers/uni-router';
import { TestAnyIndex } from '----pkg-uni/uni-page-components/__test__/TestAnyIndex';
// import { HomeIndex } from '----pkg-uni/uni-page-components/home/HomeIndex';
import { TestUniCompIndex } from '----pkg-uni/uni-page-components/__test__/TestUniCompIndex';

import { AppErrorBoundary } from '@/components/AppErrorBoundary';

import { MasterLayout } from '@/layouts/MasterLayout';
import { RootLayout } from '@/layouts/RootLayout';
import { HomeIndex } from '@/page-components/home/HomeIndex';

// import type { IRouterItem } from './AppGlobalStackRouter';

export const masterRouterList: any[] = [
  {
    path: '/',
    // element: <RootLayout />,
    Component: RootLayout,
    // errorElement: <AppErrorBoundary />,
    children: [
      // -----------------------------------------------------------------------
      //
      // Login (non Layout)
      //
      // -----------------------------------------------------------------------
      // {
      //   path: '/login',
      //   element: <LoginIndex />,
      //   handle: {
      //     name: '登录',
      //   },
      // },
      // -----------------------------------------------------------------------
      //
      // Login (non Layout)
      //
      // -----------------------------------------------------------------------
      // {
      //   path: '/login',
      //   element: <LoginIndex />,
      //   handle: {
      //     name: '登录',
      //   },
      // },
      // -----------------------------------------------------------------------
      //
      // Master Layout
      //
      // -----------------------------------------------------------------------
      {
        path: '/',
        // element: <MasterLayout />,
        Component: MasterLayout,
        children: [
          {
            path: URL_PATHS_CONST['/about'].name,
            // element: <AboutIndex />,
            Component: AboutIndex,
            handle: {
              name: '关于',
            },
          },
          //
          {
            path: URL_PATHS_CONST['/setting'].name,
            // element: <SettingIndex />,
            Component: SettingIndex,
            handle: {
              name: '设置',
            },
          },
          //
          {
            path: URL_PATHS_CONST['/my'].name,
            // lazy: true,
            // element: <MyIndex />,
            Component: MyIndex,
            handle: {
              name: '我的',
            },
          },
          //
          //
          //
          //
          {
            path: URL_PATHS_CONST['/test/any'].name,
            // element: <TestAnyIndex />,
            Component: TestAnyIndex,
            handle: {
              name: '测试Any',
            },
          },
          {
            path: URL_PATHS_CONST['/test/uni-comp'].name,
            // element: <TestUniCompIndex />,
            Component: TestUniCompIndex,
            handle: {
              name: '测试Uni组件',
            },
          },

          // {
          //   path: '/user',
          //   element: <UserList />,
          //   handle: {
          //     name: '用户列表',
          //   },
          // },
          // {
          //   path: '/project',
          //   element: <ProjectIndex />,
          //   handle: {
          //     name: '项目',
          //   },
          // },
          {
            path: '/',
            // element: <HomeIndex />,
            // Component: HomeIndex,
            Component: HomeIndex,
            handle: {
              name: '主页',
            },
          },
        ],
      },
    ],
  },
];
