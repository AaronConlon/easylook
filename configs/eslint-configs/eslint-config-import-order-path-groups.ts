export const eslintConfigImportOrderPathGroups = [
  {
    pattern: `__shared__/typings/**`,
    group: 'external',
    position: 'after',
  },
  {
    pattern: `__shared__/ui-components/**`,
    group: 'parent',
    position: 'after',
  },
  {
    pattern: `__shared__/**`,
    group: 'external',
    position: 'after',
  },
  ...['@']
    ?.map((v) => [
      {
        pattern: `${v}/typings/**`,
        group: 'parent',
        position: 'after',
      },
      {
        pattern: `${v}/assets/**`,
        group: 'parent',
        position: 'after',
      },
      {
        pattern: `${v}/routers/**`,
        group: 'parent',
        position: 'after',
      },
      {
        pattern: `${v}/locales/**`,
        group: 'parent',
        position: 'after',
      },
      {
        pattern: `${v}/consts/**`,
        group: 'parent',
        position: 'after',
      },
      {
        pattern: `${v}/instances/**`,
        group: 'parent',
        position: 'after',
      },
      {
        pattern: `${v}/utils/**`,
        group: 'parent',
        position: 'after',
      },
      {
        pattern: `${v}/locales/**`,
        group: 'parent',
        position: 'after',
      },
      {
        pattern: `${v}/configs/**`,
        group: 'parent',
        position: 'after',
      },
      {
        pattern: `${v}/libs/**`,
        group: 'parent',
        position: 'after',
      },
      {
        pattern: `${v}/hooks/**`,
        group: 'parent',
        position: 'after',
      },
      {
        pattern: `${v}/stores/**`,
        group: 'parent',
        position: 'after',
      },
      {
        pattern: `${v}/{assets,styles}/**`,
        group: 'parent',
        position: 'after',
      },
      {
        pattern: `${v}/types/**`,
        group: 'parent',
        position: 'after',
      },

      {
        pattern: `${v}/layouts/**`,
        group: 'parent',
        position: 'after',
      },
      {
        pattern: `${v}/providers/**`,
        group: 'parent',
        position: 'after',
      },
      {
        pattern: `${v}/ui-components/**`,
        group: 'parent',
        position: 'after',
      },
      {
        pattern: `${v}/app-global-compoents/**`,
        group: 'parent',
        position: 'after',
      },
      {
        pattern: `${v}/page-components/**`,
        group: 'parent',
        position: 'after',
      },
      {
        pattern: `${v}/components/**`,
        group: 'parent',
        position: 'after',
      },

      {
        pattern: `${v}/querys/**`,
        group: 'parent',
        position: 'after',
      },
      {
        pattern: `${v}/mutaions/**`,
        group: 'parent',
        position: 'after',
      },
      {
        pattern: `${v}/**`,
        group: 'parent',
        position: 'after',
      },
    ])
    .flat(),
  {
    pattern: './styles**',
    group: 'sibling',
    position: 'after',
  },
];
