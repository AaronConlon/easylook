export const eslintConfigUniImportOrderPathGroups = [
  {
    pattern: '----pkg-platform/**',
    group: 'external',
    position: 'after',
  },
  {
    pattern: '----pkg-uni/uni-utils/**',
    group: 'external',
    position: 'after',
  },
  {
    pattern: '----pkg-uni/uni-configs/**',
    group: 'external',
    position: 'after',
  },
  {
    pattern: '----pkg-uni/uni-ui-components/**',
    group: 'external',
    position: 'after',
  },
  {
    pattern: '----pkg-uni/uni-hooks/**',
    group: 'external',
    position: 'after',
  },
  {
    pattern: '----pkg-uni/uni-{assets,styles}/**',
    group: 'external',
    position: 'after',
  },
  {
    pattern: '----pkg-uni/uni-types/**',
    group: 'external',
    position: 'after',
  },
  {
    pattern: '----pkg-uni/**',
    group: 'external',
    position: 'after',
  },
  {
    pattern: '----pkg-platform/**',
    group: 'external',
    position: 'after',
  },
  //
  //
  //
  //
  //
  //
  {
    pattern: '@/uikit-components/**',
    group: 'sibling',
    position: 'before',
  },
  {
    pattern: '@/components/**',
    group: 'sibling',
    position: 'before',
  },
  {
    pattern: '@/**',
    group: 'sibling',
    position: 'before',
  },
  {
    pattern: '@/assets/**',
    group: 'parent',
    position: 'after',
  },
  {
    pattern: './styles**',
    group: 'internal',
    position: 'after',
  },
];
