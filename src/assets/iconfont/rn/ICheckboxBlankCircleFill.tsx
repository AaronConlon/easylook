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
let ICheckboxBlankCircleFill: FunctionComponent<Props> = ({
  size,
  color,
  ...rest
}) => {
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
        d="M512 512m-426.666667 0a426.666667 426.666667 0 1 0 853.333334 0 426.666667 426.666667 0 1 0-853.333334 0Z"
        fill={getIconColor(color, 0, 'currentColor')}
      />
    </Svg>
  );
};

ICheckboxBlankCircleFill = React.memo
  ? React.memo(ICheckboxBlankCircleFill)
  : ICheckboxBlankCircleFill;

export default ICheckboxBlankCircleFill;
