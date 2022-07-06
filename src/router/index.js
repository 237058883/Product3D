import { createRouter, createWebHistory } from "vue-router";
import Product from "views/Product.vue";
import Loading from "views/Loading.vue";
import Scenes from "views/Scenes.vue";
import Home from "views/Home.vue";

//const Home = () => import("views/Home");
const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/product",
    component: Product,
  },
  {
    path: "/loading",
    component: Loading,
  },
  {
    path: "/scenes",
    component: Scenes,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  mode: history,
});

export default router;
