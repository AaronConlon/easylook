import type { VideoHTMLAttributes } from 'react';
import React, { forwardRef } from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

interface IUVideoPlayerProps
  extends IUiCompBaseProps,
    VideoHTMLAttributes<HTMLVideoElement> {
  accessible?: boolean; // FOR RN PROPS ONLY
  //
  children?: any;
}

interface IVideoPlayerRef extends HTMLVideoElement {}

export const UVideoPlayer = forwardRef<IVideoPlayerRef, IUVideoPlayerProps>(
  (props, ref) => {
    const {
      className,
      accessible, // FOR RN REST ONLY
      ...restProps
    } = props;

    return (
      <video
        ref={ref}
        className={cx('g-uni-comp--UVideoPlayer', className)}
        {...restProps}
      />
    );
  },
);
