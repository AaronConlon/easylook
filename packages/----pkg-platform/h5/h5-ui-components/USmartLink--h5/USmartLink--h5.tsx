import type { LinkProps, ToPathOption } from '@tanstack/react-router';
import { Link as RRLink } from '@tanstack/react-router';
import React, { forwardRef } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import styles from './styles.module.scss';

interface IUSmartLinkProps extends IUiCompBaseProps {
  href?: string;
  to?: ToPathOption;
  openInNewTab?: boolean;
  title?: string;
  lang?: string;
  alt?: string;
  onClick?: () => void;
}

export const USmartLink = forwardRef<
  React.ForwardRefExoticComponent<
    LinkProps & React.RefAttributes<HTMLAnchorElement>
  >,
  IUSmartLinkProps
  // @ts-ignore
>((props, ref) => {
  const { className, href, lang, openInNewTab, to, children, ...restProps } =
    props;

  if (typeof to !== 'undefined') {
    return (
      <RRLink
        to={to}
        // ref={ref as any}
        className={cx(
          'g-uni-comp--USmartLink',
          'g-uni-comp--USmartLink--RRLink',
          styles['comp-wrapper'],
          className,
        )}
        {...restProps}
      >
        {children}
      </RRLink>
    );
  }

  if (typeof href !== 'undefined') {
    return (
      <a
        ref={ref as any}
        href={href}
        className={cx(
          'g-uni-comp--USmartLink',
          'g-uni-comp--USmartLink--a',
          styles['comp-wrapper'],
          className,
        )}
        target={openInNewTab ? '_blank' : '_self'}
        {...restProps}
      >
        {children}
      </a>
    );
  }

  console.error('ERROR LINK');
  return null;
});
