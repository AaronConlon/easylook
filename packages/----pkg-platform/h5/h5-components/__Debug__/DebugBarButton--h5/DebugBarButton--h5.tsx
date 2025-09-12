import React, { useState } from 'react';

import { hardReload } from '----pkg-uni/uni-utils/reload-util';
import { cx } from '----pkg-uni/uni-utils/cx-util';

import { UButton } from '----pkg-uni/uni-ui-components/UButton';
import { UEventButton } from '----pkg-uni/uni-ui-components/UEventButton';
import { UModal } from '----pkg-uni/uni-ui-components/UModal';
import { UText } from '----pkg-uni/uni-ui-components/UText';
import { UView } from '----pkg-uni/uni-ui-components/UView';

import { useIsDarkMode } from '----pkg-uni/uni-hooks/useIsDarkMode';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { LS_CONST_KEYS } from '----pkg-uni/uni-consts/ls-const';
import { use__DebugStore__ } from '----pkg-uni/uni-stores/use__Debug__Store';

import { DebugBarModalContent } from '../DebugBarModalContent--h5';

import styles from './styles.module.scss';

interface IProps extends IUiCompBaseProps {}

export const DebugBarButton: React.FC<IProps> = (props) => {
  const { isDarkMode } = useIsDarkMode();

  const [visible, setVisible] = useState(false);

  return (
    <UView
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
        <UText>D</UText>
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
    </UView>
  );
};
