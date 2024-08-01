/* eslint perfectionist/sort-objects: "error" */

import { standard } from 'eslint-config-standard-ext'
import tailwind from 'eslint-plugin-tailwindcss'

const config = standard(
  {
    astro: {
      config: 'jsx-a11y-recommended',
    },
    formatters: {
      css: true,
      html: true,
      markdown: true,
    },
    markdown: true,
    typescript: true,
  },
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
