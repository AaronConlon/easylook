/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';

import Icon from './rn';

export type IconNames = 'i-close-circle-fill' | 'i-error-warning-fill' | 'i-error-warning-line' | 'i-ext-loading-3' | 'i-ext-loading-4' | 'i-ext-loading-1' | 'i-ext-loading-2' | 'i-loader-2-line' | 'i-loader-3-line' | 'i-loader-4-fill' | 'i-loader-4-line' | 'i-loader-5-fill' | 'i-loader-5-line' | 'i-loader-fill' | 'i-loader-line' | 'i-loader-3-fill' | 'i-loader-2-fill' | 'i-close-light-line' | 'i-test-tube-fill' | 'i-syringe-line' | 'i-test-tube-line' | 'i-syringe-fill' | 'i-checkbox-blank-circle-fill' | 'i-checkbox-blank-circle-line' | 'i-check-fill' | 'i-checkbox-circle-line' | 'i-checkbox-circle-fill' | 'i-close-line' | 'i-close-circle-line' | 'i-close-fill' | 'i-home-5-line' | 'i-home-5-fill' | 'i-home-6-line' | 'i-home-6-fill' | 'i-home-fill' | 'i-home-line' | 'i-search-2-line' | 'i-search-line' | 'i-user-smile-fill' | 'i-user-smile-line' | 'i-codepen';

interface Props {
  name: IconNames;
  size?: number;
  color?: string | string[];
  style?: React.CSSProperties;
  className?: string;
}

const IconFont: FunctionComponent<Props> = (props) => {
  const { name, size, color, style, className } = props;

  // @ts-ignore
  return (
    <Icon
      name={name}
      size={size || 18}
      color={color}
      // @ts-ignore
      style={style || { top: 1.5 }}
      // @ts-ignore
      className={`g-css--icon-font ${className || ''}`}
    />
  );
};

export default IconFont;
