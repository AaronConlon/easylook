import React from 'react';

import { UButton } from '----pkg-uni/uni-ui-components/UButton';
import { UHr } from '----pkg-uni/uni-ui-components/UHr';
import { USmartLink } from '----pkg-uni/uni-ui-components/USmartLink';
import { UView } from '----pkg-uni/uni-ui-components/UView';

import { useNavigate } from '----pkg-uni/uni-hooks/useNavigate';

import { URL_PATHS_CONST } from '----pkg-uni/uni-routers/uni-router';

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <UView style={{ position: 'fixed', right: 0, top: 0 }}>
      {Object.keys(URL_PATHS_CONST)
        .filter((k) => !k.startsWith('__'))
        .map((k) => (
          <UView key={k}>
            <USmartLink to={k} key={k}>
              {k}
            </USmartLink>
          </UView>
        ))}

      <UHr />
      <UView>
        <UButton
          onClick={() => {
            navigate({ to: URL_PATHS_CONST['/about']?.name });
          }}
        >
          TO LOGIN
        </UButton>
      </UView>
    </UView>
  );
};
