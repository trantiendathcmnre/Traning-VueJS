import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import VueAxios from 'vue-axios'
import store from './store';
import router from './router'

Vue.config.productionTip = false;
Vue.use(VueAxios, axios)
new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app');
