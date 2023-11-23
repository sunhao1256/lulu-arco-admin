import en from '@/locale/en-US';
import zh from '@/locale/zh-CN';

const supported = ['en', 'zh'];
let locale = 'zh';

try {
  const { 0: browserLang } = navigator.language.split('-');
  if (supported.includes(browserLang)) locale = browserLang;
} catch (e) {
  consola.log(e);
}

export default {
  locale,

  fallbackLocale: 'en',

  availableLocales: [
    {
      code: 'en',
      flag: 'us',
      label: 'English',
      messages: en,
    },
    {
      code: 'zh',
      flag: 'cn',
      label: '中文',
      messages: zh,
    },
  ],
};
