import { createI18n } from 'vue-i18n';
import messages from './langs';
const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') || 'cn',
  fallbackLocale: 'cn',
  global: true,
  messages,
});

export default i18n;
