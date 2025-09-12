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
let ICheckFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
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
        d="M426.666667 647.338667l392.192-392.234667 60.373333 60.330667L426.666667 768l-271.530667-271.530667 60.330667-60.330666z"
        fill={getIconColor(color, 0, 'currentColor')}
      />
    </Svg>
  );
};

ICheckFill = React.memo ? React.memo(ICheckFill) : ICheckFill;

export default ICheckFill;
