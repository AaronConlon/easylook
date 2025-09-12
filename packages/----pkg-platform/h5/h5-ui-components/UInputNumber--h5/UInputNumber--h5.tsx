import type { InputNumberProps } from 'antd';
import { InputNumber as AntdInputNumber } from 'antd';

import { cx } from '----pkg-uni/uni-utils';

interface IInputNumberProps extends InputNumberProps {}

export const UInputNumber = (props: IInputNumberProps) => {
  const { className, ...restProps } = props;

  return (
    <AntdInputNumber
      className={cx('g-uni-comp--UInputNumber', className)}
      {...restProps}
    />
  );
};
