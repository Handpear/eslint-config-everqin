module.exports = {
  extends: ['alloy/vue'],
  rules: {
    'vue/v-on-event-hyphenation': ['error', 'never'],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/component-tags-order': [
      'error',
      {
        order: [
          'script:not([setup])',
          'script[setup]',
          'template',
          'style:not([scoped])',
          'style[scoped]',
          'i18n:not([locale=zh])',
          'i18n[locale=zh]',
        ],
      },
    ],
  },
};
