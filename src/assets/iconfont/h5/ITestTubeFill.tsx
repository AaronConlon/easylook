/* tslint:disable */
/* eslint-disable */

import React, { CSSProperties, FunctionComponent, SVGAttributes } from 'react';
import { getIconColor } from './helper';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  size?: number;
  color?: string | string[];
}

const DEFAULT_STYLE: CSSProperties = {
  display: 'block',
};

const ITestTubeFill: FunctionComponent<Props> = ({
  size,
  color,
  style: _style,
  ...rest
}) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg
      viewBox="0 0 1024 1024"
      width={size + 'px'}
      height={size + 'px'}
      style={style}
      {...rest}
    >
      <path
        d="M725.333333 85.333333v85.333334h-42.666666v597.333333c0 94.293333-76.373333 170.666667-170.666667 170.666667s-170.666667-76.373333-170.666667-170.666667V170.666667H298.666667V85.333333h426.666666z m-170.666666 554.666667a42.666667 42.666667 0 1 0 0 85.333333 42.666667 42.666667 0 0 0 0-85.333333z m-85.333334-128a42.666667 42.666667 0 1 0 0 85.333333 42.666667 42.666667 0 0 0 0-85.333333z m128-341.333333h-170.666666v170.666666h170.666666V170.666667z"
        fill={getIconColor(color, 0, 'currentColor')}
      />
    </svg>
  );
};

export default ITestTubeFill;
