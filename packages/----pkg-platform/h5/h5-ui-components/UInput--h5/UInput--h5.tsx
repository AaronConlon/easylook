import React, { forwardRef } from 'react';
import { Input as AntdInput } from 'antd';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type {
  InputRef as IAntdInputRef,
  InputProps as IAntdInputProps,
} from 'antd';

export { IAntdInputRef, IAntdInputProps };

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { useIsDarkMode } from '----pkg-uni/uni-hooks/useIsDarkMode';

import styles from './styles.module.scss';

interface IInputProps extends IAntdInputProps {}

type IInputRef = IAntdInputRef;

const _InputBase = forwardRef<IInputRef, IInputProps>((props, ref) => {
  const { isDarkMode } = useIsDarkMode();

  const { className, ...restProps } = props;

  return (
    <AntdInput
      ref={ref}
      className={cx(
        'g-uni-comp--UInput',
        styles['comp-wrapper'],
        {
          [styles['comp-wrapper--isDarkMode']]: isDarkMode,
        },
        className,
      )}
      {...restProps}
    />
  );
});

// Input.Password = AntdInput.Password;

// 为 InputBase 添加 Password 静态属性，并显式指定类型
export const UInput: ForwardRefExoticComponent<
  IInputProps & RefAttributes<IInputRef>
> & {
  Password: typeof AntdInput.Password;
  // eslint-disable-next-line @typescript-eslint/no-deprecated
  Group: typeof AntdInput.Group;
  Search: typeof AntdInput.Search;
  TextArea: typeof AntdInput.TextArea;
  OTP: typeof AntdInput.OTP;
} = Object.assign(_InputBase, {
  Password: AntdInput.Password,
  // eslint-disable-next-line @typescript-eslint/no-deprecated
  Group: AntdInput.Group,
  Search: AntdInput.Search,
  TextArea: AntdInput.TextArea,
  OTP: AntdInput.OTP,
});
