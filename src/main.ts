import { createApp } from 'vue';
import App from './App';
import { createI18n } from 'vue-i18n';
// import messages from '@intlify/vite-plugin-vue-i18n/messages';
import router from './router';
import store from './store';
import 'normalize.css'; // 重置必要的 css 样式
import registerAntdUIs from './antd-ui';
import '@/styles/index.less';
import './permission';
const app = createApp(App);
registerAntdUIs(app);
// console.log('messages', messages);
import messages from '@/locales/langs';
const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') || 'zh',
  fallbackLocale: 'zh',
  messages,
});

app.use(i18n).use(router).use(store).mount('#app');
