import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  languageOptions: {
    globals: {
      process: 'readonly', // Add any global variables you need
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier', // Make sure this is always the last in the array
  ],
  rules: {
    'prettier/prettier': 'error',
  },
});
