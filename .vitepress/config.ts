import { defineConfig } from 'vitepress';
import { AutoSidebar } from '../plugins/AutoSidebar';
import { footer } from './layout/footer';
import { nav } from './layout/nav';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Everqin ESLint Rules',
  description: 'Everqin Team ESLint Docs',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { light: '/logo-light.png', dark: '/logo-dark.png', alt: 'Everqin Team' },
    footer,
    nav,
    socialLinks: [{ icon: 'github', link: 'https://github.com/handpear' }],
    docFooter: { prev: '上一页', next: '下一页' },
    lastUpdatedText: '更新日期',
    outlineTitle: '目录',
  },
  srcExclude: ['**/README.md'],
  vite: {
    server: { host: true },
    css: { devSourcemap: true },
    plugins: [AutoSidebar({ root: '/rules' })],
  },
});
