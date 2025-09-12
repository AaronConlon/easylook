import React from 'react';

import { TestMonoImportant } from '----pkg-platform/h5/h5-components/__Test__/TestMonoImportant--h5/TestMonoImportant--h5';

import { UButton } from '----pkg-uni/uni-ui-components/UButton';
// import { TestMonoImportant } from '----pkg-uni/uni-components';

export const App = () => {
  return (
    <div>
      <TestMonoImportant />
      <UButton>OK</UButton>
      <UButton type="primary">OK</UButton>
    </div>
  );
};
