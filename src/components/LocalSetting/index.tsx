import { defineComponent, reactive, VNodeChild } from 'vue';
import { GlobalOutlined } from '@ant-design/icons-vue';
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
      <a-menu selectedKeys={selectLocals} onClick={onClick}>
        <a-menu-item key="cn">cn 简体中文</a-menu-item>
        <a-menu-item key="us">us English</a-menu-item>
      </a-menu>
    );
    return () => (
      <a-dropdown overlay={DropDownMenu}>
        <GlobalOutlined />
      </a-dropdown>
    );
  },
});
