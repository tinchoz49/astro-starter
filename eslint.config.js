/* eslint perfectionist/sort-objects: "error" */

import { standard } from 'eslint-config-standard-ext'
import astroPlugin from 'eslint-plugin-astro'
import tailwind from 'eslint-plugin-tailwindcss'

const a11yConfig = astroPlugin.configs['jsx-a11y-recommended'].find(c => !!c?.plugins?.['jsx-a11y'])

const config = standard(
  {
    astro: true,
    formatters: true,
    markdown: true,
    typescript: true,
  },
  a11yConfig,
  ...tailwind.configs['flat/recommended'],
  {
    rules: {
      'tailwindcss/no-custom-classname': 'off',
    },
  },
  {
    ignores: [
      'public/',
    ],
  }
)

export default config
