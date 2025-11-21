import React, { forwardRef, useState } from 'react';
import { useInterval } from 'react-use';

import type { ICompBaseProps } from '__shared__/typings/comp-type';

import { useNavigate } from '__shared__/hooks/useNavigate';
import { cx } from '__shared__/utils/cx-util';

import { URouteLink } from '__shared__/ui-components/URouteLink';

import { Route } from '@/routes/__root';

import styles from './styles.module.scss';

interface IProps extends ICompBaseProps {}

const AUTO_CLOSE_SEC = 5;

export const PageNotFoundIndex = forwardRef<HTMLDivElement, IProps>(
  (props, ref) => {
    const { children, className } = props;

    const navigate = useNavigate();

    const [sec, setSec] = useState(AUTO_CLOSE_SEC);

    useInterval(() => {
      setSec(sec - 1);

      if (sec === 1) {
        navigate({ from: Route.fullPath, to: '/' });
      }
    }, 1000);

    console.log('PageNotFoundIndex.PageNotFoundIndex');

    return (
      <div
        className={cx(
          styles['comp-wrapper'],
          className,
          'g-uni-comp--Error404',
        )}
      >
        <h1 className={cx(styles['title'])}>
          <code>404</code>
        </h1>

        <div className={cx(styles['sub-title'])}>Page Not Found</div>

        <div className={cx(styles['auto-to-index'])}>{sec}s to home</div>

        <URouteLink to="/" className={cx(styles['back-to-index'])}>
          &lt;- back
        </URouteLink>
        {children}
      </div>
    );
  },
);
