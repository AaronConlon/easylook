import React, { useState } from 'react';
import _ from 'lodash';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { UButton } from '----pkg-uni/uni-ui-components/UButton';
import { UHr } from '----pkg-uni/uni-ui-components/UHr';
import { UNbsp } from '----pkg-uni/uni-ui-components/UNbsp';
import { UPageWrapper } from '----pkg-uni/uni-ui-components/UPageWrapper';
import { UStrong } from '----pkg-uni/uni-ui-components/UStrong';
import { UText } from '----pkg-uni/uni-ui-components/UText';
import { UVideoPlayer } from '----pkg-uni/uni-ui-components/UVideoPlayer';
import { UView } from '----pkg-uni/uni-ui-components/UView';
import { UScrollView } from '----pkg-uni/uni-ui-components/UScrollView';
import { UIcon } from '----pkg-uni/uni-ui-components/UIcon';

import { useIsDarkMode } from '----pkg-uni/uni-hooks/useIsDarkMode';
import { useSafeAreaInsets } from '----pkg-uni/uni-hooks/useSafeAreaInsets';

import styles from './styles.module.scss';

export const TestView2Index = () => {
  const { isDarkMode } = useIsDarkMode();
  // const safeAreaInsets = useSafeAreaInsets();

  // console.log('WLH:', window?.location?.href);
  // console.log('WLH2:', window.vConsole);

  const [num, setNum] = useState(1);

  return (
    <UPageWrapper
      className={cx(styles['comp-wrapper'], {
        [styles['comp-wrapper--isDarkMode']]: isDarkMode,
      })}
      // edges={['left', 'right', 'top']}
      // style={{
      //   paddingTop: safeAreaInsets.top,
      // }}
    >
      <UView row>
        <UText>{window?.location?.href || 'N/A href'}</UText>
        <UNbsp />
        <UText>{JSON.stringify(window.vConsole) || 'N/A vConsole'}</UText>
      </UView>

      {/* <UView> */}
      {/*   <VideoPlayer */}
      {/*     // eslint-disable-next-line max-len */}
      {/*     src={require('../../../uni-assets/__PUBLIC__/8min-morning-fit-out.mp4')} */}
      {/*     // 'https://www.sample-videos.com/video321/mp4/360/big_buck_bunny_360p_1mb.mp4', */}
      {/*     style={{ height: 200, width: '100%', zIndex: 999 }} */}
      {/*     // playWhenInactive: true, */}
      {/*     // allowsExternalPlayback: true, */}
      {/*     controls */}
      {/*     loop */}
      {/*   /> */}
      {/* </UView> */}

      <UView
        className={cx(styles['block-1'], {
          [styles['block-1--isDarkMode']]: isDarkMode,
        })}
      >
        <UStrong
          className={cx(styles['block-1-title-text'], {
            [styles['block-1-title-text--isDarkMode']]: isDarkMode,
          })}
        >
          BLOCK-1-中文测试------V6
        </UStrong>
      </UView>

      <UView>
        <UText>PageAbout - num {num}</UText>
      </UView>

      <UHr />

      <UView row>
        <UButton
          onClick={() => {
            setNum((pervNum) => pervNum + 1);
          }}
        >
          +1
        </UButton>
      </UView>

      <UView className={styles['block-2']}>
        <UView row>
          <UStrong>BLOCK-2-1 VIEW</UStrong>
          <UIcon name="i-home-5-line" style={{ marginLeft: 5 }} />
        </UView>

        <UView row>
          <UText>我的两22边</UText>
          <UIcon name="i-home-6-fill" />
          <UText>是图标可以吗？</UText>
        </UView>

        {/*<UText>1800px</UText>*/}
        {_.range(0, 5)?.map((n) => (
          <UView key={n} row>
            <UText key={n}>No.{n}</UText>
          </UView>
        ))}
      </UView>

      <UScrollView className={cx(styles['block-3'], styles['block-3--mod'])}>
        <UView>
          <UStrong>BLOCK-2 VIEW (enabledScroll)</UStrong>
        </UView>

        {/*<UText>1800px</UText>*/}
        {_.range(0, 99)?.map((n) => (
          <UView key={n}>
            <UText>No.{n}</UText>
          </UView>
        ))}
      </UScrollView>
    </UPageWrapper>
  );
};
