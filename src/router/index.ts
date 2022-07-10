import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouterView,
} from 'vue-router';
import Layout from '@/layout';
const constRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/login/index'),
  },
];

export const syncRoutes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    name: '仪表盘',
    redirect: '/dashboard/analysis',
    component: RouterView,
    children: [
      {
        path: 'analysis',
        name: '分析页',
        component: () => import('@/views/analysis'),
      },
    ],
  },
];

const layoutRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard/analysis',
    children: syncRoutes,
  },
];

const routes: RouteRecordRaw[] = [...constRoutes, ...layoutRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
