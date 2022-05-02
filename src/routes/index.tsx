import { createRouter, createWebHistory } from 'vue-router'

const routes: any = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../Home.vue')
  },
  {
    path: '/first',
    name: 'first',
    component: () => import('../First.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

router.beforeEach((to, from) => {
  const { path: toPath } = to
  const { path: fromPath } = from
  if (toPath === fromPath) {
    return false
  }
})

export default router
