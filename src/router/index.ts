import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from '@/layout/login';
const constRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: Login,
  },
];

const syncRoutes: RouteRecordRaw[] = [];

const routes: RouteRecordRaw[] = [...constRoutes, ...syncRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
