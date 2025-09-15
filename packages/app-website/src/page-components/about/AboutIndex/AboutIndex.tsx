import React, { forwardRef } from 'react';
import { useTranslations } from 'use-intl';
import { useParams } from '@tanstack/react-router';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import styles from './styles.module.scss';

interface IUViewProps extends IUiCompBaseProps {}

export const AboutIndex = forwardRef<HTMLDivElement, IUViewProps>(
  (props, ref) => {
    const { children, className } = props;

    const t = useTranslations();
    const params = useParams({ strict: false });

    return (
      <div
        className={cx(
          styles['comp-wrapper'],
          className,
          'g-uni-comp--AboutIndex',
        )}
      >
        ABOUT
        {children}
      </div>
    );
  },
);
