import path from 'node:path'
import { fileURLToPath } from 'node:url'
import antfu from '@antfu/eslint-config'
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
    formatters: {
      css: true,
      html: true,
      markdown: true,
    },
  },
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
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        // this is necessary to force a correct indentation in astro
        'style/indent': ['error', 2],
        'style/jsx-indent': 'off',
        'style/jsx-one-expression-per-line': 'off',
      },
    }],
  }),
  {
    ignores: [
      'public/',
    ],
  },
)
