import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
// @ts-ignore
import globals from 'globals';
//
import esConfigPrettier from 'eslint-config-prettier';
import esPluginReact from 'eslint-plugin-react';
import esPluginReactHooks from 'eslint-plugin-react-hooks';
import esPluginPrettier from 'eslint-plugin-prettier';
import esPluginQuery from '@tanstack/eslint-plugin-query';
//
// @ts-ignore
import esPluginImport from 'eslint-plugin-import';
// @ts-ignore
import esPluginJsxA11y from 'eslint-plugin-jsx-a11y';

import esPluginUni from '----pkg-config/eslint-plugin-uni';
import { eslintConfigUniRules } from '----pkg-config/eslint-config-uni/eslint-config-uni-base-rules';
import { eslintConfigUniIgnores } from '----pkg-config/eslint-config-uni/eslint-config-uni-ignores';

export default tseslint.config(
  eslint.configs.recommended,
  esConfigPrettier,
  ...tseslint.configs.strict,
  ...tseslint.configs.strictTypeChecked,
  ...esPluginQuery.configs['flat/recommended'],
  //
  {
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 2022,
      parserOptions: {
        project: true,
        projectService: true,
        // @ts-ignore
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  {
    plugins: {
      import: esPluginImport,
      react: esPluginReact,
      prettier: esPluginPrettier,
      'react-hooks': esPluginReactHooks,
      'jsx-a11y': esPluginJsxA11y,
      '@typescript-eslint': tseslint.plugin,
      uni: esPluginUni,
    },
  },
  {
    files: ['**/*.js', '**/*.mjs'],
    ...tseslint.configs.disableTypeChecked,
  },
  {
    rules: eslintConfigUniRules,
  },
  {
    ignores: eslintConfigUniIgnores,
  },
);
