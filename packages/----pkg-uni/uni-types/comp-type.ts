import type React from 'react';

export interface IUiCompBaseProps {
  id?: string | undefined;
  className?: string;
  // className?: any; // 为了 h5 / rn 共用
  style?: React.CSSProperties;
  // style?: any; // 为了 h5 / rn 共用
  // children?: string | React.ReactNode;
  children?: any;
}
