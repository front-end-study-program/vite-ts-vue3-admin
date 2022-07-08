# vite-ts-vue3-admin

仿 ant-design-pro 的后台管理系统

1. 集成 vite (vite) 完成
2. 集成 vue3 (vue、@vitejs/plugin-vue、@vue/compiler-sfc) 完成
3. 集成 ts (typescript) 完成
4. 集成 tsx/jsx (@vitejs/plugin-vue-jsx) 完成
5. 集成 ant-design-vue (ant-design-vue@next、vite-plugin-style-import) 集成完成、按需加载完成
6. 集成 less 完成
7. 集成 vue-router (vue-router) 完成
8. 集成 vuex (vuex) 完成
9. 集成 mock 数据 (mockjs、vite-plugin-mock) 完成
10. 封装 axios 初步完成
11. 环境变量 使用 vite import.meta.env 通过配置 .env[mode] 文件去配置一些环境变量，在 typings/env.d.ts 增加自定义环境变量的类型推导 完成
12. css 重置 (normalize.css) 完成
13. css 模块化 vite 开箱支持 vscode css modules 插件增加联想提示
14. cookie 操作 (js-cookie) 完成
15. composition-api 实用函数集合 (@vueuse/core) 完成
16. vite-plugin-inspect 可以看到 vite 插件对文件的更改对比

## 代码格式化集成

1. 集成 eslint (eslint、eslint-plugin-vue、@vue/eslint-config-typescript、@typescript-eslint/parser、@typescript-eslint/eslint-plugin) 完成
2. 集成 prettier (prettier、eslint-plugin-prettier、@vue/eslint-config-prettier) 完成
3. 集成 stylelint (stylelint、stylelint-order、stylelint-config-rational-order、stylelint-config-standard、stylelint-config-prettier) 完成

## 代码格式规范和 git 提交规范集成

1. 配置 gitHooks 限制代码提交规范和代码格式规范 (yorkie、chalk、lint-staged) verifyCommit.ts git 提交的规则验证 完成

## 功能

1. 登录 完成（还需要改造成 jsx vModel 指令的方式来做响应式）
2. 主题切换
3. 布局切换
4. 国际化 (vue-i18n@next、@intlify/vite-plugin-vue-i18n) 完成
5. 字体图标库
6. 水印
7. 路由守卫-初步完成

## TODO

1.其他文件类型的 ts 声明及路径提示
2.layout 组件相关的东西还需优化
3.vite-plugin-style-import 2.0 版本有个 consola 模块的依赖问题。之后插件升级在去掉
