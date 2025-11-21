//
import React, { forwardRef } from 'react';

import { cx } from '__shared__/utils/cx-util';

import styles from './styles.module.scss';

interface IUHtmlLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  openInNewTab?: boolean;
}

export const UHtmlLink = forwardRef<
  React.ForwardRefExoticComponent<IUHtmlLinkProps>,
  IUHtmlLinkProps
>((props, ref) => {
  const { className, href, lang, openInNewTab, children, ...restProps } = props;

  return (
    <a
      ref={ref as any}
      href={href}
      className={cx(
        'g-uni-comp--UHtmlLink',
        'g-uni-comp--UHtmlLink--a',
        styles['comp-wrapper'],
        className,
      )}
      target={openInNewTab ? '_blank' : '_self'}
      {...restProps}
    >
      {children}
    </a>
  );
});
