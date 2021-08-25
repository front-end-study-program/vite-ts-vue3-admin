import router from './router';
import { getToken } from './utils/user';
const whiteList = ['/login', '/form'];

router.beforeEach((to, from, next) => {
  if (whiteList.indexOf(to.path) === -1 && !getToken('token')) {
    next({
      path: '/login',
    });
  } else {
    next();
  }
});
