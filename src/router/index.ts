import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layout',
    // redirect: 'home',
    component: () => import('../layout/index.vue'),
    children: [
      //   {
      //     path: '/home',
      //     name: 'home',
      //     component: () =>
      //       import(/* webpackChunkName: "home" */ '../views/home/index.vue')
      //   },
      //   {
      //     path: '/user',
      //     name: 'user',
      //     component: () =>
      //       import(/* webpackChunkName: "user" */ '../views/user/index.vue')
      //   },
      //   {
      //     path: '/mall',
      //     name: 'mall',
      //     component: () =>
      //       import(/* webpackChunkName: "mall" */ '../views/mall/index.vue')
      //   },
      //   {
      //     path: '/page1',
      //     name: 'page1',
      //     component: () =>
      //       import(/* webpackChunkName: "pageOne" */ '../views/other/pageOne.vue')
      //   },
      //   {
      //     path: '/page2',
      //     name: 'page2',
      //     component: () =>
      //       import(/* webpackChunkName: "pageTwo" */ '../views/other/pageTwo.vue')
      //   }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
