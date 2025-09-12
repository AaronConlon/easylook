import type React from 'react';

interface IProps {
  children?: React.ReactNode | any;
}

export const AppGlobalFetch: React.FC<IProps> = (props) => {
  return props.children || null;
};
