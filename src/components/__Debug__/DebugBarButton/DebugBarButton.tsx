import React, { useState } from 'react';

import type { ICompBaseProps } from '__shared__/typings/comp-type';

import { cx } from '__shared__/utils/cx-util';
import { useIsDarkMode } from '__shared__/hooks/useIsDarkMode';

import { UButton } from '__shared__/ui-components/UButton';
import { UEventButton } from '__shared__/ui-components/UEventButton';
import { UModal } from '__shared__/ui-components/UModal';

import { use__DebugStore__ } from '@/stores/use__Debug__Store';
import { useThemeStore } from '@/stores/useThemeStore';

import { DebugBarModalContent } from '@/components/__Debug__/DebugBarModalContent';

import styles from './styles.module.scss';

interface IProps extends ICompBaseProps {}

export const DebugBarButton = (props: IProps) => {
  const { isDarkMode } = useIsDarkMode({ useThemeStore });

  const [visible, setVisible] = useState(false);

  return (
    <div
      className={cx(
        styles['comp-wrapper'],
        {
          [styles['comp-wrapper--isDarkMode']]: isDarkMode,
        },
        props.className,
        `g-comp--DebugBarButton`,
      )}
      style={props.style}
    >
      <UEventButton
        onClick={() => setVisible(true)}
        className={styles['debug-bar-button']}
      >
        D
      </UEventButton>

      <UModal
        zIndex={1005} // msg 是 2010，这里比 msg 小 1 即可
        centered
        open={visible}
        // maskClosable={false}
        footer={false}
        onCancel={() => setVisible(false)}
        className={styles['debug-bar-modal']}
        wrapClassName={styles['debug-bar-modal-wrapper']}
      >
        <DebugBarModalContent
          className={styles['modal-content']}
          center
          onCancelCb={() => setVisible(false)}
        />

        <div className={styles['disable-debugbar-wrapper']}>
          <UButton
            size="small"
            type="text"
            onClick={() => {
              use__DebugStore__.getState().debug$_remove_DEBUGBAR();
            }}
          >
            disable debugbar
          </UButton>
        </div>
      </UModal>
    </div>
  );
};
