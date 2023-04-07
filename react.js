module.exports = {
  extends: ['alloy/react'],
  rules: {
    'react/no-children-prop': ['off'],
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never', propElementValues: 'always' }],
    'react/jsx-no-undef': ['error', { allowGlobals: true }],
  },
};
