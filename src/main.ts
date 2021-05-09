import { createApp } from 'vue';
import App from './App';
import router from './router';
import store from './store';
import registerAntdUIs from './antd-ui';
import './index.less';
const app = createApp(App);
registerAntdUIs(app);
app.use(router).use(store).mount('#app');
