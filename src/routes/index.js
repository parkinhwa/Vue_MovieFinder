import { createRouter, createWebHistory } from "vue-router";
import MainPage from "./MainPage";
import SearchPage from "./SearchPage";
import NotFound from "./NotFound";

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: "/",
      name: "MainPage",
      component: MainPage,
    },
    {
      path: "/search",
      name: "SearchPage",
      component: SearchPage,
      props: true,
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});
