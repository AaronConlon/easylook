import React from 'react';
import copy from 'copy-to-clipboard';
import { useLocalStorage } from 'react-use';

import type { ICompBaseProps } from '__shared__/typings/comp-type';

import {
  THEME_CONST_THEME_KEYS,
  THEME_CONST_THEME_LABELS,
} from '__shared__/consts/theme-const';
import { LS_CONST_KEYS } from '__shared__/consts/ls-const';
import { hardReload } from '__shared__/utils/reload-util';
import { cx } from '__shared__/utils/cx-util';
import { destroyVConsole, insertVConsole } from '__shared__/utils/dom-util';
import { handleAxiosCatch } from '__shared__/utils/axios-util';
import { uiMessage } from '__shared__/utils/message-util';
import { appConfig } from '__shared__/configs/app-config';
import { urlConfig } from '__shared__/configs/url-config';
import { useIsDarkMode } from '__shared__/hooks/useIsDarkMode';
import { useNavigate } from '__shared__/hooks/useNavigate';

import { UModal } from '__shared__/ui-components/UModal';
import { UButton } from '__shared__/ui-components/UButton';
import { UInput } from '__shared__/ui-components/UInput';

import { axiosAuthInst } from '@/instances/axios-auth-inst';

import { useThemeStore } from '@/stores/useThemeStore';

import { AppVersionNumber } from '@/components/AppVersionNumber';

import styles from './styles.module.scss';

interface IProps extends ICompBaseProps {
  onCancelCb?: () => void;
  center?: boolean;
  onSetLsDebugMonitorInfoValue?: (v: '' | '1') => void;
}

export const DebugBarModalContent: React.FC<IProps> = (props) => {
  // forSTORE
  const theme$_appTheme = useThemeStore((s) => s.theme$_appTheme);
  const theme$_sysTheme = useThemeStore((s) => s.theme$_sysTheme);
  // forSTORE

  const { isDarkMode } = useIsDarkMode({ useThemeStore });

  const [postModal, postModalPlaceholder] = UModal.useModal();
  const navigate = useNavigate();

  const [lsDebugVConsoleLsValue, setLsDebugVConsoleLsValue] = useLocalStorage(
    LS_CONST_KEYS.__DEBUG__vConsole,
    localStorage.getItem(LS_CONST_KEYS.__DEBUG__vConsole),
    { raw: true },
  );

  const showCodeModal = (obj?: {}) => {
    postModal.info({
      zIndex: 99999999901,
      maskClosable: true,
      content: (
        <code>
          <UInput.TextArea
            rows={25}
            style={{ fontSize: 12 }}
            value={JSON.stringify(obj, null, 2)}
          />
        </code>
      ),
    });
  };

  const onCopyDom = (opts: { type: 'head' | 'body' }) => {
    axiosAuthInst
      .get<any, any>(window.location.href)
      .then((res) => {
        if (!res?.data) return;

        let copyStr = '';

        if (opts.type === 'head') {
          copyStr = res?.data?.match(/<head>([\s\S]*)<\/head>/)?.[1] || '';
        }

        if (opts.type === 'body') {
          copyStr = res?.data?.match(/<body.*?>([\s\S]*)<\/body>/)?.[1] || '';
        }

        copyStr = copyStr
          ?.trim()
          ?.replaceAll('\n', '')
          ?.replaceAll('  ', ' ')
          ?.replaceAll('  ', ' ')
          ?.replaceAll('  ', ' ')
          ?.replaceAll('/> <', '/>\n<')
          ?.replaceAll('/><', '/>\n<');

        const titleTagStr = copyStr?.match(/<title>.*<\/title>/)?.[0];

        // 去掉 title tag
        // 在后台 page 页面是可以设置 title 的，在这里 copy 反而会让设置的 title 失效
        if (titleTagStr) {
          copyStr = copyStr.replace(titleTagStr, '');
        }

        console.log('copyStr', copyStr);
        copy(copyStr);

        if (copyStr) {
          const msgStr = `已复制 html ${opts.type} 代码片段`;
          console.log(msgStr);
          uiMessage.success(msgStr);
        } else {
          const msgStr = `复制失败`;
          console.error(msgStr);
          uiMessage.error(msgStr);
        }
      })
      .catch(handleAxiosCatch);
  };

  //
  //
  //
  //

  return (
    <div
      className={cx(
        styles['comp-wrapper'],
        { [styles['comp-wrapper--center']]: props.center },
        props.className,
        `g-comp--${DebugBarModalContent.displayName}`,
      )}
      style={props.style}
    >
      {postModalPlaceholder}

      <div className={styles['debug-title-wrapper']}>
        <div className={styles['debug-title']}>
          <span className={styles['fish']}>🎏</span> {appConfig.NAME}
          <AppVersionNumber className={styles['build-version']} showBuildtime />
        </div>
      </div>

      <div className={styles['jump-btn-wrapper']}>
        <div>
          <UButton onClick={() => navigate({ to: '/' })}>HOME</UButton>

          {/* <UButton onClick={() => navigate({ to: '/test/any' })}>Any</UButton> */}

          <UButton onClick={() => hardReload()}>H-RF</UButton>
          {/*<button onClick={() => softReload()}>S-RF</button>*/}
        </div>

        {/* ------------------------ */}

        <div>
          <UButton
            className={cx({
              [styles['feature-is-enabled']]: lsDebugVConsoleLsValue,
            })}
            onClick={() => {
              if (!window.VConsole) {
                setLsDebugVConsoleLsValue('1');
                console.log('insert VConsole');
                insertVConsole({ keepState: true, useThemeStore });
                return;
              }

              if (window.VConsole && window.vConsole) {
                setLsDebugVConsoleLsValue('');
                destroyVConsole({ keepState: true });
              } else if (window.VConsole && !window.vConsole) {
                setLsDebugVConsoleLsValue('1');
                console.log('new VConsole');
                // @ts-ignore

                window.vConsole = new VConsole();
                setLsDebugVConsoleLsValue('1');
              }
            }}
          >
            vC
          </UButton>

          <UButton
            onClick={() =>
              showCodeModal({
                UA: navigator.userAgent,
              })
            }
          >
            ua
          </UButton>

          {/*<button onClick={() => showCodeModal(window.__CONFIGS__)}>*/}
          {/*  cfg*/}
          {/*</button>*/}
        </div>

        {/* ------------------------ */}

        <div>
          <UButton onClick={() => onCopyDom({ type: 'body' })}>cpBody</UButton>

          <UButton onClick={() => onCopyDom({ type: 'head' })}>
            ✂️ cpHead
          </UButton>
        </div>
      </div>

      {/*  -------- */}
      {/*  -------- */}
      {/*  -------- */}
      {/*  -------- */}
      {/*  -------- */}
      {/*  -------- */}
      {/*  -------- */}
      {/*  -------- */}

      <div className={styles['test-env-wrapper']}>
        <div className={styles['cur-url']}>
          <span>URL: {window.location.href}</span>
        </div>
        <div className={styles['cur-api']}>
          <UInput.TextArea
            value={JSON.stringify(urlConfig, null, 2)
              .replace('{', '')
              .replace('}', '')
              .replaceAll(' ', '')
              .trim()}
            className={styles['cur-api-textarea']}
            size="small"
            rows={2}
            style={{ resize: 'none' }}
          />
        </div>

        <UButton
          onClick={() => {
            console.log(window.location.href);
          }}
        >
          showURL
        </UButton>

        <div className={styles['cur-api']}>
          <div className={styles['theme-info']}>
            <div>
              <span>
                appTheme (固化):
                <code>{JSON.stringify(theme$_appTheme)}</code>
              </span>

              <span>sysTheme: {JSON.stringify(theme$_sysTheme)}</span>

              <span>isDarkMode: {JSON.stringify(isDarkMode)}</span>
            </div>

            <div className={styles['theme-buttons']}>
              <UButton
                type="primary"
                onClick={() => {
                  useThemeStore
                    .getState()
                    .theme$_set_appTheme(THEME_CONST_THEME_KEYS.DEFAULT);
                }}
              >
                {THEME_CONST_THEME_LABELS[THEME_CONST_THEME_KEYS.DEFAULT]}
              </UButton>

              <UButton
                onClick={() => {
                  useThemeStore
                    .getState()
                    .theme$_set_appTheme(THEME_CONST_THEME_KEYS.DARK);
                }}
              >
                {THEME_CONST_THEME_LABELS[THEME_CONST_THEME_KEYS.DARK]}
              </UButton>

              <UButton
                onClick={() => {
                  useThemeStore
                    .getState()
                    .theme$_set_appTheme(THEME_CONST_THEME_KEYS.LIGHT);
                }}
              >
                {THEME_CONST_THEME_LABELS[THEME_CONST_THEME_KEYS.LIGHT]}
              </UButton>
            </div>
          </div>

          {/*<AppGlobalThemeRadio className={styles['setting-theme']} />*/}
        </div>
      </div>
    </div>
  );
};
