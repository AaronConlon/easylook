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
let ICloseLightLine: FunctionComponent<Props> = ({ size, color, ...rest }) => {
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
        d="M148.053333 148.053333a32 32 0 0 1 45.226667 0l682.666667 682.666667a32 32 0 1 1-45.226667 45.226667l-682.666667-682.666667a32 32 0 0 1 0-45.226667z"
        fill={getIconColor(color, 0, 'currentColor')}
      />
      <Path
        d="M875.946667 148.053333a32 32 0 0 1 0 45.226667l-682.666667 682.666667a32 32 0 0 1-45.226667-45.226667l682.666667-682.666667a32 32 0 0 1 45.226667 0z"
        fill={getIconColor(color, 1, 'currentColor')}
      />
    </Svg>
  );
};

ICloseLightLine = React.memo ? React.memo(ICloseLightLine) : ICloseLightLine;

export default ICloseLightLine;
