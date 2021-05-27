import Vue from 'vue';
import VueRouter from 'vue-router';
import SignUp from '../components/SignUp/index.vue';
Vue.use(VueRouter);

const routes = [
  { path: '/signup', component: SignUp },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
