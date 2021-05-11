import { createWebHistory, createRouter } from "vue-router";
import About from "../components/About.vue";
import FirstPage from "../components/FirstPage.vue";
import SecondPage from "../components/SecondPage.vue";
import ThirdPage from "../components/ThirdPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: FirstPage,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/first",
    name: "first",
    component: FirstPage,
  },
  {
    path: "/second",
    name: "second",
    component: SecondPage,
  },
  {
    path: "/third",
    name: "third",
    component: ThirdPage,
  },
  { 
    path: '/:catchAll(.*)', 
    component: FirstPage,
    name: 'NotFound'
  },
];

const router = createRouter({
  history: createWebHistory(),
  mode : 'hash',
  routes,
});

export default router;