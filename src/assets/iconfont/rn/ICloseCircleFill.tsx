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
let ICloseCircleFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
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
        d="M512 938.666667C276.352 938.666667 85.333333 747.648 85.333333 512S276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667-191.018667 426.666667-426.666667 426.666667z m0-486.997334L391.338667 330.965333 330.965333 391.338667 451.669333 512l-120.704 120.661333 60.373334 60.373334L512 572.330667l120.661333 120.704 60.373334-60.373334L572.330667 512l120.704-120.661333-60.373334-60.373334L512 451.669333z"
        fill={getIconColor(color, 0, 'currentColor')}
      />
    </Svg>
  );
};

ICloseCircleFill = React.memo ? React.memo(ICloseCircleFill) : ICloseCircleFill;

export default ICloseCircleFill;
