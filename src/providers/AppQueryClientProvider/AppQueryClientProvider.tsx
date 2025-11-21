import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';

import { rqClientInst } from '@/instances/rq-client-inst';

export const AppQueryClientProvider = (props: { children: any }) => {
  return (
    <QueryClientProvider client={rqClientInst}>
      {props.children}
    </QueryClientProvider>
  );
};
