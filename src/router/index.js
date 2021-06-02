import Vue from 'vue';
import VueRouter from 'vue-router';
import SignUp from '../views/SignUp/index.vue';
import SignIn from '../views/SignInPage/index.vue';
import ManagerBook from '../views/ManagerBook';

Vue.use(VueRouter);

const routes = [
  // FOR TESTING =======================
  { path: '/', redirect: '/sign-in' },
  //==================================
  { path: '/sign-up', component: SignUp },
  { path: '/sign-in', component: SignIn },
  { path: '/book-manager', component: ManagerBook },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
