import React, { useEffect, useRef, useState } from 'react';

import { hardReload } from '----pkg-uni/uni-utils/reload-util';
import { calcVersion } from '----pkg-uni/uni-utils/version-util';
import { checktDebugBarPasswordHash } from '----pkg-uni/uni-utils/__DEBUG__util';
import { cx } from '----pkg-uni/uni-utils/cx-util';

import { appConfig } from '----pkg-uni/uni-configs/app-config';
import { buildConfig } from '----pkg-uni/uni-configs/build-config';

import type {
  IAntdInputProps,
  IAntdInputRef,
} from '----pkg-uni/uni-ui-components/UInput';
import { UInput } from '----pkg-uni/uni-ui-components/UInput';
import { UBr } from '----pkg-uni/uni-ui-components/UBr';
import { UButton } from '----pkg-uni/uni-ui-components/UButton';
import { UEventButton } from '----pkg-uni/uni-ui-components/UEventButton';
import { UModal } from '----pkg-uni/uni-ui-components/UModal';
import { UText } from '----pkg-uni/uni-ui-components/UText';
import { UView } from '----pkg-uni/uni-ui-components/UView';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { LS_CONST_KEYS } from '----pkg-uni/uni-consts/ls-const';

import styles from './styles.module.scss';

interface IProps extends IUiCompBaseProps {
  hiddenVersionNumber?: boolean;
  showAppName?: boolean;
  showBuildtime?: boolean;
}

export const AppVersionNumber: React.FC<IProps> = (props) => {
  const passwordInputRef = useRef<IAntdInputRef>(null);

  const [debugCount, setDebugCount] = useState(0);
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const [password, setPassword] = useState<string>('');

  const onClickDebugCount = () => setDebugCount(debugCount + 1);

  const onClosePasswordModal = () => {
    setDebugCount(18);
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

    localStorage.setItem(LS_CONST_KEYS.appDebugMode, inputPassword);
    hardReload({ url: window.location.href });
  };

  useEffect(() => {
    if (debugCount >= 20) {
      // if (debugCount >= 2) {
      setPasswordModalOpen(true);

      setTimeout(() => {
        passwordInputRef.current?.focus?.();
      }, 0);
    }
  }, [debugCount]);

  return (
    <>
      <UEventButton
        className={cx(
          styles['comp-wrapper'],
          props.className,
          `g-comp--VersionNumber`, // TIPS: g-comp--undefined
        )}
        style={props.style}
        onClick={onClickDebugCount}
      >
        {props.hiddenVersionNumber ? null : (
          <UText
            className={cx(styles['build-version'], 'g-css--build-version')}
          >
            {calcVersion()}
            {appConfig.__IS_DEV__ ? <UText> DEV</UText> : null}
          </UText>
        )}

        {props.showBuildtime ? (
          <UText className={cx(styles['build-time'], 'g-css--build-time')}>
            {/* eslint-disable-next-line @typescript-eslint/no-deprecated */}
            {`${buildConfig.COMMIT_HASH}`.substr(0, 4)}
            {/* 20201013-122101 -> 1221 // ONLY TIME */}
            {/* eslint-disable-next-line @typescript-eslint/no-deprecated */}
            {`${buildConfig.BUILD_TIME}`.substr(9, 4)}
            {appConfig.__IS_DEV__ && props.showAppName
              ? ` ${appConfig.NAME}`
              : null}
          </UText>
        ) : null}
      </UEventButton>

      {/* 密码弹窗 */}
      {/* 密码弹窗 */}
      {/* 密码弹窗 */}

      <UModal
        className={cx(styles['comp-wrapper'])}
        open={passwordModalOpen}
        destroyOnHidden
        title={
          <UView className={styles['input-password-wrapper']}>
            <UButton onClick={onClosePasswordModal} type="primary" size="large">
              ! ! ! CLOSE ME ! ! !
            </UButton>

            <UBr />
            <UBr />
            <UBr />

            <UInput
              size="large"
              ref={passwordInputRef}
              autoFocus
              onChange={(e: any) => setPassword(e?.target?.value)}
              onPressEnter={onSubmitPassword}
              placeholder="请输入密码..."
            />

            <UBr />
            <UBr />
            <UBr />

            <UButton onClick={onSubmitPassword} type="default">
              gøød luck2
            </UButton>
          </UView>
        }
        closeIcon={null}
        cancelText={null}
        maskClosable={false}
        footer={null}
      />
    </>
  );
};
