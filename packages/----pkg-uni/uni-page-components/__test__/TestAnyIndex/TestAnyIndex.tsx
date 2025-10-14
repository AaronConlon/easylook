import _ from 'lodash';
import React, { useState } from 'react';

import { getUserInfo, userLogout } from '----pkg-uni/uni-utils/user-util';
import { cx } from '----pkg-uni/uni-utils/cx-util';

import { UEventButton } from '----pkg-uni/uni-ui-components/UEventButton';
import { UButton } from '----pkg-uni/uni-ui-components/UButton';
import { UHr } from '----pkg-uni/uni-ui-components/UHr';
import { UModal } from '----pkg-uni/uni-ui-components/UModal';
import { UPageWrapper } from '----pkg-uni/uni-ui-components/UPageWrapper';
import { UStrong } from '----pkg-uni/uni-ui-components/UStrong';
import { UView } from '----pkg-uni/uni-ui-components/UView';
import { UText } from '----pkg-uni/uni-ui-components/UText';
import { UScrollView } from '----pkg-uni/uni-ui-components/UScrollView';
import { UIcon } from '----pkg-uni/uni-ui-components/UIcon';
import { UBr } from '----pkg-uni/uni-ui-components/UBr';

import { useIsDarkMode } from '----pkg-uni/uni-hooks/useIsDarkMode';

import { useThemeStore } from '----pkg-uni/uni-stores/useThemeStore';
import { useUserStore } from '----pkg-uni/uni-stores/useUserStore';
import { PageThemeSwitch } from '----pkg-uni/uni-page-components/__page-shared__/PageThemeSwitch/PageThemeSwitch';
import { XAppVersionNumber } from '----pkg-uni/__uni-shared__/uni-x-components/XAppVersionNumber';
import { usePageStore } from '----pkg-uni/uni-stores/usePageStore';

import { TestThemeStoreAddFn } from './TestThemeStoreAddFn';
import { TestStateAddFn } from './TestStateAddFn';
import { TestAppStoreAddFn } from './TestAppStoreAddFn';

import styles from './styles.module.scss';

export const TestAnyIndex = () => {
  const { isDarkMode } = useIsDarkMode();

  // forSTORE
  const theme$_appTheme = useThemeStore((s) => s.theme$_appTheme);
  const page$_pageItem = usePageStore((s) => s.page$_pageItem);

  // ✅ zustand 官方推荐的写法，只有 Store 中用到的部分会 reRender
  const theme$_sysTheme = useThemeStore((s) => s.theme$_sysTheme);

  // ❌ 直接解构使用，导致整个 Store 相关组件 reRender
  // const { theme$_sysTheme } = useThemeStore();
  // forSTORE

  const [modalOpen, setModalOpen] = useState(false);
  const [textStrongItalic, setTextStrongItalic] = useState(false);

  const onLogout = () => {
    userLogout({
      logoutCallbackFn: () => {
        useUserStore.getState().user$_remove_userInfo();
        useUserStore.getState().user$_remove_userToken();
      },
    }).then(() => {
      // navigate(URL_PATHS_CONST['/login'].name);
    });
  };

  const onAbout = () => {
    // navigate(URL_PATHS_CONST['/about'].name);
  };

  const user = getUserInfo();

  return (
    <UPageWrapper
      className={cx(
        styles['comp-wrapper'],
        {
          [styles['comp-wrapper--isDarkMode']]: isDarkMode,
        },
        'g-page-comp--TestAnyIndex',
      )}
    >
      <UBr />
      <UBr />
      <UBr />
      <UBr />
      <UBr />
      <UBr />
      <UBr />
      <UBr />
      <UBr />
      <UBr />
      <UBr />
      <UView>
        <UBr />
        <UText>A:{page$_pageItem.home.a}</UText>
        <UBr />
        <UText>Y:{page$_pageItem.about.y}</UText>
      </UView>

      <UView row>
        <UText>TestAnyIndex</UText>

        <UIcon
          name="i-codepen"
          className={cx(styles['icon-logo'], {
            [styles['icon-logo--isDarkMode']]: isDarkMode,
          })}
        />

        <UText>TestAnyIndex</UText>

        <UIcon
          name="i-search-2-line"
          className={cx(styles['icon-logo'], {
            [styles['icon-logo--isDarkMode']]: isDarkMode,
          })}
        />
      </UView>

      <UEventButton
        onClick={() => {
          console.log('AAAAAAa');
        }}
      >
        <UText>AAAAAAA</UText>
      </UEventButton>

      <UView>
        <XAppVersionNumber />
      </UView>

      {user ? (
        <UView>
          <UText>name: {user?.name}</UText>
          <UText>email: {user?.email}</UText>
        </UView>
      ) : null}

      <UHr />

      <UView row>
        <UButton onClick={onLogout}>LOGOUT</UButton>
        <UButton onClick={onAbout}>ABOUT</UButton>
      </UView>

      <UHr />

      <UView>
        <PageThemeSwitch />
      </UView>

      <UHr />

      <UView>
        <UView row>
          <UButton
            onClick={() => {
              setTextStrongItalic((p) => !p);
            }}
          >
            斜体
          </UButton>

          <UText>
            这是普通文字， 这是粗体文字
            <UStrong
              className={cx(styles['is-strong-text'], {
                [styles['is-strong-text--italic']]: textStrongItalic,
              })}
            >
              我在 React Native1 项目 难道还有区别？？
            </UStrong>
            <UStrong
              className={cx(styles['is-strong-text'], {
                [styles['is-strong-text--italic']]: textStrongItalic,
              })}
            >
              我在 React Native 项目 难道还有区别？？
            </UStrong>
          </UText>
        </UView>

        <UView row>
          <UButton
            onClick={() => {
              setTextStrongItalic((p) => !p);
            }}
          >
            斜体
          </UButton>

          <UText>
            这是普通文字， 这是粗体文字 我在 ABCDEFGHIJK1234567项目 难道还有区别？？ 我在 React Native 项目
            难道还有区别？？
          </UText>
        </UView>

        <UView>
          <TestAppStoreAddFn />
          <TestThemeStoreAddFn />

          <TestStateAddFn />
        </UView>

        <UHr />
        <UHr />
        {/*<UButton*/}
        {/*  type="dashed"*/}
        {/*  onClick={() => {*/}
        {/*    useAppStore.getState().app$____set_TEST_APP_NUM_add_1____();*/}
        {/*  }}*/}
        {/*>*/}
        {/*  TEST_APP_NUM: {app$____TEST_APP_NUM____}*/}
        {/*</UButton>*/}

        {/*<UButton*/}
        {/*  type="dashed"*/}
        {/*  onClick={() => {*/}
        {/*    useAppStore.getState().app$____set_TEST_APP_RENDERING_add_1____();*/}
        {/*  }}*/}
        {/*>*/}
        {/*  TEST_APP_RENDERING: {app$____TEST_APP_RENDERING____}*/}
        {/*</UButton>*/}
      </UView>

      <UView row>
        <UButton
          type="dashed"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Modal
        </UButton>

        <UModal
          zIndex={1005} // msg 是 2010，这里比 msg 小 1 即可
          centered
          open={modalOpen}
          title="XXXXXXXXxx"
          // maskClosable={false}
          // footer={false}
          closeIcon
          onCancel={() => setModalOpen(false)}
          // className={styles['debug-bar-modal']}
          // wrapClassName={styles['debug-bar-modal-wrapper']}
        >
          <UView>
            <UText>MODAL-BODY</UText>
          </UView>
        </UModal>
      </UView>

      <UScrollView
        className={cx(styles['block-scroll'], {
          [styles['block-scroll--isDarkMode']]: isDarkMode,
        })}
      >
        {_.range(0, 50)?.map((n) => (
          <UView key={n}>
            <UText>No.{n}</UText>
          </UView>
        ))}
      </UScrollView>
    </UPageWrapper>
  );
};
