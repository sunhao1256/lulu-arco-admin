import { setupRouter } from '@/router';
import { registerPlugins } from '@/plugins';
import { setupStore } from './store';
import App from './App.vue';
import '@/assets/style/global.less';

async function setupApp() {
  const app = createApp(App);
  setupStore(app);
  await setupRouter(app);
  registerPlugins(app);
  app.mount('#app');
}

await setupApp();
