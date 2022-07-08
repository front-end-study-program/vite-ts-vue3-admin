import { defineComponent, computed, PropType } from 'vue';
import { useRoute } from 'vue-router';
import MySubMenu from './MySubMenu';
import { syncRoutes } from '@/router';
import { Menu, MenuTheme } from 'ant-design-vue';
import { MenuMode } from '@/antd-ui/components';

export default defineComponent({
  name: 'Menu',
  props: {
    mode: {
      type: String as PropType<MenuMode>,
      default: 'inline',
    },
    theme: {
      type: String as PropType<MenuTheme>,
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
      <Menu
        mode={props.mode}
        theme={props.theme}
        selectedKeys={selectedKeys.value}
        openKeys={openKeys.value}
      >
        <MySubMenu routes={syncRoutes} />
      </Menu>
    );
  },
});
