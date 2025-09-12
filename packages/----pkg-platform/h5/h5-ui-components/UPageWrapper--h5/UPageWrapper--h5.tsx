import React, { forwardRef } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { UScrollView } from '----pkg-uni/uni-ui-components/UScrollView';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import styles from './styles.module.scss';

interface IUViewProps extends IUiCompBaseProps {
  edges?: any;
}

export const UPageWrapper = forwardRef<HTMLDivElement, IUViewProps>(
  (props, ref) => {
    const { className, ...restProps } = props;

    return (
      <UScrollView
        ref={ref}
        className={cx(
          'g-uni-comp--UniPageView',
          styles['comp-wrapper'],
          className,
        )}
        {...restProps}
      />
    );
  },
);
