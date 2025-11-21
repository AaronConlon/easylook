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
let ILoader4Line: FunctionComponent<Props> = ({ size, color, ...rest }) => {
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
        d="M783.530667 240.469333L723.2 300.8A298.666667 298.666667 0 1 0 810.666667 512h85.333333a384 384 0 1 1-112.469333-271.530667z"
        fill={getIconColor(color, 0, 'currentColor')}
      />
    </Svg>
  );
};

ILoader4Line = React.memo ? React.memo(ILoader4Line) : ILoader4Line;

export default ILoader4Line;
