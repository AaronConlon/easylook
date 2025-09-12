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

const IHomeLine: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M896 853.333333a42.666667 42.666667 0 0 1-42.666667 42.666667H170.666667a42.666667 42.666667 0 0 1-42.666667-42.666667V404.906667a42.666667 42.666667 0 0 1 16.469333-33.706667l341.333334-265.472a42.666667 42.666667 0 0 1 52.394666 0l341.333334 265.472a42.666667 42.666667 0 0 1 16.469333 33.706667V853.333333z m-85.333333-42.666666V425.728l-298.666667-232.277333-298.666667 232.277333V810.666667h597.333334z"
        fill={getIconColor(color, 0, 'currentColor')}
      />
    </svg>
  );
};

export default IHomeLine;
