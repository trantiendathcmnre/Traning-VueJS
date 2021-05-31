import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import store from './store';
import router from './router';

Vue.config.productionTip = false;

Vue.use(Toast);

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app');
