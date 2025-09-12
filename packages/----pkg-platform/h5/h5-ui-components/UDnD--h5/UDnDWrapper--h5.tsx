import React, { useMemo } from 'react';
import type { DndContextProps } from '@dnd-kit/core';
import { DndContext } from '@dnd-kit/core';
import {
  createSnapModifier,
  restrictToParentElement,
} from '@dnd-kit/modifiers';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

interface IDnDWrapperProps extends IUiCompBaseProps, DndContextProps {
  children?: any;
  //
  onDragging?: (e: any) => void; // ONLY for RN
  snapGrid?: number;
  parentElementRef?: any;
}

export const UDnDWrapper = (props: IDnDWrapperProps) => {
  const snapModifier = useMemo(() => {
    if (typeof props.snapGrid === 'undefined') return undefined;

    return createSnapModifier(props.snapGrid);
  }, [props.snapGrid]);

  const boundingModifier = useMemo(() => {
    if (typeof props.parentElementRef === 'undefined') return undefined;

    return restrictToParentElement;
  }, [props.parentElementRef]);

  const modifiers = useMemo(() => {
    return [snapModifier, boundingModifier].filter((i) => i !== undefined);
  }, [props.snapGrid, props.parentElementRef]);

  const {
    className,
    onDragging, // ONLY for RN
    ...restProps
  } = props;

  return <DndContext modifiers={modifiers} {...restProps} />;
};
