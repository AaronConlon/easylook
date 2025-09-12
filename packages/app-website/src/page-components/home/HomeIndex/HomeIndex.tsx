import React, { forwardRef } from 'react';
import { useTranslations } from 'use-intl';
import { useMatch, useParams } from '@tanstack/react-router';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { routeTree } from '@/components/AppGlobalStackRouter/AppGlobalStackRouter';

import styles from './styles.module.scss';

interface IUViewProps extends IUiCompBaseProps {}

export const HomeIndex = forwardRef<HTMLDivElement, IUViewProps>(
  (props, ref) => {
    const { children, className } = props;

    const t = useTranslations();
    // const { lang } = useMatch();
    const params = useParams({ strict: false });

    // const a = homeR?.useParams();

    console.log('dd3333333d', params);

    // console.log(3333333, lang);

    return (
      <div
        className={cx(
          styles['comp-wrapper'],
          className,
          'g-uni-comp--HomeIndex',
        )}
      >
        <h1>{t('field.username')}</h1>
        <hr />
        <h1>{t('field.password')}</h1>
        <hr />
        <h2>{JSON.stringify(params)}</h2>

        <h2>lang可选: {params?.lang}</h2>
        <h2>id必选: {params?.id}</h2>
        {children}
      </div>
    );
  },
);
