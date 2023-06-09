// 💡 remove unused plugins, extends, rules ...
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'jest', 'simple-import-sort'],
  extends: [
    'next',
    'turbo',
    'eslint:recommended',
    'plugin:import/recommended',
    'prettier',
  ],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-var-requires': 'off',
    'import/extensions': 'off',
    'import/first': 'error',
    'import/named': 'off',
    'import/newline-after-import': 'error',
    'import/no-anonymous-default-export': 'off',
    'import/no-duplicates': 'error',
    'import/no-named-as-default-member': 'off',
    'import/no-unresolved': 'off',
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    'jest/no-disabled-tests': 'off',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'no-await-in-loop': 'warn',
    'no-console': 'off',
    'no-nested-ternary': 'off',
    'no-plusplus': 'error',
    'no-undef': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'prefer-template': 'warn',
    'react/display-name': 'off',
    'react/jsx-key': 'off',
    'react/react-in-jsx-scope': 'off',
    'simple-import-sort/exports': 'error',
    'sort-imports': 'off',
    eqeqeq: 'error',
    'spaced-comment': [
      'error',
      'always',
      {
        exceptions: ['-', '+'],
        markers: ['/'],
      },
    ],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
    ],
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          [
            '^\\u0000',
            '^react',
            '^next\\/',
            '^@?\\w',
            '^@/',
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
            '^\\u0000',
            '^.+\\.s?css$',
          ],
        ],
      },
    ],
  },
  globals: {
    React: 'writable',
  },
  env: {
    jest: true,
    'jest/globals': true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
};
