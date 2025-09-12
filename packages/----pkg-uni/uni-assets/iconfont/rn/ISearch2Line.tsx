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
let ISearch2Line: FunctionComponent<Props> = ({ size, color, ...rest }) => {
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
        d="M469.333333 85.333333c211.968 0 384 172.032 384 384s-172.032 384-384 384-384-172.032-384-384 172.032-384 384-384z m0 682.666667c164.992 0 298.666667-133.674667 298.666667-298.666667 0-165.034667-133.674667-298.666667-298.666667-298.666666-165.034667 0-298.666667 133.632-298.666666 298.666666 0 164.992 133.632 298.666667 298.666666 298.666667z m362.026667 3.029333l120.704 120.661334-60.373333 60.373333-120.661334-120.704 60.330667-60.330667z"
        fill={getIconColor(color, 0, 'currentColor')}
      />
    </Svg>
  );
};

ISearch2Line = React.memo ? React.memo(ISearch2Line) : ISearch2Line;

export default ISearch2Line;
