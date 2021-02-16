import { createRouter, createWebHistory } from "vue-router";
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
    component: () => import("../views/BreedSelectorPage.vue")
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: () => import("../views/FavoritesPage.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
