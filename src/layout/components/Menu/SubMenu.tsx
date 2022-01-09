import { defineComponent, PropType } from 'vue';
import { RouteRecordRaw, useRouter } from 'vue-router';

const SubMenu = defineComponent({
  name: 'SubMenu',
  props: {
    routes: {
      type: Array as PropType<RouteRecordRaw[]>,
      required: true,
    },
    parentPath: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const router = useRouter();

    const handleClick = (path: string) => {
      router.push({
        path,
      });
    };

    return () =>
      props.routes.map((route) => {
        const path = `${props.parentPath ? props.parentPath + '/' : ''}${
          route.path
        }`;
        return (
          <>
            {route.children ? (
              <a-sub-menu title={route.name} key={route.path}>
                <SubMenu routes={route.children} parentPath={path} />
              </a-sub-menu>
            ) : (
              <a-menu-item key={path} onClick={handleClick(route.path)}>
                <span>{route.name}</span>
              </a-menu-item>
            )}
          </>
        );
      });
  },
});

export default SubMenu;
