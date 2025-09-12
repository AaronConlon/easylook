export const __RN_STACK_NAME_CONST__ = {
  // __HomeStackComp__: '__HomeStackComp__',
  // __MyStackComp__: '__MyStackComp__',
  // __HiddenStackComp__: '__HiddenStackComp__',
  __GlobalTabNavComp__: '__GlobalTabNavComp__',
};

export const __BASE_URL_PATHS_CONST__ = {
  __initRouteName__: {
    h5: { name: '/' },
    weapp: { name: 'pages/index/index' },
    rn: {
      stack: __RN_STACK_NAME_CONST__.__GlobalTabNavComp__,
      name: 'TestView2Index',
    },
  },
  //
  //
  //
  //
  '/': {
    h5: { name: '/' },
    weapp: { name: 'pages/index/index' },
    rn: {
      stack: __RN_STACK_NAME_CONST__.__GlobalTabNavComp__,
      name: 'TestView2Index',
    },
  },
  '/about': {
    h5: { name: '/about' },
    weapp: { name: 'pages/about/index' },
    rn: {
      stack: undefined,
      name: 'AboutIndex',
    },
  },
  //
  //
  //
  //
  '/my': {
    h5: { name: '/my' },
    weapp: { name: 'pages/my/index' },
    rn: {
      stack: __RN_STACK_NAME_CONST__.__GlobalTabNavComp__, // My
      name: 'MyIndex',
    },
  },
  '/setting': {
    h5: { name: '/setting' },
    weapp: { name: 'pages/setting/index' },
    rn: {
      stack: undefined,
      name: 'SettingIndex',
    },
  },
  //
  //
  //
  //
  '/empty': {
    h5: { name: '/empty' },
    weapp: { name: 'pages/empty/index' },
    rn: {
      stack: undefined,
      name: 'EmptyIndex',
    },
  },
  '/login': {
    h5: { name: '/login' },
    weapp: { name: 'pages/login' },
    rn: {
      stack: undefined,
      name: 'LoginIndex',
    },
  },
  '/test/any': {
    h5: { name: '/test/any' },
    weapp: { name: 'pages/test/any' },
    rn: {
      stack: __RN_STACK_NAME_CONST__.__GlobalTabNavComp__,
      name: 'TestAnyIndex',
    },
  },
  '/test/uni-comp': {
    h5: { name: '/test/uni-comp' },
    weapp: { name: 'pages/test/uni-comp' },
    rn: {
      stack: undefined,
      name: 'TestUniCompIndex',
    },
  },
};
