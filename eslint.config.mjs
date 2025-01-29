import typescriptESLintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.ts'],
    plugins: {
      '@typescript-eslint': typescriptESLintPlugin
    },
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    rules: {
      'array-bracket-newline': ['error', {multiline: true, minItems: 3}],
      'array-element-newline': ['error', {multiline: true, minItems: 3}],
      'indent': ['error', 4, {SwitchCase: 1}],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'comma-dangle': ['error', 'never'],
      'object-curly-spacing': ['error', 'never'],
      'object-curly-newline': ['error', {multiline: true, consistent: true}],
      'arrow-parens': ['error', 'always'],
      'max-len': ['error', {code: 300}]
    },
  },
];