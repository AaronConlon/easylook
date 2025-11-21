import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';

interface IProps {}

export const DebugReactQueryDevtools = (props: IProps) => {
  return (
    <>
      {/* for DEV */}
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
};
