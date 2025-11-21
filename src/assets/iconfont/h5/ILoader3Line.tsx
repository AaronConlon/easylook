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

const ILoader3Line: FunctionComponent<Props> = ({
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
        d="M130.346667 554.666667H216.32a298.752 298.752 0 0 0 591.274667 0h86.016a384.042667 384.042667 0 0 1-763.306667 0z m0-85.333334a384.042667 384.042667 0 0 1 763.306666 0H807.68a298.752 298.752 0 0 0-591.274667 0H130.346667z"
        fill={getIconColor(color, 0, 'currentColor')}
      />
    </svg>
  );
};

export default ILoader3Line;
