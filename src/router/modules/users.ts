import { RouteConfig } from 'vue-router'

const routes: RouteConfig = {
  path: '/users',
  component: () => import('@/views/Users/Index.vue')
}

export default routes;