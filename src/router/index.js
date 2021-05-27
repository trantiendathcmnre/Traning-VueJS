import Vue from 'vue';
import VueRouter from 'vue-router';
import SignIn from '../components/SignInPage/index.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/signIn', component: SignIn }
];
const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
