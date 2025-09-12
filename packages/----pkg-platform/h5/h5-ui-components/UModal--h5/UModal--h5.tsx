import type { ModalProps } from 'antd';
import { Modal as AntdModal } from 'antd';
import React from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import styles from './styles.module.scss';

interface IModalProps extends ModalProps {}

export const UModal = (props: IModalProps) => {
  const { className, centered = true, ...restProps } = props;

  return (
    <AntdModal
      className={cx('g-uni-comp--UModal', styles['comp-wrapper'], className)}
      centered={centered}
      {...restProps}
    />
  );
};

UModal.useModal = AntdModal.useModal;
UModal.destroyAll = AntdModal.destroyAll;
UModal.config = AntdModal.config;
