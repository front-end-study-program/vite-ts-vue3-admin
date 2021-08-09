import { App } from '@vue/runtime-core';
import { Button, Form, Input, Dropdown, Menu } from 'ant-design-vue';
const AntdUIs = [Button, Form, Input, Dropdown, Menu];
const registerAntdUIs = function (app: App): void {
  AntdUIs.forEach((component) => {
    app.use(component);
  });
};
export default registerAntdUIs;
