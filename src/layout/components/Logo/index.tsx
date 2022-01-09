import { defineComponent } from 'vue';
import Logo from '@/assets/images/logo.svg';
import styles from './styles.module.less';

export default defineComponent({
  name: 'Logo',
  props: {
    small: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    return () => (
      <div class={props.small ? styles.smallLogo : styles.logo}>
        <a href="/">
          <img src={Logo} alt="logo" />
          <h1
            class={props.theme === 'dark' ? styles.darkText : styles.lightText}
          >
            Ant Design Pro
          </h1>
        </a>
      </div>
    );
  },
});
