import type React from 'react';

export interface IPageBaseProps {
  className?: string;

  style?: React.CSSProperties;
  children?: string | React.ReactNode;
}

export interface IUiCompBaseProps {
  id?: string | undefined;
  className?: string;
  style?: React.CSSProperties;
  children?: string | React.ReactNode;
}
