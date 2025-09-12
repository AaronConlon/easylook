import React from 'react';
import type { FormProps } from 'antd';
import { Form as AntdForm } from 'antd';

import { cx } from '----pkg-uni/uni-utils/cx-util';

interface IUFormProps extends FormProps {
  children?: React.ReactNode | undefined;
}

export const UForm = (props: IUFormProps) => {
  const { className, ...restProps } = props;

  return (
    <AntdForm className={cx('g-uni-comp--UForm', className)} {...restProps} />
  );
};

Form.Item = AntdForm.Item;
Form.useForm = AntdForm.useForm;

export type { FormProps };
