import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import styleImport from 'vite-plugin-style-import';
import path from 'path';
import { viteMockServe } from 'vite-plugin-mock';
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
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
