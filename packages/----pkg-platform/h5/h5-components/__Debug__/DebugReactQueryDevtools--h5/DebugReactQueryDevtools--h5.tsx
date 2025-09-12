import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';

interface IProps {}

export const DebugReactQueryDevtools: React.FC<IProps> = (props) => {
  return (
    <>
      {/* for DEV */}
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
};
