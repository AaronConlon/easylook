import React from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { UText } from '----pkg-uni/uni-ui-components/UText';
import { UView } from '----pkg-uni/uni-ui-components/UView';

import { useScreenMedia } from '----pkg-uni/uni-hooks/useScreenMedia';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import styles from './styles.module.scss';

interface IProps extends IUiCompBaseProps {}

export const DebugCssMediaLabel: React.FC<IProps> = (props) => {
  const { screenMedia, windowSize } = useScreenMedia();

  return (
    <UView
      row
      className={cx(styles['comp-wrapper'], props.className)}
      style={props.style}
    >
      <UView className={cx(styles['current-size'])}>
        <UText>
          {windowSize.width}x{windowSize.height}
        </UText>
      </UView>

      <UView className={cx(styles['current-media'])}>
        {screenMedia.xs ? 'xs' : ''}
        {screenMedia.sm ? 'sm' : ''}
        {screenMedia.md ? 'md' : ''}
        {screenMedia.lg ? 'lg' : ''}
        {screenMedia.xl ? 'xl' : ''}
        {screenMedia.xxl ? 'xxl' : ''}
      </UView>
    </UView>
  );
};
