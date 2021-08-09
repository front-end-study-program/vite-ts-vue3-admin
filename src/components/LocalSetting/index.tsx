import { defineComponent, reactive, VNodeChild } from 'vue';
import { GlobalOutlined } from '@ant-design/icons-vue';
import { Dropdown, Menu } from 'ant-design-vue';
import { useI18n } from 'vue-i18n';

interface MenuInfo {
  key: string;
  keyPath: string[];
  item: VNodeChild;
  domEvent: MouseEvent;
}

export default defineComponent({
  setup() {
    const selectLocals = reactive<Array<string>>([
      localStorage.getItem('locale') || 'cn',
    ]);
    const { locale } = useI18n({ useScope: 'global' });
    const onClick = ({ key }: MenuInfo) => {
      locale.value = key;
      selectLocals[0] = key;
      localStorage.setItem('locale', key);
    };
    const DropDownMenu = (
      <Menu selectedKeys={selectLocals} onClick={onClick}>
        <Menu.Item key="cn">cn 简体中文</Menu.Item>
        <Menu.Item key="us">us English</Menu.Item>
      </Menu>
    );
    return () => (
      <Dropdown overlay={DropDownMenu}>
        <GlobalOutlined />
      </Dropdown>
    );
  },
});
