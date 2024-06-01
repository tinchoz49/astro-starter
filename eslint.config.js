/* eslint perfectionist/sort-objects: "error" */

import { standard } from 'eslint-config-standard-ext'

export default standard(
  {
    astro: {
      a11y: true,
    },
    formatters: {
      astro: true,
      css: true,
      html: true,
      markdown: true,
    },
    typescript: {
      tsconfigPath: 'tsconfig.json',
    },
  },
  {
    ignores: [
      'public/',
    ],
  }
)
