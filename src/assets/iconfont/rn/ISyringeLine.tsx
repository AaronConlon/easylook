/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { StyleProp, ViewProps } from 'react-native';
import { GProps, Path, Svg } from 'react-native-svg';
import { getIconColor } from './helper';

// @ts-ignore
interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
  style?: StyleProp<any>;
}

// SingleIcon-01--tsx
let ISyringeLine: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  const flatStyle = Object.assign(
    {
      width: undefined,
      height: undefined,
    },
    ...rest.style,
  );

  return (
    // @ts-ignore
    <Svg
      viewBox="0 0 1024 1024"
      width={flatStyle.width || size}
      height={flatStyle.height || size}
      {...rest}
    >
      <Path
        d="M924.928 340.48l-60.373333 60.288-90.453334-90.453333-90.538666 90.453333 150.826666 150.869333-60.330666 60.330667-30.165334-30.165333L472.362667 853.333333H230.997333l-90.496 90.496-60.330666-60.330666L170.666667 793.002667v-241.365334l271.530666-271.530666-30.165333-30.165334 60.330667-60.330666 150.869333 150.826666 90.453333-90.496-90.453333-90.496 60.330667-60.373333 241.365333 241.365333z m-241.365333 180.992l-181.034667-181.034667-60.330667 60.330667 90.496 90.538667-60.330666 60.330666-90.496-90.496-60.330667 60.330667 90.453333 90.496-60.288 60.330667-90.538666-90.496-5.162667 5.162666V768h181.034667l246.528-246.528z"
        fill={getIconColor(color, 0, 'currentColor')}
      />
    </Svg>
  );
};

ISyringeLine = React.memo ? React.memo(ISyringeLine) : ISyringeLine;

export default ISyringeLine;
