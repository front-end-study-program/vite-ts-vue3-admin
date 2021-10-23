import { defineComponent } from 'vue';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import styles from './styles.module.less';
import useSettings from '../settings/hooks/useSettings';
export default defineComponent({
  name: 'TopLayout',
  setup() {
    const { sliderTheme } = useSettings();
    return () => (
      <a-layout class={styles.topLayout}>
        <a-layout-header
          style="display: flex; align-item: center;"
          class={sliderTheme.value === 'dark' ? styles.darkBg : styles.lightBg}
        >
          <Logo theme={sliderTheme.value} small />
          <Menu theme={sliderTheme.value} mode="horizontal" />
        </a-layout-header>
        <a-layout-content style="padding: 0 50px">content</a-layout-content>
        <a-layout-footer style="text-align: center">footer</a-layout-footer>
      </a-layout>
    );
  },
});
