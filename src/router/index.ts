import supabase from '@/supabase'
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

import userRoutes from './modules/users';
import presenceRoutes from './modules/presence';
import interimRoutes from './modules/interim';

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  interimRoutes,
  presenceRoutes,
  userRoutes,
  {
    path: '/login',
    component: () => import('@/views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (to.path !== '/login' && !supabase.auth.session()){
    next('/login');
  } else {
    next();
  }
});

export default router
