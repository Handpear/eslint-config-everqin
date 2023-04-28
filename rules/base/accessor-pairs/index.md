<script setup>
import { useData } from 'vitepress'

const { page, } = useData()
</script>

# [accessor-pairs](https://eslint.org/docs/rules/accessor-pairs)

## 配置

<<< @/rules/base/accessor-pairs/.eslintrc.js

## 错误示例

<<< @/rules/base/accessor-pairs/bad.js

## 正确示例

<<< @/rules/base/accessor-pairs/good.js
