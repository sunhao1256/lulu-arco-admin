import { App } from 'vue';
import directive from '@/directive';

export function useDirectives(app: App) {
  app.use(directive);
}
