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
let IErrorWarningLine: FunctionComponent<Props> = ({ size, color, ...rest }) => {
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
        d="M512 938.666667C276.352 938.666667 85.333333 747.648 85.333333 512S276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667-191.018667 426.666667-426.666667 426.666667z m0-85.333334a341.333333 341.333333 0 1 0 0-682.666666 341.333333 341.333333 0 0 0 0 682.666666z m-42.666667-213.333333h85.333334v85.333333h-85.333334v-85.333333z m0-341.333333h85.333334v256h-85.333334V298.666667z"
        fill={getIconColor(color, 0, 'currentColor')}
      />
    </Svg>
  );
};

IErrorWarningLine = React.memo ? React.memo(IErrorWarningLine) : IErrorWarningLine;

export default IErrorWarningLine;
