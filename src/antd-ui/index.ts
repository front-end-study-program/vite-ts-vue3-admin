import { App } from '@vue/runtime-core';
import {
  Button,
  Form,
  Input,
  Dropdown,
  Menu,
  Tabs,
  Row,
  Col,
  Checkbox,
  Layout,
  Drawer,
  Tooltip,
  Divider,
} from 'ant-design-vue';
const AntdUIs = [
  Button,
  Form,
  Input,
  Dropdown,
  Menu,
  Tabs,
  Row,
  Col,
  Checkbox,
  Layout,
  Drawer,
  Tooltip,
  Divider,
];
const registerAntdUIs = function (app: App): void {
  AntdUIs.forEach((component) => {
    app.use(component);
  });
};
export default registerAntdUIs;
