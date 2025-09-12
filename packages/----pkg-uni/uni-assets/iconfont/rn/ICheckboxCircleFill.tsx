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
let ICheckboxCircleFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
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
        d="M512 938.666667C276.352 938.666667 85.333333 747.648 85.333333 512S276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667-191.018667 426.666667-426.666667 426.666667z m-42.538667-256l301.653334-301.696-60.330667-60.330667-241.322667 241.365333-120.704-120.704-60.330666 60.330667L469.461333 682.666667z"
        fill={getIconColor(color, 0, 'currentColor')}
      />
    </Svg>
  );
};

ICheckboxCircleFill = React.memo ? React.memo(ICheckboxCircleFill) : ICheckboxCircleFill;

export default ICheckboxCircleFill;
