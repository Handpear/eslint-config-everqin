# eslint-config-everqin

Everqin ESLint 规则

- 修改自 [eslint-config-alloy][网站]

一套适用于 React/Vue/Typescript 项目的 ESLint 配置规范。

## 快速开始

请根据你的项目使用的技术栈选择以下配置：

- [内置规则](#内置规则)
- [React](#react)
- [Vue](#vue)
- [TypeScript](#typescript)
- [TypeScript React](#typescript-react)
- [TypeScript Vue](#typescript-vue)

## 使用方法

### 内置规则

```bash
npm install --save-dev eslint @babel/core @babel/eslint-parser eslint-config-everqin
```

在你的项目的根目录下创建一个 `.eslintrc.js` 文件，并将以下内容复制进去：

```js
module.exports = {
  extends: ['everqin'],
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    //
    // myGlobal: false
  },
  rules: {
    // 自定义你的规则
  },
};
```

### React

```bash
npm install --save-dev eslint @babel/core @babel/eslint-parser @babel/preset-react@latest eslint-plugin-react eslint-config-everqin
```

在你的项目的根目录下创建一个 `.eslintrc.js` 文件，并将以下内容复制进去：

```js
module.exports = {
  extends: ['everqin', 'everqin/react'],
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    //
    // myGlobal: false
  },
  rules: {
    // 自定义你的规则
  },
};
```

### Vue

```bash
npm install --save-dev eslint @babel/core @babel/eslint-parser vue-eslint-parser eslint-plugin-vue eslint-config-everqin
```

在你的项目的根目录下创建一个 `.eslintrc.js` 文件，并将以下内容复制进去：

```js
module.exports = {
  extends: ['everqin', 'everqin/vue'],
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    //
    // myGlobal: false
  },
  rules: {
    // 自定义你的规则
  },
};
```

### TypeScript

```bash
npm install --save-dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-everqin
```

在你的项目的根目录下创建一个 `.eslintrc.js` 文件，并将以下内容复制进去：

```js
module.exports = {
  extends: ['everqin', 'everqin/typescript'],
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    //
    // myGlobal: false
  },
  rules: {
    // 自定义你的规则

    // 如果使用全局命名空间导致报错，则添加以下规则
    'no-undef': ['off'],
  },
};
```

### TypeScript React

```bash
npm install --save-dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-config-everqin
```

在你的项目的根目录下创建一个 `.eslintrc.js` 文件，并将以下内容复制进去：

```js
module.exports = {
  extends: ['everqin', 'everqin/react', 'everqin/typescript'],
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    //
    // myGlobal: false
  },
  rules: {
    // 自定义你的规则

    // 如果使用全局命名空间导致报错，则添加以下规则
    'no-undef': ['off'],
  },
};
```

### TypeScript Vue

```bash
npm install --save-dev @babel/core @babel/eslint-parser @typescript-eslint/eslint-plugin @typescript-eslint/parser @vue/eslint-config-typescript eslint eslint-config-everqin eslint-plugin-vue vue-eslint-parser
```

在你的项目的根目录下创建一个 `.eslintrc.js` 文件，并将以下内容复制进去：

```js
module.exports = {
  extends: ['everqin', 'everqin/vue', 'everqin/typescript'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: {
      js: '@babel/eslint-parser',
      jsx: '@babel/eslint-parser',

      ts: '@typescript-eslint/parser',
      tsx: '@typescript-eslint/parser',

      // Leave the template parser unspecified, so that it could be determined by `<script lang="...">`
    },
  },
  env: {
    // Your environments (which contains several predefined global variables)
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // Your global variables (setting to false means it's not allowed to be reassigned)
    //
    // myGlobal: false
  },
  rules: {
    // Customize your rules
    //
    // Please keep this rule off because it requiresTypeChecking
    // https://github.com/vuejs/vue-eslint-parser/issues/104
    // https://github.com/typescript-eslint/typescript-eslint/pull/5318
    '@typescript-eslint/prefer-optional-chain': 'off',

    // 如果使用全局命名空间导致报错，则添加以下规则
    'no-undef': ['off'],
  },
};
```

## 常见问题

### 在 VSCode 中使用

在 VSCode 中安装 ESLint 扩展即可。

参考[这里](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)可以对扩展进行配置。

### 保存时自动修复 ESLint 错误

如果想要开启「保存时自动修复」的功能，你需要配置 `.vscode/settings.json`：

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### 如何结合 Prettier 使用

不需要引入 `eslint-config-prettier`。只需要安装 `prettier` 及相关 VSCode 插件即可。

VSCode 的一个最佳实践就是通过配置 `.vscode/settings.json` 来支持自动修复 Prettier 和 ESLint 错误：

```json
{
  "files.eol": "\n",
  "editor.tabSize": 2,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## 参考

- [AlloyTeam ESLint][网站]

[网站]: https://alloyteam.github.io/eslint-config-alloy/?language=zh-CN
