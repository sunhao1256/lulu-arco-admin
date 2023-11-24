import type { Router } from 'vue-router';
import { useTitle } from '@vueuse/core';
import i18n from '@/plugins/vue-i18n';
import { setRouteEmitter } from '@/utils/router/router-listener';
import NProgress from 'nprogress';
import { createPermissionGuard } from './permission';

export function createRouterGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    NProgress.start();
    setRouteEmitter(to);
    await createPermissionGuard(to, from, next);
  });
  router.afterEach((to) => {
    // set document title
    // @ts-ignore
    useTitle(i18n.global.t(to.meta.title));

    NProgress.done();
  });
}
