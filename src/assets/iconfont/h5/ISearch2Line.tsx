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

const ISearch2Line: FunctionComponent<Props> = ({
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
        d="M469.333333 85.333333c211.968 0 384 172.032 384 384s-172.032 384-384 384-384-172.032-384-384 172.032-384 384-384z m0 682.666667c164.992 0 298.666667-133.674667 298.666667-298.666667 0-165.034667-133.674667-298.666667-298.666667-298.666666-165.034667 0-298.666667 133.632-298.666666 298.666666 0 164.992 133.632 298.666667 298.666666 298.666667z m362.026667 3.029333l120.704 120.661334-60.373333 60.373333-120.661334-120.704 60.330667-60.330667z"
        fill={getIconColor(color, 0, 'currentColor')}
      />
    </svg>
  );
};

export default ISearch2Line;
