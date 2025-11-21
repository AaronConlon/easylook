// @ts-ignore
import { readFileSync } from 'fs';

import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import esConfigPrettier from 'eslint-config-prettier';
import esPluginReact from 'eslint-plugin-react';
import esPluginPrettier from 'eslint-plugin-prettier';
import esPluginQuery from '@tanstack/eslint-plugin-query';
import esPluginImport from 'eslint-plugin-import';
import esPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import { defineConfig } from 'eslint/config';

import { eslintConfigBaseRules } from './configs/eslint-configs/eslint-config-base-rules';

const eslintIgnoreList = readFileSync('.prettierignore', 'utf-8')
  .split('\n')
  .filter((line: any) => line.trim() && !line.startsWith('#'));

export default defineConfig(
  eslint.configs.recommended,
  esConfigPrettier,
  tseslint.configs.strict,
  tseslint.configs.strictTypeChecked,
  esPluginQuery.configs['flat/recommended'],
  //
  {
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 2022,
      parserOptions: {
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
      'jsx-a11y': esPluginJsxA11y,
      '@typescript-eslint': tseslint.plugin,
    },
  },
  {
    files: ['**/*.js', '**/*.mjs'],
    ...tseslint.configs.disableTypeChecked,
  },
  {
    rules: eslintConfigBaseRules,
  },
  {
    ignores: eslintIgnoreList,
  },
);
