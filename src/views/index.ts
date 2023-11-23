import type { RouteComponent } from 'vue-router';

export const views: Record<
  PageRoute.LastDegreeRouteKey,
  RouteComponent | (() => Promise<{ default: RouteComponent }>)
> = {
  404: () => import('./exception/404/index.vue'),
  403: () => import('./exception/403/index.vue'),
  500: () => import('./exception/500/index.vue'),
  'login': () => import('./login/index.vue'),
  'not-found': () => import('./not-found/index.vue'),
  'dashboard_analytics': () => import('./dashboard/workplace/index.vue'),
  'manager-demo_list': () => import('./list/search-table/index.vue'),
  'manager-demo_edit': () => import('./form/group/index.vue'),
};
