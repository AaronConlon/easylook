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
let ICloseFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
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
        d="M512 451.669333l211.2-211.2 60.330667 60.330667-211.2 211.2 211.2 211.2-60.330667 60.330667-211.2-211.2-211.2 211.2-60.330667-60.330667 211.2-211.2-211.2-211.2L300.8 240.469333z"
        fill={getIconColor(color, 0, 'currentColor')}
      />
    </Svg>
  );
};

ICloseFill = React.memo ? React.memo(ICloseFill) : ICloseFill;

export default ICloseFill;
