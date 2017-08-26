import { router } from "../../router";
import { store } from "../../store";

router.beforeEach((to, from, next) => {
  // 判断该路由是否需要登录权限
  if (!to.meta.ignoreAuth && !store.getters.getUsername) {
    next({
      path: "/account/login",
      query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
    });
  } else {
    next();
  }
});
