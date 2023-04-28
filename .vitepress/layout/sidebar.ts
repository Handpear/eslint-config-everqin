import { DefaultTheme } from 'vitepress';
import base from '../../public/base.json';
import react from '../../public/react.json';
import typescript from '../../public/typescript.json';
import vue from '../../public/vue.json';

export const sidebar: DefaultTheme.Sidebar = Object.entries({
  base,
  react,
  vue,
  typescript,
}).reduce<DefaultTheme.Sidebar>((prev, [key, value]) => {
  prev[`/rules/${key}/`] = [
    {
      text: key.toUpperCase(),
      link: `/rules/${key}/`,
      items: Object.values(value).map((rule) => ({
        text: rule.name,
        link: `/rules/${key}/${rule.name.replace(rule.rulePrefix, '')}/index`,
      })),
    },
  ];
  return prev;
}, {});
