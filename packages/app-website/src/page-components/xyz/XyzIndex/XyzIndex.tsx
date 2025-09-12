import React, { forwardRef } from 'react';
import { useTranslations } from 'use-intl';
import { useMatch, useParams } from '@tanstack/react-router';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { routeTree } from '@/components/AppGlobalStackRouter/AppGlobalStackRouter';

import styles from './styles.module.scss';

interface IUViewProps extends IUiCompBaseProps {}

export const XyzIndex = forwardRef<HTMLDivElement, IUViewProps>(
  (props, ref) => {
    const { children, className } = props;

    const params = useParams({ strict: false });

    console.log(444444444, params);

    return (
      <div
        className={cx(
          styles['comp-wrapper'],
          className,
          'g-uni-comp--XyzIndex',
        )}
      >
        <h1>XyzIndex</h1>
        <h2>lang可选: {params?.lang}</h2>
        <h2>id必选: {params?.id}</h2>

        <em>333kkkkdkd33333333333k</em>
        {children}
      </div>
    );
  },
);
