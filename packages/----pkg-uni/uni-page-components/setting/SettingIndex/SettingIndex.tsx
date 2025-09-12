import React from 'react';

import { UPageWrapper } from '----pkg-uni/uni-ui-components/UPageWrapper';
import { UText } from '----pkg-uni/uni-ui-components/UText';
import { UView } from '----pkg-uni/uni-ui-components/UView';

import IconFont from '----pkg-uni/uni-assets/iconfont';

import styles from './styles.module.scss';

export const SettingIndex = () => {
  return (
    <UPageWrapper className={styles['comp-wrapper']}>
      <UView>
        <UText>SettingIndex</UText>
        <IconFont name="i-search-2-line" />
      </UView>
    </UPageWrapper>
  );
};
