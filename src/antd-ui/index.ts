import { App } from '@vue/runtime-core';
import { Button } from 'ant-design-vue';
const AntdUIs = [Button];
const registerAntdUIs = function (app: App): void {
  AntdUIs.forEach((component) => {
    app.use(component);
  });
};
export default registerAntdUIs;
