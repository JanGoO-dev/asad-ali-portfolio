import { createRouter, createWebHashHistory } from "vue-router";
import Intruduction from "../views/Introduction";

const routes = [
  {
    path: "/",
    name: "Introduction",
    component: Intruduction,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
