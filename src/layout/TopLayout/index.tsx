import { defineComponent } from 'vue';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import styles from './styles.module.less';
import useSettings from '../settings/hooks/useSettings';
import {
  Layout,
  LayoutHeader,
  LayoutContent,
  LayoutFooter,
} from 'ant-design-vue';
export default defineComponent({
  name: 'TopLayout',
  setup() {
    const { sliderTheme } = useSettings();
    return () => (
      <Layout class={styles.topLayout}>
        <LayoutHeader
          style="display: flex; align-item: center;"
          class={sliderTheme.value === 'dark' ? styles.darkBg : styles.lightBg}
        >
          <Logo theme={sliderTheme.value} small />
          <Menu theme={sliderTheme.value} mode="horizontal" />
        </LayoutHeader>
        <LayoutContent style="padding: 0 50px">content</LayoutContent>
        <LayoutFooter style="text-align: center">footer</LayoutFooter>
      </Layout>
    );
  },
});
