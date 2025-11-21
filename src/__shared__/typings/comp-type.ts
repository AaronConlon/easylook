import type React from 'react';

export interface ICompBaseProps {
  id?: string | undefined;
  className?: string;
  style?: React.CSSProperties;
  children?: string | React.ReactNode;
}
