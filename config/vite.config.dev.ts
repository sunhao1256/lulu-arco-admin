import { defineConfig, mergeConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import baseConfig from './vite.config.base';

export default defineConfig((configEnv) => {
  // @ts-ignore
  const base = baseConfig(configEnv);
  return mergeConfig(
    {
      mode: 'development',
      server: {
        open: false,
        fs: {
          strict: true,
        },
      },
      plugins: [
        eslint({
          cache: false,
          include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
          exclude: ['node_modules'],
        }),
      ],
    },
    base
  );
});
