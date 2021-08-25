import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from '@/login';
import Analysis from '@/views/analysis';
const constRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: Login,
  },
];

const syncRoutes: RouteRecordRaw[] = [
  {
    path: '/dashboard/analysis',
    component: Analysis,
  },
];

const routes: RouteRecordRaw[] = [...constRoutes, ...syncRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
