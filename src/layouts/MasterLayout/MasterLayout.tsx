import { Outlet } from '@tanstack/react-router';

import type { ICompBaseProps } from '__shared__/typings/comp-type';

import { cx } from '__shared__/utils/cx-util';

import { use__DebugStore__ } from '@/stores/use__Debug__Store';

import { MasterHeader } from '@/layouts/MasterLayout/_comps/MasterHeader';
import { MasterFooter } from '@/layouts/MasterLayout/_comps/MasterFooter';

import { DebugBarButton } from '@/components/__Debug__/DebugBarButton';
import { DebugCssMediaLabel } from '@/components/__Debug__/DebugCssMediaLabel';
import { DebugReactQueryDevtools } from '@/components/__Debug__/DebugReactQueryDevtools';

import styles from './styles.module.scss';

interface IMasterLayoutProps extends ICompBaseProps {
  showHeader?: boolean;
  showFooter?: boolean;
}

export const MasterLayout = (props: IMasterLayoutProps) => {
  // forSTORE
  const debug$_IS_OPEN = use__DebugStore__((s) => s.debug$_IS_OPEN);
  // forSTORE

  const { className } = props;

  // App 与 ConfigProvider 先后顺序，App 只能在 ConfigProvider 之下才能使用 Token
  return (
    <div
      className={cx(
        styles['comp-wrapper'],
        className,
        'g-uni-comp--MasterLayout',
      )}
    >
      {props.showHeader ? <MasterHeader /> : null}

      {/* <NuqsAdapter> */}
      <Outlet />
      {/* </NuqsAdapter> */}

      {props.showFooter ? <MasterFooter /> : null}

      {debug$_IS_OPEN ? (
        <>
          <DebugBarButton />
          <DebugCssMediaLabel />
          <DebugReactQueryDevtools />
        </>
      ) : null}
    </div>
  );
};
