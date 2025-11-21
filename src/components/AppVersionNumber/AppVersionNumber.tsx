import React, { useEffect, useRef, useState } from 'react';

import type { ICompBaseProps } from '__shared__/typings/comp-type';

import { LS_CONST_KEYS } from '__shared__/consts/ls-const';
import { hardReload } from '__shared__/utils/reload-util';
import { calcVersion } from '__shared__/utils/version-util';
import { checktDebugBarPasswordHash } from '__shared__/utils/__DEBUG__util';
import { cx } from '__shared__/utils/cx-util';
import { appConfig } from '__shared__/configs/app-config';
import { buildConfig } from '__shared__/configs/build-config';

import { UInput } from '__shared__/ui-components/UInput';
import { UButton } from '__shared__/ui-components/UButton';
import { UEventButton } from '__shared__/ui-components/UEventButton';
import { UModal } from '__shared__/ui-components/UModal';

import styles from './styles.module.scss';

interface IProps extends ICompBaseProps {
  hiddenVersionNumber?: boolean;
  showAppName?: boolean;
  showBuildtime?: boolean;
}

export const AppVersionNumber = (props: IProps) => {
  const passwordInputRef = useRef<any>(null);

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
          <span className={cx(styles['build-version'], 'g-css--build-version')}>
            {calcVersion()}
            {appConfig.__IS_DEV__ ? 'DEV' : null}
          </span>
        )}

        {props.showBuildtime ? (
          <span className={cx(styles['build-time'], 'g-css--build-time')}>
            {/* eslint-disable-next-line @typescript-eslint/no-deprecated */}
            {`${buildConfig.COMMIT_HASH}`.substr(0, 4)}
            {/* 20201013-122101 -> 1221 // ONLY TIME */}
            {/* eslint-disable-next-line @typescript-eslint/no-deprecated */}
            {`${buildConfig.BUILD_TIME}`.substr(9, 4)}
            {appConfig.__IS_DEV__ && props.showAppName
              ? ` ${appConfig.NAME}`
              : null}
          </span>
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
          <div className={styles['input-password-wrapper']}>
            <UButton onClick={onClosePasswordModal} type="primary" size="large">
              ! ! ! CLOSE ME ! ! !
            </UButton>

            <br />
            <br />
            <br />

            <UInput
              size="large"
              ref={passwordInputRef}
              autoFocus
              onChange={(e: any) => setPassword(e?.target?.value)}
              onPressEnter={onSubmitPassword}
              placeholder="请输入密码..."
            />

            <br />
            <br />
            <br />

            <UButton onClick={onSubmitPassword} type="default">
              gøød luck2
            </UButton>
          </div>
        }
        closeIcon={null}
        cancelText={null}
        maskClosable={false}
        footer={null}
      />
    </>
  );
};
