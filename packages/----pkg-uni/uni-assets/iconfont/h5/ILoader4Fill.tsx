/* tslint:disable */
/* eslint-disable */

import React, { CSSProperties, SVGAttributes, FunctionComponent } from 'react';
import { getIconColor } from './helper';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  size?: number;
  color?: string | string[];
}

const DEFAULT_STYLE: CSSProperties = {
  display: 'block',
};

const ILoader4Fill: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M783.530667 240.469333L723.2 300.8A298.666667 298.666667 0 1 0 810.666667 512h85.333333a384 384 0 1 1-112.469333-271.530667z"
        fill={getIconColor(color, 0, 'currentColor')}
      />
    </svg>
  );
};

export default ILoader4Fill;
