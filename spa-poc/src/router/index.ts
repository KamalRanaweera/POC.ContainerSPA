import { createRouter, createWebHistory } from 'vue-router'

import { default as AppComponentA } from '@spa/app-component-a';
import { default as AppComponentB } from '@spa/app-component-b';
import { default as AppComponentC } from '@spa/app-component-c';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',  
      name: 'home',
      component: () => import('../views/HomeView.vue'),
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
      component: AppComponentC,
    },
    {
      path: '/app-component-d',
      name: 'app-component-d',
      component: () => import('@spa/app-component-d'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
