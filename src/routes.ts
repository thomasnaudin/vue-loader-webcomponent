import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomePage from "./components/pages/HomePage.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
