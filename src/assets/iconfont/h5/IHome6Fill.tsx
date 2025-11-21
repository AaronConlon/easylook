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

const IHome6Fill: FunctionComponent<Props> = ({
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
        d="M896 853.333333a42.666667 42.666667 0 0 1-42.666667 42.666667H170.666667a42.666667 42.666667 0 0 1-42.666667-42.666667V404.906667a42.666667 42.666667 0 0 1 16.469333-33.706667l341.333334-265.472a42.666667 42.666667 0 0 1 52.394666 0l341.333334 265.472a42.666667 42.666667 0 0 1 16.469333 33.706667V853.333333zM298.666667 640v85.333333h426.666666v-85.333333H298.666667z"
        fill={getIconColor(color, 0, 'currentColor')}
      />
    </svg>
  );
};

export default IHome6Fill;
