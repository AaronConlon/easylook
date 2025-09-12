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

const ICloseLightLine: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M148.053333 148.053333a32 32 0 0 1 45.226667 0l682.666667 682.666667a32 32 0 1 1-45.226667 45.226667l-682.666667-682.666667a32 32 0 0 1 0-45.226667z"
        fill={getIconColor(color, 0, 'currentColor')}
      />
      <path
        d="M875.946667 148.053333a32 32 0 0 1 0 45.226667l-682.666667 682.666667a32 32 0 0 1-45.226667-45.226667l682.666667-682.666667a32 32 0 0 1 45.226667 0z"
        fill={getIconColor(color, 1, 'currentColor')}
      />
    </svg>
  );
};

export default ICloseLightLine;
