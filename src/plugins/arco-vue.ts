import ArcoVue from '@arco-design/web-vue';
import { App } from 'vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';

export function useArco(app: App) {
  app.use(ArcoVue, {});
  app.use(ArcoVueIcon);
}
