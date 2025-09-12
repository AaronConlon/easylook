/* tslint:disable */
/* eslint-disable */

import React, { SVGAttributes, FunctionComponent } from 'react';
import ICloseCircleFill from './ICloseCircleFill';
import IErrorWarningFill from './IErrorWarningFill';
import IErrorWarningLine from './IErrorWarningLine';
import IExtLoading3 from './IExtLoading3';
import IExtLoading4 from './IExtLoading4';
import IExtLoading1 from './IExtLoading1';
import IExtLoading2 from './IExtLoading2';
import ILoader2Line from './ILoader2Line';
import ILoader3Line from './ILoader3Line';
import ILoader4Fill from './ILoader4Fill';
import ILoader4Line from './ILoader4Line';
import ILoader5Fill from './ILoader5Fill';
import ILoader5Line from './ILoader5Line';
import ILoaderFill from './ILoaderFill';
import ILoaderLine from './ILoaderLine';
import ILoader3Fill from './ILoader3Fill';
import ILoader2Fill from './ILoader2Fill';
import ICloseLightLine from './ICloseLightLine';
import ITestTubeFill from './ITestTubeFill';
import ISyringeLine from './ISyringeLine';
import ITestTubeLine from './ITestTubeLine';
import ISyringeFill from './ISyringeFill';
import ICheckboxBlankCircleFill from './ICheckboxBlankCircleFill';
import ICheckboxBlankCircleLine from './ICheckboxBlankCircleLine';
import ICheckFill from './ICheckFill';
import ICheckboxCircleLine from './ICheckboxCircleLine';
import ICheckboxCircleFill from './ICheckboxCircleFill';
import ICloseLine from './ICloseLine';
import ICloseCircleLine from './ICloseCircleLine';
import ICloseFill from './ICloseFill';
import IHome5Line from './IHome5Line';
import IHome5Fill from './IHome5Fill';
import IHome6Line from './IHome6Line';
import IHome6Fill from './IHome6Fill';
import IHomeFill from './IHomeFill';
import IHomeLine from './IHomeLine';
import ISearch2Line from './ISearch2Line';
import ISearchLine from './ISearchLine';
import IUserSmileFill from './IUserSmileFill';
import IUserSmileLine from './IUserSmileLine';
import ICodepen from './ICodepen';
export { default as ICloseCircleFill } from './ICloseCircleFill';
export { default as IErrorWarningFill } from './IErrorWarningFill';
export { default as IErrorWarningLine } from './IErrorWarningLine';
export { default as IExtLoading3 } from './IExtLoading3';
export { default as IExtLoading4 } from './IExtLoading4';
export { default as IExtLoading1 } from './IExtLoading1';
export { default as IExtLoading2 } from './IExtLoading2';
export { default as ILoader2Line } from './ILoader2Line';
export { default as ILoader3Line } from './ILoader3Line';
export { default as ILoader4Fill } from './ILoader4Fill';
export { default as ILoader4Line } from './ILoader4Line';
export { default as ILoader5Fill } from './ILoader5Fill';
export { default as ILoader5Line } from './ILoader5Line';
export { default as ILoaderFill } from './ILoaderFill';
export { default as ILoaderLine } from './ILoaderLine';
export { default as ILoader3Fill } from './ILoader3Fill';
export { default as ILoader2Fill } from './ILoader2Fill';
export { default as ICloseLightLine } from './ICloseLightLine';
export { default as ITestTubeFill } from './ITestTubeFill';
export { default as ISyringeLine } from './ISyringeLine';
export { default as ITestTubeLine } from './ITestTubeLine';
export { default as ISyringeFill } from './ISyringeFill';
export { default as ICheckboxBlankCircleFill } from './ICheckboxBlankCircleFill';
export { default as ICheckboxBlankCircleLine } from './ICheckboxBlankCircleLine';
export { default as ICheckFill } from './ICheckFill';
export { default as ICheckboxCircleLine } from './ICheckboxCircleLine';
export { default as ICheckboxCircleFill } from './ICheckboxCircleFill';
export { default as ICloseLine } from './ICloseLine';
export { default as ICloseCircleLine } from './ICloseCircleLine';
export { default as ICloseFill } from './ICloseFill';
export { default as IHome5Line } from './IHome5Line';
export { default as IHome5Fill } from './IHome5Fill';
export { default as IHome6Line } from './IHome6Line';
export { default as IHome6Fill } from './IHome6Fill';
export { default as IHomeFill } from './IHomeFill';
export { default as IHomeLine } from './IHomeLine';
export { default as ISearch2Line } from './ISearch2Line';
export { default as ISearchLine } from './ISearchLine';
export { default as IUserSmileFill } from './IUserSmileFill';
export { default as IUserSmileLine } from './IUserSmileLine';
export { default as ICodepen } from './ICodepen';

export type IconNames = 'i-close-circle-fill' | 'i-error-warning-fill' | 'i-error-warning-line' | 'i-ext-loading-3' | 'i-ext-loading-4' | 'i-ext-loading-1' | 'i-ext-loading-2' | 'i-loader-2-line' | 'i-loader-3-line' | 'i-loader-4-fill' | 'i-loader-4-line' | 'i-loader-5-fill' | 'i-loader-5-line' | 'i-loader-fill' | 'i-loader-line' | 'i-loader-3-fill' | 'i-loader-2-fill' | 'i-close-light-line' | 'i-test-tube-fill' | 'i-syringe-line' | 'i-test-tube-line' | 'i-syringe-fill' | 'i-checkbox-blank-circle-fill' | 'i-checkbox-blank-circle-line' | 'i-check-fill' | 'i-checkbox-circle-line' | 'i-checkbox-circle-fill' | 'i-close-line' | 'i-close-circle-line' | 'i-close-fill' | 'i-home-5-line' | 'i-home-5-fill' | 'i-home-6-line' | 'i-home-6-fill' | 'i-home-fill' | 'i-home-line' | 'i-search-2-line' | 'i-search-line' | 'i-user-smile-fill' | 'i-user-smile-line' | 'i-codepen';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'i-close-circle-fill':
      return <ICloseCircleFill {...rest} />;
    case 'i-error-warning-fill':
      return <IErrorWarningFill {...rest} />;
    case 'i-error-warning-line':
      return <IErrorWarningLine {...rest} />;
    case 'i-ext-loading-3':
      return <IExtLoading3 {...rest} />;
    case 'i-ext-loading-4':
      return <IExtLoading4 {...rest} />;
    case 'i-ext-loading-1':
      return <IExtLoading1 {...rest} />;
    case 'i-ext-loading-2':
      return <IExtLoading2 {...rest} />;
    case 'i-loader-2-line':
      return <ILoader2Line {...rest} />;
    case 'i-loader-3-line':
      return <ILoader3Line {...rest} />;
    case 'i-loader-4-fill':
      return <ILoader4Fill {...rest} />;
    case 'i-loader-4-line':
      return <ILoader4Line {...rest} />;
    case 'i-loader-5-fill':
      return <ILoader5Fill {...rest} />;
    case 'i-loader-5-line':
      return <ILoader5Line {...rest} />;
    case 'i-loader-fill':
      return <ILoaderFill {...rest} />;
    case 'i-loader-line':
      return <ILoaderLine {...rest} />;
    case 'i-loader-3-fill':
      return <ILoader3Fill {...rest} />;
    case 'i-loader-2-fill':
      return <ILoader2Fill {...rest} />;
    case 'i-close-light-line':
      return <ICloseLightLine {...rest} />;
    case 'i-test-tube-fill':
      return <ITestTubeFill {...rest} />;
    case 'i-syringe-line':
      return <ISyringeLine {...rest} />;
    case 'i-test-tube-line':
      return <ITestTubeLine {...rest} />;
    case 'i-syringe-fill':
      return <ISyringeFill {...rest} />;
    case 'i-checkbox-blank-circle-fill':
      return <ICheckboxBlankCircleFill {...rest} />;
    case 'i-checkbox-blank-circle-line':
      return <ICheckboxBlankCircleLine {...rest} />;
    case 'i-check-fill':
      return <ICheckFill {...rest} />;
    case 'i-checkbox-circle-line':
      return <ICheckboxCircleLine {...rest} />;
    case 'i-checkbox-circle-fill':
      return <ICheckboxCircleFill {...rest} />;
    case 'i-close-line':
      return <ICloseLine {...rest} />;
    case 'i-close-circle-line':
      return <ICloseCircleLine {...rest} />;
    case 'i-close-fill':
      return <ICloseFill {...rest} />;
    case 'i-home-5-line':
      return <IHome5Line {...rest} />;
    case 'i-home-5-fill':
      return <IHome5Fill {...rest} />;
    case 'i-home-6-line':
      return <IHome6Line {...rest} />;
    case 'i-home-6-fill':
      return <IHome6Fill {...rest} />;
    case 'i-home-fill':
      return <IHomeFill {...rest} />;
    case 'i-home-line':
      return <IHomeLine {...rest} />;
    case 'i-search-2-line':
      return <ISearch2Line {...rest} />;
    case 'i-search-line':
      return <ISearchLine {...rest} />;
    case 'i-user-smile-fill':
      return <IUserSmileFill {...rest} />;
    case 'i-user-smile-line':
      return <IUserSmileLine {...rest} />;
    case 'i-codepen':
      return <ICodepen {...rest} />;

  }

  return null;
};

export default IconFont;
