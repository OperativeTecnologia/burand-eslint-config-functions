module.exports = {
  env: {
    es2022: true,
    node: true
  },
  extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '_' }],
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/quotes': ['error', 'single'],
    'class-methods-use-this': 'off',
    'import/extensions': ['error', 'ignorePackages', { ts: 'never' }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'max-classes-per-file': 'off',
    'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
    'no-empty-function': ['error', { allow: ['constructors'] }],
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    'prettier/prettier': 'error',
    camelcase: 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {}
    }
  }
};
