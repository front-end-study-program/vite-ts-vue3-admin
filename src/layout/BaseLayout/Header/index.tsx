import { defineComponent } from 'vue';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue';
import styles from './styles.module.less';
import { useUserStore } from '@/store/user';
import { storeToRefs } from 'pinia';
import LocalSetting from '@/components/LocalSetting';

export default defineComponent({
  name: 'Header',
  props: {
    isCollapsed: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['toggleCollapsed'],
  setup(props, { emit }) {
    const userStore = useUserStore();

    const { name, avatar } = storeToRefs(userStore);

    return () => (
      <div class={styles.baseHeader}>
        <span onClick={() => emit('toggleCollapsed')}>
          {props.isCollapsed ? (
            <MenuUnfoldOutlined
              style={{
                fontSize: '20px',
                color: '#001529',
                cursor: 'pointer',
              }}
            />
          ) : (
            <MenuFoldOutlined
              style={{
                fontSize: '20px',
                color: '#001529',
                cursor: 'pointer',
              }}
            />
          )}
        </span>

        <div class={styles.headerRight}>
          <span class={styles.userContent}>
            <img class={styles.avatar} src={avatar.value} alt="avatar" />
            <span>{name.value}</span>
          </span>
          <span>
            <LocalSetting />
          </span>
        </div>
      </div>
    );
  },
});
