import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/CountriesView.vue'),
    },
    {
      path: '/countries',
      name: 'countries',
      component: () => import('../views/CountriesView.vue'),
    },
    {
      path: '/subdivisions',
      name: 'subdivisions',
      component: () => import('../views/SubdivisionsView.vue'),
    },
  ],
})

export default router
