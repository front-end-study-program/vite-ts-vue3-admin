import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
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
    return () => (
      <a-layout class={styles.baseLayout}>
        <a-layout-sider width="256" theme={props.sliderTheme}>
          <Sider theme={props.sliderTheme} />
        </a-layout-sider>
        <a-layout>
          <a-layout-header>Header</a-layout-header>
          <a-layout-content>
            <RouterView></RouterView>
          </a-layout-content>
          <a-layout-footer>Footer</a-layout-footer>
        </a-layout>
      </a-layout>
    );
  },
});
