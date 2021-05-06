import { createApp } from 'vue';
import App from './App';
import registerAntdUIs from './antd-ui';
import './index.less';

const app = createApp(App);
registerAntdUIs(app);
app.mount('#app');
