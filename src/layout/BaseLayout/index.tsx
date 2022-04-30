import { defineComponent, ref } from 'vue';
import { RouterView } from 'vue-router';
import Header from './Header';
import Sider from './Sider';
import styles from './styles.module.less';

export default defineComponent({
  name: 'BaseLayout',
  props: {
    sliderTheme: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const isCollapsed = ref(false);
    const toggleCollapsed = () => {
      isCollapsed.value = !isCollapsed.value;
    };

    return () => (
      <a-layout class={styles.baseLayout}>
        <a-layout-sider
          width="256"
          theme={props.sliderTheme}
          collapsed={isCollapsed.value}
        >
          <Sider theme={props.sliderTheme} />
        </a-layout-sider>
        <a-layout>
          <a-layout-header>
            <Header
              isCollapsed={isCollapsed.value}
              onToggleCollapsed={toggleCollapsed}
            />
          </a-layout-header>
          <a-layout-content>
            <RouterView></RouterView>
          </a-layout-content>
          <a-layout-footer>Footer</a-layout-footer>
        </a-layout>
      </a-layout>
    );
  },
});
