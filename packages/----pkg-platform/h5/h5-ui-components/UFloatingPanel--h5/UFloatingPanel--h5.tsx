//
import { Drawer as AntdDrawer } from 'antd';
import React from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { useIsDarkMode } from '----pkg-uni/uni-hooks/useIsDarkMode';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import styles from './styles.module.scss';

// 对齐 props，以 antd 为准，如果 rn 没有，就想办法实现

interface IFloatingPanelProps extends IUiCompBaseProps {
  className?: any;
  // style?: StyleProp<UTextStyle>;
}

export const UFloatingPanel = (props: IFloatingPanelProps) => {
  const { isDarkMode } = useIsDarkMode();

  const { className, ...restProps } = props;

  return (
    <AntdDrawer
      // title="RnFloatingPanel"
      // ref={ref}

      className={cx(
        'g-uni-comp--UFloatingPanel',
        styles['comp-wrapper'],
        {
          [styles['comp-wrapper--isDarkMode']]: isDarkMode,
        },
        className,
      )}
      {...restProps}
    />
  );
};

FloatingPanel.ScrollView = AntdDrawer;
FloatingPanel.ScrollViewComponent = AntdDrawer;
