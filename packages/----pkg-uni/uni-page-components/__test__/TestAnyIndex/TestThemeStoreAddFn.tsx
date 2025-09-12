import React from 'react';

import { UButton } from '----pkg-uni/uni-ui-components/UButton';
import { UHr } from '----pkg-uni/uni-ui-components/UHr';
import { UText } from '----pkg-uni/uni-ui-components/UText';
import { UView } from '----pkg-uni/uni-ui-components/UView';

import { useThemeStore } from '----pkg-uni/uni-stores/useThemeStore';

export const TestThemeStoreAddFn = () => {
  // forSTORE
  const theme$____TEST_NUM____ = useThemeStore((s) => s.theme$____TEST_NUM____);
  const theme$____TEST_RENDERING____ = useThemeStore(
    (s) => s.theme$____TEST_RENDERING____,
  );

  return (
    <UView>
      <UText>theme$</UText>

      <UHr />

      <UButton
        type="dashed"
        onClick={() => {
          useThemeStore.getState().theme$____set_TEST_NUM_add_1____();
        }}
      >
        <UText>theme$____TEST_NUM____: {theme$____TEST_NUM____}</UText>
      </UButton>

      <UHr />

      <UButton
        type="dashed"
        onClick={() => {
          useThemeStore.getState().theme$____set_TEST_RENDERING_add_1____();
        }}
      >
        <UText>
          theme$____TEST_RENDERING____: {theme$____TEST_RENDERING____}
        </UText>
      </UButton>
    </UView>
  );
};
