import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import { setVitePlugins } from './plugin';
import { getRootPath, getSrcPath } from './utils';

// @ts-ignore
export default defineConfig((configEnv) => {
  const viteEnv = loadEnv(
    configEnv.mode,
    process.cwd()
  ) as unknown as ImportMetaEnv;

  return {
    plugins: setVitePlugins(viteEnv),
    resolve: {
      alias: [
        {
          find: '@',
          replacement: getSrcPath(),
        },
        {
          find: '~',
          replacement: getRootPath(),
        },
        {
          find: 'assets',
          replacement: resolve(__dirname, '../src/assets'),
        },
        {
          find: 'vue-i18n',
          replacement: 'vue-i18n/dist/vue-i18n.cjs.js', // Resolve the i18n warning issue
        },
        {
          find: 'vue',
          replacement: 'vue/dist/vue.esm-bundler.js', // compile template
        },
      ],
      extensions: ['.ts', '.js'],
    },
    define: {
      'process.env': {},
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import (reference) "${resolve(
              'src/assets/style/breakpoint.less'
            )}";`,
          },
          javascriptEnabled: true,
        },
      },
    },
  };
});
