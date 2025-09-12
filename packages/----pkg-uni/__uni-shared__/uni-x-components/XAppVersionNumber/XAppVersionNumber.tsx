import React, { useEffect, useRef, useState } from 'react';

import { calcVersion } from '----pkg-uni/uni-utils/version-util';
import { checktDebugBarPasswordHash } from '----pkg-uni/uni-utils/__DEBUG__util';
import { cx } from '----pkg-uni/uni-utils/cx-util';

import { appConfig } from '----pkg-uni/uni-configs/app-config';
import { buildConfig } from '----pkg-uni/uni-configs/build-config';

import { UInput } from '----pkg-uni/uni-ui-components/UInput';
import { UBr } from '----pkg-uni/uni-ui-components/UBr';
import { UButton } from '----pkg-uni/uni-ui-components/UButton';
import { UEventButton } from '----pkg-uni/uni-ui-components/UEventButton';
import { UModal } from '----pkg-uni/uni-ui-components/UModal';
import { UText } from '----pkg-uni/uni-ui-components/UText';
import { UView } from '----pkg-uni/uni-ui-components/UView';

import { useMessage } from '----pkg-uni/uni-hooks/useMessage';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { useAppStore } from '----pkg-uni/uni-stores/useAppStore';
import { lskv } from '----pkg-uni/uni-libs/lskv-lib';
import { LS_CONST_KEYS } from '----pkg-uni/uni-consts/ls-const';
import { use__DebugStore__ } from '----pkg-uni/uni-stores/use__Debug__Store';

import styles from './styles.module.scss';

interface IProps extends IUiCompBaseProps {
  hiddenVersionNumber?: boolean;
  showAppName?: boolean;
  showBuildtime?: boolean;
}

const OPEN_DEBUG_COUNT = 1;

export const XAppVersionNumber: React.FC<IProps> = (props) => {
  const passwordInputRef = useRef<any>(null);
  const { message } = useMessage();

  const [debugCount, setDebugCount] = useState(0);
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const [password, setPassword] = useState<string>('');

  const onClickDebugCount = () => {
    setDebugCount(debugCount + 1);
    console.log('debugCount', debugCount);
  };

  const onClosePasswordModal = () => {
    setDebugCount(0);
    setPasswordModalOpen(false);
    setPassword('');
  };

  const onSubmitPassword = () => {
    if (!password) {
      onClosePasswordModal();
      return;
    }

    const { isMatch, inputPassword } = checktDebugBarPasswordHash(password);

    if (!isMatch) {
      onClosePasswordModal();
      return;
    }

    console.log('OK!');
    use__DebugStore__.getState().debug$_set_IS_OPEN(true);
    lskv.setItem(LS_CONST_KEYS.appDebugMode, inputPassword);
    onClosePasswordModal();
    // hardReload({ url: window.location.href });
  };

  useEffect(() => {
    if (debugCount >= OPEN_DEBUG_COUNT) {
      // if (debugCount >= 2) {
      setPasswordModalOpen(true);

      setTimeout(() => {
        passwordInputRef?.current?.focus?.();
      }, 0);
    }
  }, [debugCount]);

  // eslint-disable-next-line @typescript-eslint/no-deprecated
  const buildHash = (buildConfig?.COMMIT_HASH || '').substr(0, 4);

  // eslint-disable-next-line @typescript-eslint/no-deprecated
  const buildTs = (buildConfig?.BUILD_TIME || '').substr(9, 4);

  const buildTime = props.showBuildtime ? `${buildHash}${buildTs}` : '';

  const onDeleteDebugMode = () => {
    use__DebugStore__.getState().debug$_set_IS_OPEN(false);
    onClosePasswordModal();
  };

  return (
    <UView>
      <UEventButton
        onClick={onClickDebugCount}
        className={cx(
          styles['comp-wrapper'],
          props.className,
          `g-comp--VersionNumber`, // TIPS: g-comp--undefined
        )}
        // style={props.style}
      >
        <UView>
          {props.hiddenVersionNumber ? null : (
            <UText
            // className={cx(styles['build-version'], 'g-css--build-version')}
            >
              '-'
              {calcVersion()}
              {appConfig?.__IS_DEV__ ? <UText> DEV</UText> : null}
            </UText>
          )}

          <UText
          // className={cx(styles['build-time'], 'g-css--build-time')}
          >
            {buildTime}
            {appConfig?.__IS_DEV__ && props.showAppName
              ? ` ${appConfig?.NAME || ''}`
              : null}
          </UText>
        </UView>
      </UEventButton>

      {/* 密码弹窗 */}
      {/* 密码弹窗 */}
      {/* 密码弹窗 */}

      <UModal
        // className={cx(styles['comp-wrapper'])}
        open={passwordModalOpen}
        onCancel={() => setPasswordModalOpen(false)}
        // visible={passwordModalOpen}
        destroyOnHidden
        closeIcon={null}
        cancelText={null}
        // maskClosable
        // maskClosable={false}
        footer={null}
        // footer={false}
      >
        <UView
        // className={styles['input-password-wrapper']}
        >
          <UView gap="small">
            <UButton onClick={onClosePasswordModal} type="primary">
              ! ! ! CLOSE ME ! ! !
            </UButton>

            <UButton onClick={onDeleteDebugMode} type="dashed">
              ! ! ! DELETE DEBUG ! ! !
            </UButton>
          </UView>

          <UBr />

          <UView row gap="small">
            <UInput
              ref={passwordInputRef}
              value={password}
              // autoFocus
              // @ts-ignore
              onChange={(e) => setPassword(e?.target?.value)}
              onPressEnter={onSubmitPassword}
              // placeholder="请输入密码..."
            />

            <UButton onClick={onSubmitPassword} type="default">
              gøød luck3
            </UButton>
          </UView>
        </UView>
      </UModal>
    </UView>
  );
};
