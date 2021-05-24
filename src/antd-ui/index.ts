import { App } from '@vue/runtime-core';
import { Button, Form, Input } from 'ant-design-vue';
const AntdUIs = [Button, Form, Input];
const registerAntdUIs = function (app: App): void {
  AntdUIs.forEach((component) => {
    app.use(component);
  });
};
export default registerAntdUIs;
