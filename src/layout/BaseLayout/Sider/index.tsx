import { defineComponent, PropType } from 'vue';
import Menu from '../../components/Menu';
import Logo from '../../components/Logo';
import { MenuTheme } from 'ant-design-vue';
export default defineComponent({
  name: 'Sider',
  props: {
    theme: {
      type: String as PropType<MenuTheme>,
      default: '',
    },
  },
  setup(props) {
    return () => (
      <>
        <Logo theme={props.theme} />
        <Menu theme={props.theme} />
      </>
    );
  },
});
