import {
  createHashHistory,
  createRouter,
  RouterProvider,
} from '@tanstack/react-router';

import { routeTree } from '@/routeTree.gen';

const hashHistory = createHashHistory();

export const router = createRouter({
  routeTree,
  history: hashHistory,
});

export const AppMasterRouterProvider = () => {
  return <RouterProvider router={router} disableGlobalCatchBoundary />;
};
