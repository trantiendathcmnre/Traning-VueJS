import Vue from "vue";
import VueRouter from "vue-router";
import SignUp from "../components/SignUp/index.vue";
import ManagerBook from "../views/ManagerBook";

Vue.use(VueRouter);

const routes = [
  // FOR TESTING =======================
  { path: "/", redirect: "/signup" },
  //==================================
  { path: "/signup", component: SignUp },
  { path: "/book-manager", component: ManagerBook },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
