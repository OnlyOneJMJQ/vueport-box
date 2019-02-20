export default [
  {
    path: '/',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName 'layout' */ '@/layouts/default.vue'),
    children: [
      {
        path: '',
        component: () =>
          import(/* webpackChunkName 'home', */ '@/views/Home.vue')
      }
    ]
  },
  {
    path: '/profile',
    component: () =>
      import(/* webpackChunkName 'layout' */ '@/layouts/default.vue'),
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        component: () =>
          import(/* webpackChunkName: 'profile' */ '@/views/Profile.vue')
      }
    ]
  },
  {
    path: '/dashboard',
    component: () =>
      import(/* webpackChunkName 'layout' */ '@/layouts/default.vue'),
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        component: () =>
          import(/* webpackChunkName: 'dashboard' */ '@/views/Dashboard.vue')
      }
    ]
  },
  // leave 404 as last one always
  {
    path: '*',
    component: () =>
      import(/* webpackChunkName: 'notFound' */ '@/views/NotFound.vue')
  }
]
