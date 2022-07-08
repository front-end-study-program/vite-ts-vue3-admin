import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'; // vue3 单文件组件解析
import vueJsx from '@vitejs/plugin-vue-jsx'; // jsx 语法解析
import { resolve } from 'path';
import { viteMockServe } from 'vite-plugin-mock'; // mock 数据
import vueI18n from '@intlify/vite-plugin-vue-i18n'; // vueI18n 国际化的语言文件资源的快速导入插件
import {
  createStyleImportPlugin,
  AndDesignVueResolve,
} from 'vite-plugin-style-import'; // 按需加载
import Inspect from 'vite-plugin-inspect';

export default defineConfig({
  plugins: [
    Inspect(),
    vue(),
    vueJsx(),
    createStyleImportPlugin({
      resolves: [AndDesignVueResolve()],
    }),
    viteMockServe({}),
    vueI18n({
      include: resolve(__dirname, 'src/locales/langs/**'),
      globalSFCScope: true,
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      '@': resolve(__dirname, 'src'),
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js', //解决警告You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle.
    },
  },
  css: {
    modules: {
      generateScopedName: '[local]_[hash:base64:5]',
      localsConvention: 'camelCaseOnly',
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  server: {
    host: true,
  },
});
