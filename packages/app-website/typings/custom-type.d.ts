declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.styl';
declare module '*.json';
declare module '*.html';

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.ico';

declare module 'eslint-plugin-import';
declare module 'eslint-plugin-jsx-a11y';

// declare module '*.svg';
declare module '*.svg' {
  import type * as React from 'react';
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
