import { createI18n } from 'vue-i18n';
import config from '../configs';

const { locale, availableLocales, fallbackLocale } = config.locales;

const messages: Record<string, any> = {};

availableLocales.forEach((l: Record<string, any>) => {
  messages[l.code] = l.messages;
});

const i18n = createI18n({
  locale,
  fallbackLocale,
  messages,
  legacy: false,
  globalInjection: true,
});
export default i18n;
