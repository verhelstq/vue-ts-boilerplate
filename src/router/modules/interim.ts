import { RouteConfig } from 'vue-router'

const routes: RouteConfig = {
  path: '/interim',
  component: () => import('@/views/Interim/Index.vue')
}

export default routes;