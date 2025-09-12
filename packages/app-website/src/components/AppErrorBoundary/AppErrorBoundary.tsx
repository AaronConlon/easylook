import type { ErrorInfo } from 'react';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const DefaultErrorFallback = (props: { error: any }) => {
  console.log('DefaultErrorFallback', props);
  return (
    <div>
      <h2>ERROR BOUNDARY</h2>
      <pre>{props?.error?.message}</pre>
    </div>
  );
};

const logError = (error: Error, info: ErrorInfo) => {
  // Do something with the error, e.g. log to an external API
  console.log('logError - info:', info);
  console.log('logError - error:', error);
};

export interface IAppErrorBoundaryProps {}

export const AppErrorBoundary = (props: IAppErrorBoundaryProps) => {
  return (
    <ErrorBoundary fallbackRender={DefaultErrorFallback} onError={logError}>
      {/* @ts-ignore */}
      {props.children}
    </ErrorBoundary>
  );
};
