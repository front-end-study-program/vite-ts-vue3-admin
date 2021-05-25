import { createApp } from 'vue';
import App from './App';
import { createI18n } from 'vue-i18n';
import router from './router';
import store from './store';
import 'normalize.css';
import registerAntdUIs from './antd-ui';
import '@/styles/index.less';
import './permission';
const app = createApp(App);
registerAntdUIs(app);

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') || 'zh',
  fallbackLocale: 'zh',
  messages: {
    en: {
      login: 'login',
    },
    zh: {
      login: '登录',
    },
  },
});

app.use(i18n).use(router).use(store).mount('#app');
