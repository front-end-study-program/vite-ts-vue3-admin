import { defineComponent, ref } from 'vue';
import { RouterView } from 'vue-router';
import Header from './Header';
import Sider from './Sider';
import styles from './styles.module.less';
import {
  Layout,
  LayoutHeader,
  LayoutContent,
  LayoutFooter,
  LayoutSider,
} from 'ant-design-vue';

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
      <Layout class={styles.baseLayout}>
        <LayoutSider
          width="256"
          theme={props.sliderTheme}
          collapsed={isCollapsed.value}
        >
          <Sider theme={props.sliderTheme} />
        </LayoutSider>
        <Layout>
          <LayoutHeader>
            <Header
              isCollapsed={isCollapsed.value}
              onToggleCollapsed={toggleCollapsed}
            />
          </LayoutHeader>
          <LayoutContent>
            <RouterView></RouterView>
          </LayoutContent>
          <LayoutFooter>Footer</LayoutFooter>
        </Layout>
      </Layout>
    );
  },
});
