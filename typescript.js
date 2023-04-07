module.exports = {
  extends: ['alloy/typescript'],
  rules: {
    '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
    '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
    '@typescript-eslint/no-explicit-any': ['error', { fixToUnknown: true, ignoreRestArgs: true }],
    '@typescript-eslint/no-invalid-this': ['off'],
    '@typescript-eslint/triple-slash-reference': ['off'],
  },
};
