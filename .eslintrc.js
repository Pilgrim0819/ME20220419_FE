module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    commonjs: true,
  },
  extends: ['plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  globals: {
    process: 'readonly',
    module: 'readonly',
  },
  plugins: ['react'],
  rules: {
    'no-undef': 'error',
    'react/function-component-definition': 'off',
    'consistent-return': 'off',
    'no-alert': 'off',
    'no-console': 'off',
  },
};
