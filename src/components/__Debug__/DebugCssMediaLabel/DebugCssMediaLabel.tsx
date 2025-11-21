import React from 'react';

import type { ICompBaseProps } from '__shared__/typings/comp-type';

import { cx } from '__shared__/utils/cx-util';
import { useScreenMedia } from '__shared__/hooks/useScreenMedia';

import { STYLE_SCREENS_CONST } from '@/consts/style-media-const';

import styles from './styles.module.scss';

interface IProps extends ICompBaseProps {}

export const DebugCssMediaLabel = (props: IProps) => {
  const { screenMedia, windowSize } = useScreenMedia({
    screens: STYLE_SCREENS_CONST,
  });

  return (
    <div
      className={cx(styles['comp-wrapper'], props.className)}
      style={props.style}
    >
      <div className={cx(styles['current-size'])}>
        {windowSize.width}x{windowSize.height}
      </div>

      <div className={cx(styles['current-media'])}>
        {screenMedia.xs ? 'xs' : ''}
        {screenMedia.sm ? 'sm' : ''}
        {screenMedia.md ? 'md' : ''}
        {screenMedia.lg ? 'lg' : ''}
        {screenMedia.xl ? 'xl' : ''}
        {screenMedia.xxl ? 'xxl' : ''}
      </div>
    </div>
  );
};
