import React, { forwardRef, useImperativeHandle, useRef } from 'react';

import type { ICompBaseProps } from '__shared__/typings/comp-type';

import { cx } from '__shared__/utils/cx-util';

import styles from './styles.module.scss';

export interface IEventButtonProps
  extends ICompBaseProps,
    React.HTMLAttributes<HTMLSpanElement> {
  block?: boolean;
  alt?: string;
  onClick?: (e: any) => void;
  disabled?: boolean;
  stopPropagation?: boolean;
  children?: React.ReactNode;
  //
  style?: any;
}

export interface IUIKitV2EventButtonRef {
  onClick: (e?: any) => void;
  eventButtonRef: any;
}

export const UEventButton = forwardRef<
  IUIKitV2EventButtonRef,
  IEventButtonProps
>((props, ref) => {
  const eventButtonRef = useRef<HTMLSpanElement | any>(null);

  const onClick = (e?: any) => {
    if (props.disabled) return;

    if (props.stopPropagation) {
      e?.preventDefault();
      e?.stopPropagation();
    }

    if (props.onClick) props.onClick(e);
  };

  useImperativeHandle(ref, () => ({ onClick, eventButtonRef }));

  const calcAriaLabel = () => {
    if (props.alt) return props.alt;

    if (typeof props.children === 'string') {
      return props.children;
    }

    return 'EventButton';
  };

  return (
    // 不直接使用 button 是应为 button 默认太多 default style
    // 而选用 span 代替 button 是因为 span 和 button 都是 inline element

    <span
      ref={eventButtonRef}
      role="button"
      tabIndex={0}
      // @ts-ignore
      style={props.style}
      onClick={onClick}
      title={calcAriaLabel()}
      aria-label={calcAriaLabel()}
      id={props.id}
      //

      {...props}
      //
      className={cx(
        styles['comp-wrapper'],
        props.className,
        {
          // forCX
          [styles['comp-wrapper--block']]: props.block,
          [styles['comp-wrapper--disabled']]: props.disabled,
          // forCX
        },
        `g-comp--EventButton`,
      )}
    >
      {props.children}
    </span>
  );
});
