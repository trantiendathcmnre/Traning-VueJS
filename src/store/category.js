import api from '../plugins/axios';

const state = () => ({
  category: []
});

const getters = {
  allCategory: state => state.category
};

const mutations = {
  setCategory: (state, data) => (state.category = data)
};

const actions = {
  // get CATEGORY data from API
  fetchCategory({ commit }) {
    api
      .get('/category')
      .then(res => {
        commit('setCategory', res.data);
      })
      .catch(error => console.log('Fetch category ERROR --- ' + error));
  }
};

export default { namespaced: true, state, getters, mutations, actions };
