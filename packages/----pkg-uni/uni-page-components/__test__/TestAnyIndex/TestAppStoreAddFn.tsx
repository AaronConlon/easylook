import React from 'react';

import { UButton } from '----pkg-uni/uni-ui-components/UButton';
import { UHr } from '----pkg-uni/uni-ui-components/UHr';
import { UText } from '----pkg-uni/uni-ui-components/UText';
import { UView } from '----pkg-uni/uni-ui-components/UView';

import { useAppStore } from '----pkg-uni/uni-stores/useAppStore';

export const TestAppStoreAddFn = () => {
  // forSTORE
  const app$____TEST_APP_NUM____ = useAppStore(
    (s) => s.app$____TEST_APP_NUM____,
  );
  const app$____TEST_APP_RENDERING____ = useAppStore(
    (s) => s.app$____TEST_APP_RENDERING____,
  );

  return (
    <UView>
      <UText>app$</UText>

      <UHr />

      <UButton
        type="dashed"
        onClick={() => {
          useAppStore.getState().app$_set_____TEST_APP_NUM_add_1____();
        }}
      >
        <UText>app$____TEST_APP_NUM____: {app$____TEST_APP_NUM____}</UText>
      </UButton>

      <UHr />
      <UButton
        type="dashed"
        onClick={() => {
          useAppStore.getState().app$_set_____TEST_APP_RENDERING_add_1____();
        }}
      >
        <UText>
          app$____TEST_APP_RENDERING____: {app$____TEST_APP_RENDERING____}
        </UText>
      </UButton>
    </UView>
  );
};
