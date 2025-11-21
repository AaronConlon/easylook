// @ts-ignore
import type { SharedConfig } from '@typescript-eslint/utils/ts-eslint';

// @ts-ignore
import { eslintConfigImportOrderPathGroups } from './eslint-config-import-order-path-groups';

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

export const eslintConfigBaseRules: SharedConfig.RulesRecord = {
  // common
  'no-console': OFF,
  'no-underscore-dangle': OFF,
  'arrow-body-style': OFF,
  'no-restricted-exports': OFF,
  'no-restricted-syntax': [
    ERROR,
    'ForInStatement',
    'LabeledStatement',
    'WithStatement',
  ],
  'max-len': [
    WARN,
    {
      code: 80, // (default 120) enforces a maximum line length
      ignoreComments: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true, // ignores lines that contain a template literal
      ignoreRegExpLiterals: true, // ignores lines that contain a RegExp literal
      ignoreTrailingComments: true, // ignores only trailing comments

      ignoreUrls: true, // ignores lines that contain a URL
      // tabWidth: 4, // (default 4) specifies the character width for tab characters
      // comments: 80, // enforces a maximum line length for comments; defaults to value of code
      // ignorePattern: true, // ignores lines matching a regular expression; can only internalMatch a single line and need to be double escaped when written in YAML or JSON
      ignorePattern:
        // 忽略 import
        '^import\\s|' +
        // 忽略 export
        '^export\\s|' +
        // 忽略 types implements
        '^implements\\s|' +
        // 用在 forCX
        '\\[styles\\[',
    },
  ],
  'prefer-const': WARN,
  'no-shadow': ERROR,
  'object-shorthand': ERROR,
  'spaced-comment': OFF,
  'no-undef': OFF,
  'no-delete-var': OFF,
  'prefer-regex-literals': OFF,
  'no-unsafe-optional-chaining': OFF,
  'no-constant-binary-expression': OFF,
  //
  //
  // import
  'import/no-cycle': ERROR,
  'import/no-extraneous-dependencies': OFF,
  'import/named': OFF,
  'import/prefer-default-export': OFF,
  'import/no-duplicates': ERROR,
  'import/order': [
    WARN,
    {
      groups: [
        'builtin', // Node.js 内置模块，如 fs、path，通常放最前面
        'external', // 第三方依赖，如 react、lodash、antd，放在 builtin 之后
        'parent', // 当前文件上级目录导入，路径以 ../ 开头
        'sibling', // 当前文件同级目录导入，路径以 ./ 开头，但不是 index 文件
        'index', // 当前目录下的 index 文件导入，路径为 ./ 或 ./index
      ],
      pathGroups: eslintConfigImportOrderPathGroups,
      pathGroupsExcludedImportTypes: [],
      'newlines-between': 'always',
    },
  ],
  //
  //
  // typescript
  // 强制类型导入必须使用 `import type`
  '@typescript-eslint/consistent-type-imports': [
    ERROR,
    {
      prefer: 'type-imports',
      disallowTypeAnnotations: false,
    },
  ],
  '@typescript-eslint/no-explicit-any': OFF,
  '@typescript-eslint/dot-notation': OFF, // for className e.g. `styles['style-name']`
  '@typescript-eslint/naming-convention': OFF,
  '@typescript-eslint/lines-between-class-members': OFF,
  '@typescript-eslint/no-empty-interface': OFF,
  '@typescript-eslint/no-empty-function': OFF,
  '@typescript-eslint/no-empty-object-type': OFF,
  //
  // typescript strict!!!
  '@typescript-eslint/require-await': OFF,
  '@typescript-eslint/use-unknown-in-catch-callback-variable': OFF,
  '@typescript-eslint/await-thenable': OFF,
  '@typescript-eslint/restrict-template-expressions': OFF,
  '@typescript-eslint/restrict-plus-operands': OFF,
  '@typescript-eslint/prefer-nullish-coalescing': OFF,
  '@typescript-eslint/prefer-promise-reject-errors': OFF,
  //
  '@typescript-eslint/no-non-null-assertion': OFF,
  '@typescript-eslint/no-unsafe-assignment': OFF,
  '@typescript-eslint/no-misused-promises': OFF,
  '@typescript-eslint/no-unsafe-argument': OFF,
  '@typescript-eslint/no-unsafe-member-access': OFF,
  '@typescript-eslint/no-floating-promises': OFF,
  '@typescript-eslint/no-unnecessary-condition': OFF,
  '@typescript-eslint/no-confusing-void-expression': OFF,
  '@typescript-eslint/no-redundant-type-constituents': OFF,
  '@typescript-eslint/no-unsafe-call': OFF,
  '@typescript-eslint/no-unsafe-return': OFF,
  '@typescript-eslint/no-unnecessary-type-parameters': OFF,
  '@typescript-eslint/no-unsafe-enum-comparison': OFF,
  '@typescript-eslint/no-unsafe-function-type': OFF, // 可以去掉
  '@typescript-eslint/no-base-to-string': OFF,
  '@typescript-eslint/no-invalid-void-type': OFF,
  '@typescript-eslint/ban-ts-comment': OFF,
  '@typescript-eslint/no-non-null-asserted-optional-chain': OFF,
  //
  '@typescript-eslint/no-require-imports': OFF,
  '@typescript-eslint/unbound-method': OFF,
  '@typescript-eslint/no-dynamic-delete': OFF,
  '@typescript-eslint/no-unused-vars': OFF,
  //
  //
  // react
  'react/destructuring-assignment': OFF,
  'react/require-default-props': OFF,
  'react/no-unused-prop-types': OFF,
  'react/prop-types': OFF,
  'react/no-unused-class-component-methods': OFF,
  'react/no-unstable-nested-components': OFF,
  'react/function-component-definition': OFF,
  'react/jsx-no-useless-fragment': OFF,
  'react/default-props-match-prop-types': OFF,
  //
  'react-hooks/exhaustive-deps': OFF,
  'react-hooks/rules-of-hooks': OFF,
  //
  //
  //
  // libs
  '@tanstack/query/exhaustive-deps': OFF,
  //
  //
  //
};
