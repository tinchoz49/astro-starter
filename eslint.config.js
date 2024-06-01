/* eslint perfectionist/sort-objects: "error" */

import { standard } from 'eslint-config-standard-ext'
import tailwind from 'eslint-plugin-tailwindcss'

export default standard(
  {
    astro: {
      a11y: true,
    },
    formatters: false,
    typescript: {
      tsconfigPath: 'tsconfig.json',
    },
  },
  {
    ignores: [
      'public/',
    ],
  },
  ...tailwind.configs['flat/recommended'],
  {
    rules: {
      'tailwindcss/no-custom-classname': 'off',
    },
  }
)
