import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AboutWebsitePage from "../views/AboutWebsitePage.vue";
import AboutGamePage from "../views/AboutGamePage.vue";
import ChessPreviewPage from "../views/ChessPreviewPage.vue";
import PlayPage from "../views/PlayPage.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", name: "home", component: HomePage, meta: { title: "Početna" } },
  {
    path: "/o-web-stranici",
    name: "about-website",
    component: AboutWebsitePage,
    meta: { title: "O web stranici" },
  },
  {
    path: "/o-igri",
    name: "about-game",
    component: AboutGamePage,
    meta: { title: "O igri" },
  },
  {
    path: "/sahovska-ploca",
    name: "chess-preview",
    component: ChessPreviewPage,
    meta: { title: "Šahovska ploča" },
  },
  {
    path: "/igraj",
    name: "play",
    component: PlayPage,
    meta: { title: "Igraj" },
  },
];

const router = createRouter({
  history: createWebHistory("/CinematicChessWebsite/"),
  routes,
});

router.afterEach((to) => {
  document.title = to.meta.title
    ? `${to.meta.title} – Cinematic Chess`
    : "Cinematic Chess – Projekt";
});

export default router;
