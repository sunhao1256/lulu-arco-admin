import { App } from 'vue';
import globalComponents from '@/components';

export function useGlobalComponents(app: App) {
  app.use(globalComponents);
}
