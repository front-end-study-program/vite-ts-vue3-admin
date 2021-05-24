import { defineComponent } from '@vue/runtime-core';
import styles from './index.module.less';
console.log(styles);
export default defineComponent({
  setup() {
    return () => (
      <div class={styles['login-wrapper']}>
        <div class={styles['header-wrapper']}></div>
        <div class={styles['form-wrapper']}>
          <a-form>
            <a-form-item>
              <a-input />
            </a-form-item>
          </a-form>
        </div>
      </div>
    );
  },
});
