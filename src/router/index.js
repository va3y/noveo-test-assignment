import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home"
    }
  },
  {
    path: "/breed-selector",
    name: "Breed Selector",
    component: () => import("../views/BreedSelectorPage.vue"),
    meta: {
      title: "Breed Selector"
    }
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: () => import("../views/FavoritesPage.vue"),
    meta: {
      title: "Favorite Dogs"
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
