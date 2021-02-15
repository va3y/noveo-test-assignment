import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/breed-selector",
    name: "Breed Selector",
    component: () => import("../views/BreedSelector.vue")
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: () => import("../views/Favorites.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
