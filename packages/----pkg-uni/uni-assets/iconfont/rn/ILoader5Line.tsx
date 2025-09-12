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
let ILoader5Line: FunctionComponent<Props> = ({ size, color, ...rest }) => {
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
        d="M512 128a384 384 0 0 1 384 384h-85.333333a298.666667 298.666667 0 0 0-298.666667-298.666667V128z"
        fill={getIconColor(color, 0, 'currentColor')}
      />
    </Svg>
  );
};

ILoader5Line = React.memo ? React.memo(ILoader5Line) : ILoader5Line;

export default ILoader5Line;
