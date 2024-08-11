module.exports = {
  extends: '@shukhratbek/eslint-config',
  rules: {
    'unicorn/filename-case': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      { selector: 'function', format: ['camelCase', 'PascalCase'] },
      { selector: 'parameter', format: ['camelCase', 'snake_case', 'PascalCase'], leadingUnderscore: 'allow' },
      { selector: 'typeLike', format: ['PascalCase'] },
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
    ],
    'max-lines-per-function': 'off',
  },
};
