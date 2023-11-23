import Components from 'unplugin-vue-components/vite';
import { ArcoResolver } from 'unplugin-vue-components/resolvers';

export default function configArcoResolverPlugin() {
  const arcoResolverPlugin = Components({
    dirs: [],
    dts: 'src/typings/components.d.ts',
    deep: false,
    resolvers: [ArcoResolver()],
  });
  return arcoResolverPlugin;
}
