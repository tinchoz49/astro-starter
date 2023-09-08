/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: 'latest'
  },
  overrides: [
    {
      files: ['*.jsx', '*.tsx'],
      extends: [
        'standard-jsx'
      ]
    },
    {
      files: ['*.astro'],
      extends: [
        'plugin:astro/recommended',
        'plugin:astro/jsx-a11y-recommended'
      ],
      env: {
        // Enables global variables available in Astro components.
        node: true,
        'astro/astro': true,
        es2020: true
      },
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      }
    }
  ]
}
