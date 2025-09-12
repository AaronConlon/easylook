/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { StyleProp, ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

// @ts-ignore
interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
  style?: StyleProp<any>;
}

// SingleIcon-01--tsx
let IHome6Line: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  const flatStyle = Object.assign(
    {
      width: undefined,
      height: undefined,
    },
    ...rest.style,
  );

  return (
    // @ts-ignore
    <Svg viewBox="0 0 1024 1024" width={flatStyle.width || size} height={flatStyle.height || size} {...rest}>
      <Path
        d="M896 853.333333a42.666667 42.666667 0 0 1-42.666667 42.666667H170.666667a42.666667 42.666667 0 0 1-42.666667-42.666667V404.906667a42.666667 42.666667 0 0 1 16.469333-33.706667l341.333334-265.472a42.666667 42.666667 0 0 1 52.394666 0l341.333334 265.472a42.666667 42.666667 0 0 1 16.469333 33.706667V853.333333z m-85.333333-42.666666V425.728l-298.666667-232.277333-298.666667 232.277333V810.666667h597.333334zM298.666667 640h426.666666v85.333333H298.666667v-85.333333z"
        fill={getIconColor(color, 0, 'currentColor')}
      />
    </Svg>
  );
};

IHome6Line = React.memo ? React.memo(IHome6Line) : IHome6Line;

export default IHome6Line;
