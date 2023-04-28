import { defineConfig } from 'vitepress';
import { footer } from './layout/footer';
import { nav } from './layout/nav';
import { sidebar } from './layout/sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Everqin Team ESLint',
  description: 'Everqin Team ESLint Docs',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { light: '/logo-light.png', dark: '/logo-dark.png', alt: 'Everqin Team' },
    footer,
    nav,
    sidebar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/handpear' }],
    docFooter: { prev: '上一页', next: '下一页' },
  },
  vite: {
    server: { host: true },
    css: { devSourcemap: true },
  },
});
