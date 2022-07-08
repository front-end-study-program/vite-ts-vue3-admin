import { defineComponent, PropType } from 'vue';
import { RouteRecordRaw, useRouter } from 'vue-router';
import { SubMenu, MenuItem } from 'ant-design-vue';
const MySubMenu = defineComponent({
  name: 'MySubMenu',
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
              <SubMenu title={route.name as string} key={route.path}>
                <MySubMenu routes={route.children} parentPath={path} />
              </SubMenu>
            ) : (
              <MenuItem key={path} onClick={() => handleClick(route.path)}>
                <span>{route.name}</span>
              </MenuItem>
            )}
          </>
        );
      });
  },
});

export default MySubMenu;
