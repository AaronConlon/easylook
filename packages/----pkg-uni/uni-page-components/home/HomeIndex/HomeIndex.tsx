import React from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { appConfig } from '----pkg-uni/uni-configs/app-config';

import { UNbsp } from '----pkg-uni/uni-ui-components/UNbsp';
import { UInput } from '----pkg-uni/uni-ui-components/UInput';
import { UView } from '----pkg-uni/uni-ui-components/UView';
import { UText } from '----pkg-uni/uni-ui-components/UText';
import { UPageWrapper } from '----pkg-uni/uni-ui-components/UPageWrapper';
import { UHr } from '----pkg-uni/uni-ui-components/UHr';
import { UButton } from '----pkg-uni/uni-ui-components/UButton';

import { useIsDarkMode } from '----pkg-uni/uni-hooks/useIsDarkMode';

import { XAppVersionNumber } from '----pkg-uni/__uni-shared__/uni-x-components/XAppVersionNumber';

import styles from './styles.module.scss';

export const HomeIndex = () => {
  const { isDarkMode } = useIsDarkMode();

  return (
    <UPageWrapper
      className={cx(styles['comp-wrapper'], {
        [styles['comp-wrapper--isDarkMode']]: isDarkMode,
      })}
    >
      <UView>
        <UText>WIN: {window?.location?.href || 'N/A href'}</UText>
        <UText preMode>NAME: {JSON.stringify(appConfig, null, 2)}</UText>
      </UView>

      <UView>
        <XAppVersionNumber />
      </UView>

      <UView>
        <UHr />
        <UView style={{ height: 400, backgroundColor: '#bcfffd' }} />
        <UHr />
        <UHr />
        <UHr />
        <UHr />
      </UView>

      <UView row>
        <UText>
          [Input]
          <UNbsp />
        </UText>
        <UInput />
      </UView>

      <UView>
        <UHr />
        <UHr />
        <UHr />
        <UText>02</UText>
        <UHr />
        <UHr />
        <UHr />
        <UButton>FULL</UButton>
        <UHr />
        <UHr />
        <UHr />
        <UHr />
        <UHr />
        <UHr />
        <UHr />
        <UHr />
        <UHr />
        <UHr />
        <UHr />
        <UHr />
        <UHr />
        <UHr />
        <UText>04</UText>
        <UText>05</UText>
        <UText>06</UText>
        <UText>07</UText>
        <UHr />
        <UHr />
        <UHr />
        <UHr />
        <UHr />
        <UHr />
        <UHr />
        <UText>10</UText>
      </UView>

      <UView>
        <UText>20</UText>
      </UView>

      {/* <UWebView */}
      {/*   overScrollMode="never" */}
      {/*   // 这个绝对 Hack……，刷新不能靠 webview.reload()，只需改变这个 key 即可 */}
      {/*   // key={`pwaWebViewReloadCount-${app$_pwaWebViewReloadCount}`} */}
      {/*   // ref={pwaWebViewRef} */}
      {/*   // */}
      {/*   allowsLinkPreview */}
      {/*   allowUniversalAccessFromFileURLs */}
      {/*   // allowsBackForwardNavigationGestures */}
      {/*   allowsFullscreenVideo */}
      {/*   // allowsAirPlayForMediaPlayback */}
      {/*   // allowsInlineMediaPlayback */}
      {/*   allowsProtectedMedia */}
      {/*   allowFileAccess */}
      {/*   allowFileAccessFromFileURLs */}
      {/*   // */}
      {/*   sharedCookiesEnabled */}
      {/*   thirdPartyCookiesEnabled */}
      {/*   // useWebKit */}
      {/*   mixedContentMode="compatibility" */}
      {/*   // decelerationRate={1} */}
      {/*   startInLoadingState */}
      {/*   // renderLoading={calcRenderLoadingDom} */}
      {/*   showsHorizontalScrollIndicator={false} */}
      {/*   style={{ */}
      {/*     // display: app$_pwaIsReady || app$_pwaIsOnload ? 'flex' : 'none', */}
      {/*     // display: 'flex', */}
      {/*     // flexDirection: 'column', */}
      {/*     flex: 1, */}
      {/*     // width: '100%', */}
      {/*     // height: '400px', */}
      {/*     // backgroundColor: calcStatusBarBgColor(app$_theme), */}
      {/*   }} */}
      {/*   javaScriptEnabled */}
      {/*   // injectedJavaScriptBeforeContentLoaded={runtime$_injectePwaJS} */}
      {/*   // onMessage={onMessageFromPwa} */}
      {/*   // onLoadProgress={onLoadProgress} */}
      {/*   // onNavigationStateChange={onNavigationStateChange} */}
      {/*   setSupportMultipleWindows={false} */}
      {/*   source={{ uri: 'https://www.bilibili.com/video/BV1wG8UzeEjL/' }} */}
      {/*   // source={{ uri: 'https://www.sspai.com' }} */}
      {/*   // onError={onError} */}
      {/*   // bounces={false} */}
      {/*   userAgent={ */}
      {/*     // eslint-disable-next-line max-len */}
      {/*     'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1' */}
      {/*   } */}
      {/*   // onLoadStart={onLoadStart} */}
      {/*   // onLoadEnd={onLoadEnd} */}
      {/* /> */}
    </UPageWrapper>
  );
};
