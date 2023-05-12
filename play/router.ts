import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/button', component: () => import('./page/button.vue') },
  { path: '/input', component: () => import('./page/input.vue') },
  { path: '/progress', component: () => import('./page/progress.vue') },
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
