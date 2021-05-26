<<<<<<< HEAD
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
=======
import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
>>>>>>> e70b2b65b432fbfa6609a518a7974b799ec22b52

import store from './store';
import router from './router'

Vue.config.productionTip = false;

new Vue({
  vuetify,
<<<<<<< HEAD
  render: h => h(App)
}).$mount('#app')
=======
  store,
  router,
  render: h => h(App)
}).$mount('#app');
>>>>>>> e70b2b65b432fbfa6609a518a7974b799ec22b52
