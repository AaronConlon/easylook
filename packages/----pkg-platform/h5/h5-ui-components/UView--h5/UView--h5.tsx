import React, { forwardRef, useMemo } from 'react';
import type { FlexProps as AntdFlexProps } from 'antd';
import { Flex } from 'antd';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { UNI_STYLE_CSS_VARS_ANTD_TOKEN } from '----pkg-uni/uni-styles/uni-style-antd-token/by-gen-uni-style-js-vars-antd-token';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import styles from './styles.module.scss';

interface IUViewProps extends IUiCompBaseProps, AntdFlexProps {
  onClick?: () => void;
  //
  children?: any;
  block?: boolean;
  wrap?: boolean;
  row?: boolean;
  style?: any;
}

export const UView = forwardRef<HTMLDivElement, IUViewProps>((props, ref) => {
  const {
    className,
    block, // FOR RN REST ONLY
    align,
    wrap,
    gap,
    row,
    style,
    children,
    ...restProps
  } = props;

  // h5 不用 nextGap，Flex 本来就支持

  const nextGap = useMemo(() => {
    if (gap === 'large') {
      return UNI_STYLE_CSS_VARS_ANTD_TOKEN['--uni-padding-lg'];
    }

    if (gap === 'middle') {
      return UNI_STYLE_CSS_VARS_ANTD_TOKEN['--uni-padding-md'];
    }

    if (gap === 'small') {
      return UNI_STYLE_CSS_VARS_ANTD_TOKEN['--uni-padding-xs'];
    }

    return gap;
  }, [gap]);

  return (
    <Flex
      ref={ref}
      className={cx(
        styles['comp-wrapper'],
        {
          [styles['comp-wrapper--block']]: block,
          [styles['comp-wrapper--row']]: row,
          [styles['comp-wrapper--wrap']]: wrap,
        },
        className,
        'g-uni-comp--UView',
      )}
      style={{
        ...style,
        gap: nextGap,
      }}
      onClick={props.onClick}
      {...restProps}
    >
      {children || ' '}
    </Flex>
  );
});
