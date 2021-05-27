import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth";
import book from "./book";
import category from "./category";
import modal from './modal';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    book,
    category,
    modal
  },
});

export default store;
