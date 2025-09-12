import React, { forwardRef } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import styles from '../UView--h5/styles.module.scss';
import { useIsDarkMode } from '../../h5-hooks/useIsDarkMode--h5';

import type { WebViewProps } from './_types';

type IWebViewRef = HTMLIFrameElement;

interface IUViewProps extends IUiCompBaseProps, WebViewProps {
  children?: any;
  style?: any;
  className?: any;
}

export const UWebView = forwardRef<IWebViewRef, IUViewProps>((props, ref) => {
  const { isDarkMode } = useIsDarkMode();

  const { className, style, source, ...restProps } = props;

  return (
    <iframe
      // eslint-disable-next-line @typescript-eslint/no-deprecated
      frameBorder="0"
      ref={ref}
      src={source?.uri}
      className={cx(
        styles['comp-wrapper'],
        {
          [styles['comp-wrapper--isDarkMode']]: isDarkMode,
        },
        className,
        'g-uni-comp--UWebView',
      )}
      style={style}
    />
  );
});

export * from './_types';
