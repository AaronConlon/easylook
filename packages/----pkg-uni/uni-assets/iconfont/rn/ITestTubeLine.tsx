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
let ITestTubeLine: FunctionComponent<Props> = ({ size, color, ...rest }) => {
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
        d="M725.333333 85.333333v85.333334h-42.666666v597.333333c0 94.293333-76.373333 170.666667-170.666667 170.666667s-170.666667-76.373333-170.666667-170.666667V170.666667H298.666667V85.333333h426.666666z m-128 341.333334h-170.666666v341.333333a85.333333 85.333333 0 1 0 170.666666 0v-341.333333z m-42.666666 213.333333a42.666667 42.666667 0 1 1 0 85.333333 42.666667 42.666667 0 0 1 0-85.333333z m-85.333334-128a42.666667 42.666667 0 1 1 0 85.333333 42.666667 42.666667 0 0 1 0-85.333333z m128-341.333333h-170.666666v170.666666h170.666666V170.666667z"
        fill={getIconColor(color, 0, 'currentColor')}
      />
    </Svg>
  );
};

ITestTubeLine = React.memo ? React.memo(ITestTubeLine) : ITestTubeLine;

export default ITestTubeLine;
