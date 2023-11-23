import { App } from 'vue';
import { useArco } from '@/plugins/arco-vue';
import { useDirectives } from '@/plugins/directives';
import i18n from '@/plugins/vue-i18n';

export function registerPlugins(app: App) {
  useArco(app);
  app.use(i18n);
  useDirectives(app);
}
