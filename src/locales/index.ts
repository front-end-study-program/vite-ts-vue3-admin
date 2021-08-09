import { createI18n } from 'vue-i18n';
import messages from '@intlify/vite-plugin-vue-i18n/messages';

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') || 'cn',
  fallbackLocale: 'cn',
  global: false,
  messages,
});

export default i18n;
