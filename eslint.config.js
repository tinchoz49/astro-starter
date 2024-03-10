/* eslint perfectionist/sort-objects: "error" */

import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { antfu } from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
})

export default antfu(
  {
    astro: true,
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
      'curly': ['error', 'multi-line'],
      'import/extensions': ['error', 'ignorePackages'],
      'import/order': 0,
      'no-console': 0,
      'no-undef': ['error'],
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
      'perfectionist/sort-objects': 'off',
      'sort-imports': 0,
      'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'style/jsx-quotes': ['error', 'prefer-single'],
      'style/quote-props': ['error', 'consistent-as-needed'],
      'test/no-only-tests': 'error',
      'yaml/quotes': ['error', {
        avoidEscape: true,
        prefer: 'double',
      }],
    },
    typescript: {
      tsconfigPath: 'tsconfig.json',
    },
  },
  ...compat.config({
    overrides: [{
      env: {
        'astro/astro': true,
        'es2020': true,
        // Enables global variables available in Astro components.
        'node': true,
      },
      extends: [
        'plugin:astro/jsx-a11y-recommended',
      ],
      files: ['**/*.astro'],
      globals: {
        astroHTML: true,
      },
      parser: 'astro-eslint-parser',
    }],
  }),
  {
    ignores: [
      'public/',
    ],
  },
)
