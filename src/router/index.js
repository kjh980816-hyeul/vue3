import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path: '/component',
    component: () => import('@/views/Components.vue')
    },
    {
      path: '/page98',
      component: () => import('@/views/page98.vue')
    },
    {
      path: '/page103',
      component: () => import('@/views/page103.vue')
    },
    {
      path: '/mission01',
      component: () => import('@/views/mission/mission01.vue')
    },
    {
      path: '/page108',
      component: () => import('@/views/page108.vue')
    },
    {
      path: '/page110',
      component: () => import('@/views/page110.vue')
    },
    {
      path: '/page114',
      component: () => import('@/views/page114.vue')
    },
    {
      path: '/page118',
      component: () => import('@/views/page118.vue')
    },
    {
      path: '/page123',
      component: () => import('@/views/page123.vue')
    }
  ],
})

export default router
