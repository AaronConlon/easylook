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

const ILoader5Line: FunctionComponent<Props> = ({
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
        d="M512 128a384 384 0 0 1 384 384h-85.333333a298.666667 298.666667 0 0 0-298.666667-298.666667V128z"
        fill={getIconColor(color, 0, 'currentColor')}
      />
    </svg>
  );
};

export default ILoader5Line;
