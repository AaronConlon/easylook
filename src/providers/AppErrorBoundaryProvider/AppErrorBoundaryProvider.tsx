import type { ErrorInfo } from 'react';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export const onErrorBoundaryFallbackRender = (opts: { error: any }) => {
  console.log(
    'AppErrorBoundaryProvider- onErrorBoundaryFallbackRender - error:',
  );
  console.log(opts.error);

  return (
    <div>
      <h2>ERROR BOUNDARY</h2>
      <code>{opts.error?.stack}</code>
      {/* <code>{opts.error?.message}</code> */}
    </div>
  );
};

export const onErrorBoundaryError = (error: Error, info: ErrorInfo) => {
  console.log('AppErrorBoundaryProvider- onErrorBoundaryError - error:');
  console.log(error);
};

export interface IAppErrorBoundaryProviderProps {
  children: any;
}

export const AppErrorBoundaryProvider = (
  props: IAppErrorBoundaryProviderProps,
) => {
  return (
    <ErrorBoundary
      fallbackRender={onErrorBoundaryFallbackRender}
      onError={(e, i) => {
        onErrorBoundaryError(e, i);
      }}
    >
      {props.children}
    </ErrorBoundary>
  );
};
