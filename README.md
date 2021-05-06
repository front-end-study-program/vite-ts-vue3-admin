# vite-ts-vue3-admin

1. 集成 vite (vite)
2. 集成 vue3 (vue、@vitejs/plugin-vue、@vue/compiler-sfc)
3. 集成 ts (typescript) 集成完成
4. 集成 tsx/jsx (@vitejs/plugin-vue-jsx) 集成完成、后续看看是否有插件支持在 setup 中的语法提示，替换掉 render。
5. 集成 ant-design-vue (ant-design-vue@next) 集成完成、按需加载待完成
6. 集成 less 集成完成

## 代码格式化集成

1. 集成 eslint (eslint、eslint-plugin-vue、@vue/eslint-config-typescript、@typescript-eslint/parser、@typescript-eslint/eslint-plugin) 已集成 待修复错误
2. 集成 prettier (prettier、eslint-plugin-prettier、@vue/eslint-config-prettier) 已集成
3. 配置 gitHooks 限制代码提交规范和代码格式规范 (yorkie、chalk、lint-staged) verifyCommit.ts git 提交的规则验证
