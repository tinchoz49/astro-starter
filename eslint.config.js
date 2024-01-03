import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { antfu, typescript } from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
})

/** @type {import('eslint').Linter.FlatConfig[]} */
export default antfu(
  {
    typescript: false,
    formatters: {
      css: true,
      html: true,
      markdown: true,
    },
    rules: {
      'no-undef': ['error'],
      'curly': ['error', 'multi-line'],
      'no-console': 0,
      'antfu/if-newline': 0,
      'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    },
  },
  typescript({
    files: ['**/*.ts', '**/*.tsx', '**/*.astro'],
    componentExts: ['.astro'],
  }),
  ...compat.config({
    overrides: [{
      files: ['**/*.astro'],
      extends: [
        'plugin:astro/recommended',
        'plugin:astro/jsx-a11y-recommended',
      ],
      globals: {
        astroHTML: true,
      },
      env: {
        // Enables global variables available in Astro components.
        'node': true,
        'astro/astro': true,
        'es2020': true,
      },
      parser: 'astro-eslint-parser',
      rules: {
        // this is necessary to force a correct indentation in astro
        'style/indent': ['error', 2],
        'style/jsx-indent': 'off',
        'style/jsx-one-expression-per-line': 'off',
        'unused-imports/no-unused-vars': 'off',
      },
    }],
  }),
  {
    ignores: [
      'public/',
    ],
  },
)
