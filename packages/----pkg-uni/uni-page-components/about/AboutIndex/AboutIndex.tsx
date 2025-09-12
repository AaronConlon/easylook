import React, { useState } from 'react';
import _ from 'lodash';
import { useMatch, useParams, Link } from '@tanstack/react-router';

import { USmartLink } from '----pkg-platform/h5/h5-ui-components/USmartLink--h5';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { UButton } from '----pkg-uni/uni-ui-components/UButton';
import { UHr } from '----pkg-uni/uni-ui-components/UHr';
import { UPageWrapper } from '----pkg-uni/uni-ui-components/UPageWrapper';
import { UText } from '----pkg-uni/uni-ui-components/UText';
import { UView } from '----pkg-uni/uni-ui-components/UView';
import { UScrollView } from '----pkg-uni/uni-ui-components/UScrollView';

import { useIsDarkMode } from '----pkg-uni/uni-hooks/useIsDarkMode';

import styles from './styles.module.scss';

export const AboutIndex = () => {
  const { isDarkMode } = useIsDarkMode();

  const [num, setNum] = useState(1);

  const params = useParams({ strict: false });
  // const params = useLangParams({ strict: false });

  return (
    <UPageWrapper
      className={cx(styles['comp-wrapper'], {
        [styles['comp-wrapper--isDarkMode']]: isDarkMode,
      })}
    >
      <h2>{JSON.stringify(params)}</h2>

      <USmartLink to={`/${params.lang}`} lang={params.lang}>
        HOME
      </USmartLink>

      <UView
        className={cx(styles['block-1'], {
          [styles['block-1--isDarkMode']]: isDarkMode,
        })}
      >
        <UText>42200px</UText>
      </UView>

      <UView>
        <UText>PageAbout - num {num}</UText>
      </UView>

      <UHr />

      <UView>
        <UButton
          onClick={() => {
            setNum((pervNum) => pervNum + 1);
          }}
        >
          +1
        </UButton>
      </UView>

      <UScrollView className={styles['block-2']}>
        {/*<UText>1800px</UText>*/}
        {_.range(0, 99)?.map((n) => (
          <UView key={n}>
            <UText>No.{n}</UText>
          </UView>
        ))}
      </UScrollView>

      <UHr />
    </UPageWrapper>
  );
};
