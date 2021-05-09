import { createWebHistory, createRouter } from "vue-router";
import About from "../components/About.vue";
import FirstPage from "../components/FirstPage.vue";
import SecondPage from "../components/SecondPage.vue";
import ThirdPage from "../components/ThirdPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: FirstPage,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/first",
    name: "FirstPake",
    component: FirstPage,
  },
  {
    path: "/second",
    name: "SecondPage",
    component: SecondPage,
  },
  {
    path: "/third",
    name: "ThirdPage",
    component: ThirdPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;