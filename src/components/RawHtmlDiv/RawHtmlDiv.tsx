import type { AnimationEventHandler } from 'react';
import React, { useRef, useState } from 'react';
import { InView } from 'react-intersection-observer';

import type { ICompBaseProps } from '__shared__/typings/comp-type';

import { cx } from '__shared__/utils/cx-util';

import styles from './styles.module.scss';

interface IProps extends ICompBaseProps {
  children?: string | undefined | null;
  ignoreBrGap?: boolean;
  onAnimationEnd?: AnimationEventHandler<any> | undefined;
  onAllLineAnimationEnd?: AnimationEventHandler<any> | undefined;
  divWrapEveryLine?: {
    mode?: '\n' | 'p' | 'ul' | 'ul-and-p'; // 默认 \n
    lineAnimation?: boolean;
  };
  inViewSkip?: boolean;
}

export const RawHtmlDiv = (props: IProps) => {
  const [htmlInview, setHtmlInview] = useState(false);
  const lineCountRef = useRef<number>(0);
  const lineCurRef = useRef<number>(0);

  if (!props.children) return null;

  let __html = '';

  if (props.divWrapEveryLine && props.divWrapEveryLine?.mode) {
    if (props.divWrapEveryLine?.mode === 'ul-and-p') {
      const splitArr = props.children
        .split(`</li>`)
        ?.filter((item) => item !== '');
      lineCountRef.current = splitArr.length;

      __html = splitArr?.reduce((t, v, i) => {
        return `${t}${v.replace(`<li`, `<li class="g-css--raw-html-div-line" style="--line-index: ${i};"`)}`;
      }, '');

      const splitArr2 = __html?.split(`</p>`)?.filter((item) => item !== '');
      lineCountRef.current = splitArr2.length;

      __html = splitArr2?.reduce((t, v, i) => {
        return `${t}${v.replace(`<p`, `<p class="g-css--raw-html-div-line" style="--line-index: ${i};"`)}`;
      }, '');
    }

    if (props.divWrapEveryLine?.mode === 'p') {
      const splitArr = props.children
        ?.split(`</p>`)
        ?.filter((item) => item !== '');
      lineCountRef.current = splitArr.length;

      __html = splitArr?.reduce((t, v, i) => {
        return `${t}${v.replace(`<p`, `<p class="g-css--raw-html-div-line" style="--line-index: ${i};"`)}`;
      }, '');
    }

    if (props.divWrapEveryLine?.mode === 'ul') {
      const splitArr = props.children
        .split(`</li>`)
        ?.filter((item) => item !== '');
      lineCountRef.current = splitArr.length;

      __html = splitArr?.reduce((t, v, i) => {
        return `${t}${v.replace(`<li`, `<li class="g-css--raw-html-div-line" style="--line-index: ${i};"`)}`;
      }, '');
    }
  } else {
    lineCountRef.current = 1;

    __html =
      props.children?.replaceAll(
        '\n',

        // br 在 Safari 中不生效，所以替换为 div class
        '<div class="g-css--text-division-line"></div>',
      ) || '';
  }

  return (
    <InView
      triggerOnce
      skip={props.inViewSkip}
      // -------- 上   右  下   左
      // rootMargin="-5px 0% -5px 0%"
      // rootMargin="-5px 0% -5px 0%"
      rootMargin="-1px 0% -10% 0%"
      onChange={(v) => {
        if (!v) return;
        setHtmlInview(v);
      }}
      className={cx(
        styles['comp-wrapper'],
        {
          [styles['comp-wrapper--ignoreBrGap']]: props.ignoreBrGap,
          [styles['comp-wrapper--RawHtmlDiv-htmlInview']]: htmlInview,
          [styles['comp-wrapper--RawHtmlDiv-lineAnimation']]:
            props.divWrapEveryLine?.lineAnimation,
          [styles['comp-wrapper--RawHtmlDiv-lineAnimation-htmlInview']]:
            htmlInview && props.divWrapEveryLine?.lineAnimation,
        },
        props.className,
        `g-comp--RawHtmlDiv`,
      )}
      style={props.style}
      dangerouslySetInnerHTML={{
        __html,
      }}
      onAnimationEnd={(e) => {
        props?.onAnimationEnd?.(e);

        lineCurRef.current += 1;

        if (lineCurRef.current === lineCountRef.current) {
          props?.onAllLineAnimationEnd?.(e);
        }
      }}
    />
  );
};
