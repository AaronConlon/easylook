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
let IExtLoading4: FunctionComponent<Props> = ({ size, color, ...rest }) => {
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
        d="M512 128c0 23.573333-19.2 42.389333-42.581333 45.290667C300.992 194.261333 170.666667 337.92 170.666667 512c0 188.522667 152.810667 341.333333 341.333333 341.333333 174.08 0 317.738667-130.346667 338.709333-298.752C853.610667 531.2 872.426667 512 896 512c23.573333 0 42.88 19.157333 40.554667 42.602667C915.2 770.24 733.248 938.666667 512 938.666667 276.352 938.666667 85.333333 747.648 85.333333 512 85.333333 290.730667 253.76 108.8 469.397333 87.424 492.842667 85.12 512 104.426667 512 128z"
        fill={getIconColor(color, 0, '#262C66')}
      />
    </Svg>
  );
};

IExtLoading4 = React.memo ? React.memo(IExtLoading4) : IExtLoading4;

export default IExtLoading4;
