import Vue from 'vue';
import Vuex from 'vuex';

import auth from './auth';
import book from './book';
import category from './category';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    book,
    category
  }
});

export default store;

// methods: {
//   ...mapMutations(['module-name/setBooks']), myMethod() {

//   }}


