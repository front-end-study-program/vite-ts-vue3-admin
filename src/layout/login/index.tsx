import { defineComponent } from '@vue/runtime-core';
import styles from './index.module.less';
import { useI18n } from 'vue-i18n';
console.log(styles);
export default defineComponent({
  setup() {
    const { t } = useI18n();
    return () => (
      <div class={styles['login-wrapper']}>
        <div class={styles['header-wrapper']}></div>
        <div class={styles['form-wrapper']}>
          <a-form>
            <a-form-item>
              <a-input />
            </a-form-item>
            <a-button>{t('login')}</a-button>
          </a-form>
        </div>
      </div>
    );
  },
});
