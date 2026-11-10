import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import GamesPage from "../pages/GamesPage.vue";
import GamePage from "../pages/GamePage.vue";
import AboutPage from "../pages/AboutPage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";

// Адрес слева → страница справа.
const routes = [
  { path: "/", name: "home", component: HomePage },
  { path: "/games", name: "games", component: GamesPage },
  { path: "/games/:id", name: "game", component: GamePage, props: true },
  { path: "/about", name: "about", component: AboutPage },
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFoundPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
