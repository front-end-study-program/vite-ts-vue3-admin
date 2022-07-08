import { defineComponent, reactive, VNodeChild } from 'vue';
import { GlobalOutlined } from '@ant-design/icons-vue';
import { useI18n } from 'vue-i18n';
import { Menu, MenuItem, Dropdown } from 'ant-design-vue';
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
        <MenuItem key="cn">cn 简体中文</MenuItem>
        <MenuItem key="us">us English</MenuItem>
      </Menu>
    );
    return () => (
      <Dropdown overlay={DropDownMenu}>
        <GlobalOutlined />
      </Dropdown>
    );
  },
});
