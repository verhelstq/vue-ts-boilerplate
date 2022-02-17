import { RouteConfig } from 'vue-router'

const routes: RouteConfig = {
  path: '/presence',
  component: () => import('@/views/Presence/Index.vue')
}

export default routes;