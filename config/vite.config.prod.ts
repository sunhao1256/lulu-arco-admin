import { defineConfig, mergeConfig } from 'vite';
import baseConfig from './vite.config.base';
import configCompressPlugin from './plugin/compress';
import configVisualizerPlugin from './plugin/visualizer';
import configArcoResolverPlugin from './plugin/arcoResolver';
import configImageminPlugin from './plugin/imagemin';

export default defineConfig((configEnv) => {
  // @ts-ignore
  const base = baseConfig(configEnv);
  return mergeConfig(
    {
      mode: 'production',
      plugins: [
        configCompressPlugin('gzip'),
        configVisualizerPlugin(),
        configArcoResolverPlugin(),
        configImageminPlugin(),
      ],
      build: {
        rollupOptions: {
          output: {
            manualChunks: {
              arco: ['@arco-design/web-vue'],
              chart: ['echarts', 'vue-echarts'],
              vue: ['vue', 'vue-router1', 'pinia', '@vueuse/core', 'vue-i18n'],
            },
          },
        },
        chunkSizeWarningLimit: 2000,
      },
    },
    base
  );
});
