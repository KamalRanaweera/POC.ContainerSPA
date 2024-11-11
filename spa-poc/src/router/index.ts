import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import { default as AppComponentA } from '@spa/app-component-a';
import { default as AppComponentB } from '@spa/app-component-b';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/app-component-a',
      name: 'app-component-a',
      component: AppComponentA
    },
    {
      path: '/app-component-b',
      name: 'app-component-b',
      component: AppComponentB,
    },
    {
      path: '/app-component-c',
      name: 'app-component-c',
      component: () => import('@spa/app-component-c'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
