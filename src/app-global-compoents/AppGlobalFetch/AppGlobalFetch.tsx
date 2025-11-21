import type React from 'react';

interface IProps {
  children?: React.ReactNode | any;
}

const __DEBUG_SHOW_LOG__ = false;

export const AppGlobalFetch = (props: IProps) => {
  return props.children || null;
};
