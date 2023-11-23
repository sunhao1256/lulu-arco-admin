import AutoImport from 'unplugin-auto-import/vite';
import { getSrcPath } from '../utils';

export default function autoImport(viteEnv: ImportMetaEnv) {
  const srcPath = getSrcPath();
  return AutoImport({
    imports: [
      'vue-router',
      'vue-i18n',
      'vue',
      '@vueuse/core',
      {
        consola: [['default', 'consola']],
        pinia: ['storeToRefs'],
      },
    ],
    eslintrc: {
      enabled: true, // <-- this
    },
    dirs: [
      `${srcPath}/plugins`,
      `${srcPath}/filters`,
      `${srcPath}/store/**`,
      `${srcPath}/router`,
    ],
    dts: 'src/typings/auto-imports.d.ts',
  });
}
