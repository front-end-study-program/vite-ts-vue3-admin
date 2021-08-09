import { defineComponent } from '@vue/runtime-core';
import styles from './index.module.less';
import { useI18n } from 'vue-i18n';
import LocalSetting from '@/components/LocalSetting';
export default defineComponent({
  name: 'Login',
  setup() {
    const { t } = useI18n();
    return () => (
      <div class={styles.loginWrapper}>
        <div class="login-wrapper-settings">
          <LocalSetting />
        </div>
        <div>{t('login')}</div>
      </div>
    );
  },
});
