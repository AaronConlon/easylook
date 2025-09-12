import React from 'react';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { View } from '----pkg-uni/uni-ui-components';
import { cx } from '----pkg-uni/uni-utils';

import styles from './styles.module.scss';

interface IProps extends IUiCompBaseProps {
}

export const ScreenWidthLimite: React.FC<IProps> = (props) => {
  return (
    <UView
      className={cx(
        styles['comp-wrapper'],
        'g-comp-ScreenWidthLimite',
        props.className,
      )}
    >
      {props.children}
    </UView>
  );
};
