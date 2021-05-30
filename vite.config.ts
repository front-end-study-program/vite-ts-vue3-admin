import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'; // vue3 单文件组件解析
import vueJsx from '@vitejs/plugin-vue-jsx'; // jsx 语法解析
import styleImport from 'vite-plugin-style-import'; // 样式按需加载
import { resolve } from 'path';
import { viteMockServe } from 'vite-plugin-mock'; // mock 数据
import vueI18n from '@intlify/vite-plugin-vue-i18n'; // vueI18n 国际化的语言文件资源的快速导入插件
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    styleImport({
      libs: [
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: (name) => {
            return `ant-design-vue/es/${name}/style/index`;
          },
        },
      ],
    }),
    viteMockServe({}),
    vueI18n({
      include: resolve(__dirname, 'src/locales/langs/**'),
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
