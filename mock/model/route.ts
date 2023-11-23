export const routeModel: Record<Auth.RoleType, AuthRoute.Route[]> = {
  admin: [
    {
      name: 'dashboard',
      path: '/dashboard',
      component: 'basic',
      children: [
        {
          name: 'dashboard_analytics',
          path: '/dashboard/analytics',
          component: 'self',
          meta: {
            title: 'menu.dashboard_analytics',
            requiresAuth: true,
          },
        },
      ],
      meta: {
        title: 'menu.dashboard',
        icon: 'icon-dashboard',
        order: 1,
        requiresAuth: true,
      },
    },
    {
      name: 'manager-demo',
      path: '/manager-demo',
      component: 'basic',
      children: [
        {
          name: 'manager-demo_list',
          path: '/manager-demo/list',
          component: 'self',
          meta: {
            title: 'menu.usersList',
            requiresAuth: true,
          },
        },
        {
          name: 'manager-demo_edit',
          path: '/manager-demo/edit',
          component: 'self',
          meta: {
            title: 'menu.usersEdit',
            dynamicPath: '/manager-demo/edit/:id?',
            requiresAuth: true,
          },
        },
      ],
      meta: {
        title: 'menu.users',
        icon: 'icon-user',
        requiresAuth: true,
        order: 2,
      },
    },
  ],
  user: [
    {
      name: 'dashboard',
      path: '/dashboard',
      component: 'basic',
      children: [
        {
          name: 'dashboard_analytics',
          path: '/dashboard/analytics',
          component: 'self',
          meta: {
            icon: 'mdi-view-dashboard-outline',
            title: 'menu.dashboard',
            requiresAuth: true,
          },
        },
      ],
      meta: {
        title: 'menu.dashboard',
        icon: 'mdi-view-dashboard-outline',
        order: 1,
        requiresAuth: true,
      },
    },
  ],
};
