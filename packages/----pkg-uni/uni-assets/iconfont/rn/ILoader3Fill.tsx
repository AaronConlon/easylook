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
let ILoader3Fill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
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
        d="M130.346667 554.666667H216.32a298.752 298.752 0 0 0 591.274667 0h86.016a384.042667 384.042667 0 0 1-763.306667 0z m0-85.333334a384.042667 384.042667 0 0 1 763.306666 0H807.68a298.752 298.752 0 0 0-591.274667 0H130.346667z"
        fill={getIconColor(color, 0, 'currentColor')}
      />
    </Svg>
  );
};

ILoader3Fill = React.memo ? React.memo(ILoader3Fill) : ILoader3Fill;

export default ILoader3Fill;
