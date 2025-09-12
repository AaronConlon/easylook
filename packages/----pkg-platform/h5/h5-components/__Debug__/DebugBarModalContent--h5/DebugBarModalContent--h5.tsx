import React from 'react';
import copy from 'copy-to-clipboard';
import { useLocalStorage } from 'react-use';

import { hardReload } from '----pkg-uni/uni-utils/reload-util';
import { cx } from '----pkg-uni/uni-utils/cx-util';
import {
  destroyVConsole,
  insertVConsole,
} from '----pkg-uni/uni-utils/dom-util';

import { appConfig } from '----pkg-uni/uni-configs/app-config';
import { urlConfig } from '----pkg-uni/uni-configs/url-config';

import { UInput } from '----pkg-uni/uni-ui-components/UInput';
import { UButton } from '----pkg-uni/uni-ui-components/UButton';
import { UModal } from '----pkg-uni/uni-ui-components/UModal';
import { UText } from '----pkg-uni/uni-ui-components/UText';
import { UView } from '----pkg-uni/uni-ui-components/UView';
import { UCode } from '----pkg-uni/uni-ui-components/UCode';

import { useIsDarkMode } from '----pkg-uni/uni-hooks/useIsDarkMode';
import { useNavigate } from '----pkg-uni/uni-hooks/useNavigate';

import type { IUiCompBaseProps } from '----pkg-uni/uni-types/comp-type';

import { useThemeStore } from '----pkg-uni/uni-stores/useThemeStore';
import {
  THEME_CONST_THEME_KEYS,
  THEME_CONST_THEME_LABELS,
} from '----pkg-uni/uni-consts/theme-const';
import { LS_CONST_KEYS } from '----pkg-uni/uni-consts/ls-const';
import { axiosInst, handleAxiosCatch } from '----pkg-uni/uni-libs/axios-lib';
import { URL_PATHS_CONST } from '----pkg-uni/uni-routers/uni-router';
import { XAppVersionNumber } from '----pkg-uni/__uni-shared__/uni-x-components/XAppVersionNumber';

import styles from './styles.module.scss';

interface IProps extends IUiCompBaseProps {
  onCancelCb?: () => void;
  center?: boolean;
  onSetLsDebugMonitorInfoValue?: (v: '' | '1') => void;
}

export const DebugBarModalContent: React.FC<IProps> = (props) => {
  // forSTORE
  const theme$_appTheme = useThemeStore((s) => s.theme$_appTheme);
  const theme$_sysTheme = useThemeStore((s) => s.theme$_sysTheme);
  // forSTORE

  const { isDarkMode } = useIsDarkMode();

  // const { message } = useMessage();
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
    axiosInst
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
          console.log(`已复制 html ${opts.type} 代码片段`);
          // message.success(`已复制 html ${opts.type} 代码片段`);
        } else {
          console.log(`复制失败`);
          // message.error(`复制失败`);
        }
      })
      .catch(handleAxiosCatch);
  };

  //
  //
  //
  //

  return (
    <UView
      className={cx(
        styles['comp-wrapper'],
        { [styles['comp-wrapper--center']]: props.center },
        props.className,
        `g-comp--${DebugBarModalContent.displayName}`,
      )}
      style={props.style}
    >
      {postModalPlaceholder}

      <UView className={styles['debug-title-wrapper']}>
        <UView className={styles['debug-title']} row>
          <UText className={styles['fish']}>🎏</UText> {appConfig.NAME}
          <XAppVersionNumber
            className={styles['build-version']}
            showBuildtime
          />
        </UView>
      </UView>

      <UView className={styles['jump-btn-wrapper']} gap="small">
        <UView row gap="small">
          <UButton onClick={() => navigate({ to: URL_PATHS_CONST['/']?.name })}>
            HOME
          </UButton>

          <UButton
            onClick={() => navigate({ to: URL_PATHS_CONST['/test/any']?.name })}
          >
            Any
          </UButton>

          <UButton onClick={() => hardReload()}>H-RF</UButton>
          {/*<button onClick={() => softReload()}>S-RF</button>*/}
        </UView>

        {/* ------------------------ */}

        <UView row gap="small">
          <UButton
            className={cx({
              [styles['feature-is-enabled']]: lsDebugVConsoleLsValue,
            })}
            onClick={() => {
              if (!window.VConsole) {
                setLsDebugVConsoleLsValue('1');
                console.log('insert VConsole');
                insertVConsole({ keepState: true });
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
        </UView>

        {/* ------------------------ */}

        <UView row gap="small">
          <UButton onClick={() => onCopyDom({ type: 'body' })}>cpBody</UButton>

          <UButton onClick={() => onCopyDom({ type: 'head' })}>
            ✂️ cpHead
          </UButton>
        </UView>
      </UView>

      {/*  -------- */}
      {/*  -------- */}
      {/*  -------- */}
      {/*  -------- */}
      {/*  -------- */}
      {/*  -------- */}
      {/*  -------- */}
      {/*  -------- */}

      <UView className={styles['test-env-wrapper']}>
        <UView className={styles['cur-url']}>
          <UText>URL: {window.location.href}</UText>
        </UView>
        <UView className={styles['cur-api']}>
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
        </UView>

        <UButton
          onClick={() => {
            console.log(window.location.href);
          }}
        >
          showURL
        </UButton>

        <UView className={styles['cur-api']}>
          <UView className={styles['theme-info']}>
            <UView>
              <UText>
                appTheme (固化):
                <UCode>{JSON.stringify(theme$_appTheme)}</UCode>
              </UText>

              <UText>sysTheme: {JSON.stringify(theme$_sysTheme)}</UText>

              <UText>isDarkMode: {JSON.stringify(isDarkMode)}</UText>
            </UView>

            <UView className={styles['theme-buttons']} row gap="small">
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
            </UView>
          </UView>

          {/*<AppGlobalThemeRadio className={styles['setting-theme']} />*/}
        </UView>
      </UView>
    </UView>
  );
};
