import type { Router } from 'vue-router';
import { useTitle } from '@vueuse/core';
import i18n from '@/plugins/vue-i18n';
import { createPermissionGuard } from './permission';

export function createRouterGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    await createPermissionGuard(to, from, next);
  });
  router.afterEach((to) => {
    // set document title
    useTitle(i18n.global.t(to.meta.title));
  });
}
