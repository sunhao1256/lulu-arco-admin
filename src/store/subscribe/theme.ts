import { effectScope, onScopeDispose, watch } from 'vue';
import { useThemeStore } from '@/store';

export default function subscribeThemeStore() {
  const theme = useThemeStore();
  const scope = effectScope();

  scope.run(() => {
    // themeconfig
    watch(
      () => theme,
      (n) => {
        if (n.darkMode) {
          document.body.setAttribute('arco-theme', 'dark');
        } else {
          document.body.removeAttribute('arco-theme');
        }
        theme.cacheThemeSettings();
      },
      { immediate: true, deep: true }
    );
  });

  onScopeDispose(() => {
    scope.stop();
  });
}
