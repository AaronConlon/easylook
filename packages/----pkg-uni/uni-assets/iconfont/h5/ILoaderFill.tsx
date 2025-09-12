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

const ILoaderFill: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 85.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v128a42.666667 42.666667 0 0 1-85.333334 0V128a42.666667 42.666667 0 0 1 42.666667-42.666667z m0 640a42.666667 42.666667 0 0 1 42.666667 42.666667v128a42.666667 42.666667 0 0 1-85.333334 0v-128a42.666667 42.666667 0 0 1 42.666667-42.666667z m369.493333-426.666666a42.666667 42.666667 0 0 1-15.616 58.282666l-110.848 64a42.666667 42.666667 0 1 1-42.666666-73.898666l110.848-64A42.666667 42.666667 0 0 1 881.493333 298.666667zM327.253333 618.666667a42.666667 42.666667 0 0 1-15.616 58.282666l-110.848 64a42.666667 42.666667 0 1 1-42.666666-73.898666l110.848-64a42.666667 42.666667 0 0 1 58.282666 15.616zM881.493333 725.333333a42.666667 42.666667 0 0 1-58.282666 15.616l-110.848-64a42.666667 42.666667 0 0 1 42.666666-73.898666l110.848 64A42.666667 42.666667 0 0 1 881.493333 725.333333zM327.253333 405.333333a42.666667 42.666667 0 0 1-58.282666 15.616l-110.848-64a42.666667 42.666667 0 1 1 42.666666-73.898666l110.848 64A42.666667 42.666667 0 0 1 327.253333 405.333333z"
        fill={getIconColor(color, 0, 'currentColor')}
      />
    </svg>
  );
};

export default ILoaderFill;
