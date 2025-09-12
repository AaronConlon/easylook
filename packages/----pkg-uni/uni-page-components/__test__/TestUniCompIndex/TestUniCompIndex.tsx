import React from 'react';

import { cx } from '----pkg-uni/uni-utils/cx-util';

import { UPageWrapper } from '----pkg-uni/uni-ui-components/UPageWrapper';
import { UHr } from '----pkg-uni/uni-ui-components/UHr';

import { useIsDarkMode } from '----pkg-uni/uni-hooks/useIsDarkMode';

import { PageThemeSwitch } from '----pkg-uni/uni-page-components/__page-shared__/PageThemeSwitch/PageThemeSwitch';

import { Test__Uni__Button } from '../Test__Uni__Button/Test__Uni__Button';

import styles from './styles.module.scss';

export const TestUniCompIndex = () => {
  const { isDarkMode } = useIsDarkMode();

  return (
    <UPageWrapper
      // edges={['left', 'right', 'top']}
      className={cx(
        styles['comp-wrapper'],
        {
          [styles['comp-wrapper--isDarkMode']]: isDarkMode,
        },
        'g-page-comp--TestUniCompIndex',
      )}
    >
      <PageThemeSwitch />

      <UHr />
      <Test__Uni__Button />

      {/* <UView> */}
      {/*   <UText>A-TEXT</UText> */}
      {/*   <UText>B-TEXT</UText> */}
      {/* </UView> */}

      {/* <UView> */}
      {/*   <UView> */}
      {/*     <UText>A-TEXT2</UText> */}
      {/*   </UView> */}
      {/*   <UView> */}
      {/*     <UText>B-TEXT2</UText> */}
      {/*   </UView> */}
      {/* </UView> */}
    </UPageWrapper>
  );
};
