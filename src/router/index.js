import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/index/index.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () => import("../views/test/index.vue"),
  },
  {
    path: "/virtualScroll",
    name: "virtualScroll",
    component: () => import("../views/virtualScroll/index.vue"),
  },
  {
    path: "/404",
    name: "404",
    component: () => import("../views/404.vue"),
  },
  {
    path: "*",
    redirect: "/404",
    hidden: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
