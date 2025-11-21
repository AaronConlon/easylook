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

const ISyringeFill: FunctionComponent<Props> = ({
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
        d="M924.928 340.48l-60.373333 60.288-90.453334-90.453333-90.538666 90.453333 150.826666 150.869333-60.330666 60.330667-30.165334-30.165333L472.362667 853.333333H230.997333l-90.496 90.496-60.330666-60.330666L170.666667 793.002667v-241.365334l271.530666-271.530666-30.165333-30.165334 60.330667-60.330666 150.869333 150.826666 90.453333-90.496-90.453333-90.496 60.330667-60.373333 241.365333 241.365333zM412.032 611.925333l-120.704-120.661333-60.330667 60.330667 120.704 120.661333 60.330667-60.330667z m120.661333-120.661333L412.032 370.602667l-60.330667 60.373333 120.661334 120.661333 60.330666-60.330666z"
        fill={getIconColor(color, 0, 'currentColor')}
      />
    </svg>
  );
};

export default ISyringeFill;
