import { QueryClient } from '@tanstack/react-query';

import { TIME_CONST_RQ } from '__shared__/consts/time-const';

export const rqClientInst = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      gcTime: TIME_CONST_RQ.TIME_INFINITY,
      networkMode: 'offlineFirst',
    },
  },
});
