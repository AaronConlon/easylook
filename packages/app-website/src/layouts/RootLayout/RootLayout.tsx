import React from 'react';
import { Link, Outlet } from '@tanstack/react-router';

export const RootLayout = () => {
  return (
    <div className="p-2 flex gap-2 text-lg">
      <Link
        to="/"
        activeProps={{
          className: 'font-bold',
        }}
        activeOptions={{ exact: true }}
      >
        Home
      </Link>{' '}
      <Link
        to="/about"
        activeProps={{
          className: 'font-bold',
        }}
      >
        Posts
      </Link>
      <Outlet />
    </div>
  );

  // return (
  //   <KeepAliveRouteOutlet
  //     // wrapperComponent={MemoScrollTopWrapper}
  //     // duration={300}
  //     // transition={true}
  //     // exclude={["/nocache-counter"]}
  //     aliveRef={aliveRef}
  //   />
  // );
};
