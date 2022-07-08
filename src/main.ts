import { createApp } from 'vue';
import App from './App';
import router from './router';
import store from './store';
import 'normalize.css'; // 重置必要的 css 样式
import './antd-ui/index.less';
import '@/styles/index.less';
import './permission';
import i18n from '@/locales';

const app = createApp(App);

app.use(i18n).use(router).use(store).mount('#app');
