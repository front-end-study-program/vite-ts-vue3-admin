import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import SubMenu from './SubMenu';
import { syncRoutes } from '@/router';

export default defineComponent({
  name: 'Menu',
  props: {
    mode: {
      type: String,
      default: 'inline',
    },
    theme: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const route = useRoute();
    const selectedKeys = computed<string[]>(() => [route.path]);
    const openKeys = computed<string[]>(() => {
      if (props.mode === 'horizontal') return [];
      const matched = route.matched;
      return matched.map((matchItem) => matchItem.path);
    });
    return () => (
      <a-menu
        mode={props.mode}
        theme={props.theme}
        selectedKeys={selectedKeys.value}
        openKeys={openKeys.value}
      >
        <SubMenu routes={syncRoutes} />
      </a-menu>
    );
  },
});
