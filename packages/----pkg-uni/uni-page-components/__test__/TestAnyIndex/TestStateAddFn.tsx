import React, { useState } from 'react';

import { UButton } from '----pkg-uni/uni-ui-components/UButton';
import { UHr } from '----pkg-uni/uni-ui-components/UHr';
import { UText } from '----pkg-uni/uni-ui-components/UText';
import { UView } from '----pkg-uni/uni-ui-components/UView';

export const TestStateAddFn = () => {
  const [num5, setNum5] = useState(555);
  const [num7, setNum7] = useState(777);

  return (
    <UView>
      <UText>num5+7</UText>

      <UHr />

      <UButton
        type="dashed"
        onClick={() => {
          setNum5((p) => p + 1);
        }}
      >
        <UText>num5: {num5}</UText>
      </UButton>

      <UHr />

      <UButton
        type="dashed"
        onClick={() => {
          setNum7((p) => p + 1);
        }}
      >
        <UText>num7: {num7}</UText>
      </UButton>
    </UView>
  );
};
