/* eslint-disable @typescript-eslint/no-require-imports */
import pkg from '../package.json';

export const NAMESPACE_CONFIG = {
  base: {
    /** bad.js good.js 的后缀 */
    exampleExtension: 'js',
    /** 插件前缀 */
    rulePrefix: '',
    /** 规则配置 */
    ruleConfig: require('../public/base.json'),
    /** 各插件的文档地址 */
    getDocsUrl: (rule: string) => `https://eslint.org/docs/rules/${rule}`,
    /** 插件的名称 */
    pluginName: undefined,
  },
  react: {
    exampleExtension: 'js',
    rulePrefix: 'react/',
    ruleConfig: require('../public/react.json'),
    getDocsUrl: (rule: string) =>
      `https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/${rule.replace(/.*\//, '')}.md`,
    pluginName: 'eslint-plugin-react',
  },
  vue: {
    exampleExtension: 'vue',
    rulePrefix: 'vue/',
    ruleConfig: require('../public/vue.json'),
    getDocsUrl: (rule: string) => `https://eslint.vuejs.org/rules/${rule.replace(/.*\//, '')}.html`,
    pluginName: 'eslint-plugin-vue',
  },
  typescript: {
    exampleExtension: 'ts',
    rulePrefix: '@typescript-eslint/',
    ruleConfig: require('../public/typescript.json'),
    getDocsUrl: (rule: string) => `https://typescript-eslint.io/rules/${rule.replace(/.*\//, '')}/`,
    pluginName: '@typescript-eslint/eslint-plugin',
  },
};

export type Namespace = keyof typeof NAMESPACE_CONFIG;
export const NAMESPACES = Object.keys(NAMESPACE_CONFIG) as Namespace[];

/** 写入 eslintrc 中的元信息 */
export function buildEslintrcMeta() {
  return `
/**
 * ${pkg.description}
 * ${pkg.homepage}
 *
 * 依赖版本：
 *   ${[
   'eslint',
   'eslint-plugin-react',
   'eslint-plugin-vue',
   '@babel/core',
   '@babel/eslint-parser',
   '@babel/preset-react',
   'vue-eslint-parser',
   '@typescript-eslint/parser',
   '@typescript-eslint/eslint-plugin',
   'typescript',
 ]
   .map((key) => `${key} ${(pkg.devDependencies as Record<string, string>)[key]}`)
   .join('\n *   ')}
 *
 * 此文件是由脚本 scripts/build.ts 自动生成
 */
`;
}
