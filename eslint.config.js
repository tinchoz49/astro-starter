/* eslint perfectionist/sort-objects: "error" */

import { antfu } from '@antfu/eslint-config'
import astroConfig from 'eslint-plugin-astro'

export default antfu(
  {
    formatters: {
      astro: true,
      css: true,
      html: true,
      markdown: true,
      prettierOptions: {
        jsxSingleQuote: true,
      },
    },
    rules: {
      'antfu/if-newline': 0,
      'antfu/top-level-function': 0,
      'curly': ['error', 'multi-line'],
      'import/extensions': ['error', 'ignorePackages'],
      'import/order': 0,
      'jsdoc/require-returns-check': 0,
      'jsdoc/require-returns-description': 0,
      'no-undef': 'error',
      'perfectionist/sort-exports': 'error',
      'perfectionist/sort-imports': [
        'error',
        {
          groups: [
            'type',
            'internal-type',
            'builtin',
            'external',
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'object',
            'unknown',
          ],
          order: 'asc',
          type: 'natural',
        },
      ],
      'perfectionist/sort-named-exports': 'error',
      'perfectionist/sort-named-imports': 'error',
      'quotes': ['error', 'single'],
      'sort-imports': 0,
      'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'style/jsx-quotes': ['error', 'prefer-single'],
      'style/quote-props': ['error', 'consistent-as-needed'],
      'test/no-only-tests': 'error',
      'unicorn/no-useless-spread': 'error',
      'yaml/quotes': ['error', {
        avoidEscape: true,
        prefer: 'double',
      }],
    },
    typescript: {
      tsconfigPath: 'tsconfig.json',
    },
  },
  {
    ignores: [
      'public/',
    ],
  },
).append([
  ...astroConfig.configs['jsx-a11y-recommended'],
  {
    files: ['**/*.astro'],
    rules: {
      'astro/no-set-html-directive': 'off',
      'astro/semi': 'off',
      'style/indent': 'off',
      'style/jsx-closing-tag-location': 'off',
      'style/jsx-indent': 'off',
      'style/jsx-one-expression-per-line': 'off',
      'style/no-multiple-empty-lines': 'off',
    },
  },
])
