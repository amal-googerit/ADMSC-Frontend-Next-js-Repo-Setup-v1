module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'next/core-web-vitals',
    'airbnb',
    'airbnb-typescript',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
  ecmaVersion: 2021,
  sourceType: 'module',
  project: './tsconfig.json',
  tsconfigRootDir: __dirname,
},
overrides: [
  {
    files: ['*.js', '*.cjs', '*.mjs'], // JS config files
    parserOptions: {
      project: null, // Don’t use TS project for plain JS files
    },
  },
],

  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx', '.js'] }],
    'react/require-default-props': [0],
    'react/jsx-props-no-spreading': [0],
    camelcase: [0],
    'no-underscore-dangle': [0],
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'import/prefer-default-export': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['arrow-function', 'function-declaration'],
        unnamedComponents: 'arrow-function',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
