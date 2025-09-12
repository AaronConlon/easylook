import React, { forwardRef } from 'react';
import { useTranslations } from 'use-intl';
import { useMatch, useParams } from '@tanstack/react-router';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import styles from './styles.module.scss';

interface IUViewProps extends IUiCompBaseProps {}

export const PageNotFoundIndex = forwardRef<HTMLDivElement, IUViewProps>(
  (props, ref) => {
    const { children, className } = props;

    console.log('PageNotFoundIndex.PageNotFoundIndex');

    const t = useTranslations();

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
        <h1>PageNotFoundIndex</h1>
        <h2>{JSON.stringify(params)}</h2>

        {children}
      </div>
    );
  },
);
