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

const ISearchLine: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M769.322667 708.992l182.741333 182.698667-60.373333 60.373333-182.698667-182.741333A382.293333 382.293333 0 0 1 469.333333 853.333333c-211.968 0-384-172.032-384-384s172.032-384 384-384 384 172.032 384 384a382.293333 382.293333 0 0 1-84.010666 239.658667z m-85.589334-31.658667A297.685333 297.685333 0 0 0 768 469.333333c0-165.034667-133.674667-298.666667-298.666667-298.666666-165.034667 0-298.666667 133.632-298.666666 298.666666 0 164.992 133.632 298.666667 298.666666 298.666667a297.685333 297.685333 0 0 0 208-84.266667l6.4-6.4z"
        fill={getIconColor(color, 0, 'currentColor')}
      />
    </svg>
  );
};

export default ISearchLine;
