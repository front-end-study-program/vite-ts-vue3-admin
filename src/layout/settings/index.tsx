import { defineComponent, ref } from 'vue';
import {
  SettingOutlined,
  CloseOutlined,
  CheckOutlined,
} from '@ant-design/icons-vue';
import styles from './styles.module.less';
import useSettings from './hooks/useSettings';
import { navLayoutType, sliderThemeType } from '@/settings';
import { Drawer, Tooltip, Divider } from 'ant-design-vue';
export default defineComponent({
  name: 'Settings',
  setup() {
    const visible = ref<boolean>(false);

    const handleClick = () => {
      visible.value = !visible.value;
    };

    const sliderThemeList = [
      {
        theme: 'light',
        picUrl:
          'https://gw.alipayobjects.com/zos/antfincdn/NQ%24zoisaD2/jpRkZQMyYRryryPNtyIC.svg',
        content: '亮色菜单风格',
        disabled: false,
      },
      {
        theme: 'dark',
        picUrl:
          'https://gw.alipayobjects.com/zos/antfincdn/XwFOFbLkSM/LCkqqYNmvBEbokSDscrm.svg',
        content: '暗色菜单风格',
        disabled: false,
      },
      {
        theme: 'black',
        picUrl:
          'https://gw.alipayobjects.com/zos/antfincdn/hmKaLQvmY2/LCkqqYNmvBEbokSDscrm.svg',
        content: '暗黑模式',
        disabled: true,
      },
    ];

    const navModes = [
      {
        mode: 'BaseLayout',
        picUrl:
          'https://gw.alipayobjects.com/zos/antfincdn/XwFOFbLkSM/LCkqqYNmvBEbokSDscrm.svg',
        content: '侧边菜单布局',
        disabled: false,
      },
      {
        mode: 'TopLayout',
        picUrl:
          'https://gw.alipayobjects.com/zos/antfincdn/URETY8%24STp/KDNDBbriJhLwuqMoxcAr.svg',
        content: '顶部菜单布局',
        disabled: false,
      },
    ];

    const { sliderTheme, setSliderTheme, navLayout, setNavLayout } =
      useSettings();

    return () => {
      const settingHandle = (
        <div class={styles.settingDrawerHandle} onClick={handleClick}>
          {visible.value ? <CloseOutlined /> : <SettingOutlined />}
        </div>
      );

      return (
        <Drawer
          width="300"
          getContainer={document.querySelector('#setting-container')}
          visible={visible.value}
          handle={settingHandle}
          onClose={handleClick}
        >
          <h3 class={styles.settingDrawerTitle}>整体风格设置</h3>
          <div class={styles.settingDrawerBlockCheckbox}>
            {sliderThemeList.map((modeItem) => (
              <Tooltip title={modeItem.content}>
                <div
                  class={
                    modeItem.disabled
                      ? styles.settingDrawerBlockCheckboxItem +
                        ' ' +
                        styles.settingDrawerBlockCheckboxItemDisabled
                      : styles.settingDrawerBlockCheckboxItem
                  }
                >
                  <img
                    src={modeItem.picUrl}
                    alt=""
                    onClick={() =>
                      !modeItem.disabled &&
                      setSliderTheme(modeItem.theme as sliderThemeType)
                    }
                  />
                  <CheckOutlined
                    class={styles.settingDrawerBlockCheckboxItemCheck}
                    style="color: #1890ff;"
                    v-show={sliderTheme.value === modeItem.theme}
                  />
                </div>
              </Tooltip>
            ))}
          </div>
          <Divider />
          <h3 class={styles.settingDrawerTitle}>导航模式</h3>
          <div class={styles.settingDrawerBlockCheckbox}>
            {navModes.map((modeItem) => (
              <Tooltip title={modeItem.content}>
                <div
                  class={
                    modeItem.disabled
                      ? styles.settingDrawerBlockCheckboxItem +
                        ' ' +
                        styles.settingDrawerBlockCheckboxItemDisabled
                      : styles.settingDrawerBlockCheckboxItem
                  }
                >
                  <img
                    src={modeItem.picUrl}
                    alt=""
                    onClick={() =>
                      !modeItem.disabled &&
                      setNavLayout(modeItem.mode as navLayoutType)
                    }
                  />
                  <CheckOutlined
                    class={styles.settingDrawerBlockCheckboxItemCheck}
                    style="color: #1890ff;"
                    v-show={navLayout.value === modeItem.mode}
                  />
                </div>
              </Tooltip>
            ))}
          </div>
        </Drawer>
      );
    };
  },
});
