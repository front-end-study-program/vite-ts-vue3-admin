import { defineComponent } from 'vue';
import Menu from '../../components/Menu';
import Logo from '../../components/Logo';
export default defineComponent({
  name: 'Sider',
  props: {
    theme: {
      type: String,
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
