import React from 'react';
import { useDraggable } from '@dnd-kit/core';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { UView } from '----pkg-uni/uni-ui-components/UView';
import { UText } from '----pkg-uni/uni-ui-components/UText';

import { useIsDarkMode } from '----pkg-uni/uni-hooks/useIsDarkMode';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import styles from './styles.module.scss';

interface IDnDItemProps extends IUiCompBaseProps {
  item?: { id?: string; x: number; y: number; label?: string };
  parentElementRef?: any;
  classNames?: {
    textClassName?: string;
  };
}

export const UDnDItem = (props: IDnDItemProps) => {
  const { isDarkMode } = useIsDarkMode();

  const {
    className,
    style,
    item,
    parentElementRef, // for RN ONLY
    classNames,
    ...restProps
  } = props;

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props?.item?.id || '0',
  });

  const mergeStyle = {
    position: 'absolute' as const,
    left: (item?.x || 0) + (transform?.x ?? 0),
    top: (item?.y || 0) + (transform?.y ?? 0),
    cursor: 'grab',
    userSelect: 'none' as const,
    ...style,
  };

  return (
    <UView
      ref={setNodeRef}
      style={mergeStyle}
      className={cx(
        styles['comp-wrapper'],
        {
          [styles['comp-wrapper--isDarkMode']]: isDarkMode,
        },
        props.className,
        'g-uni-comp--UDnDItem',
      )}
      {...listeners}
      {...attributes}
      {...restProps}
    >
      <UText
        className={cx(
          styles['dnd-item-text'],
          {
            [styles['dnd-item-text--isDarkMode']]: isDarkMode,
          },
          props.classNames?.textClassName,
          'g-uni-comp--UDnDItem-dnd-item-text',
        )}
      >
        {item?.label}
      </UText>
    </UView>
  );
};
