import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint-define-config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: globals.browser,
    },
  },
]);