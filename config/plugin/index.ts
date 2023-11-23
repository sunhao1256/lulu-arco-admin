import { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import svgLoader from 'vite-svg-loader';
import configArcoResolverPlugin from './arcoResolver';
import configArcoStyleImportPlugin from './arcoStyleImport';
import autoImport from './auto-import';
import mock from './mock';

export function setVitePlugins(
  viteEnv: ImportMetaEnv
): PluginOption | PluginOption[] {
  return [
    vue(),
    svgLoader({ svgoConfig: {} }),
    vueJsx(),
    configArcoResolverPlugin(),
    configArcoStyleImportPlugin(),
    autoImport(viteEnv),
    mock(viteEnv),
  ];
}
