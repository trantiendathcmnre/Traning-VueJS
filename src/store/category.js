import services from '../services/category';

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
  fetchCategoryAction: async ({ commit }) => {
    try {
      const { data } = await services.fetchCategory();

      if (data) {
        commit('setCategory', data);
      }
    } catch (error) {
      console.log('Fetch category ERROR --- ' + error);
      throw new Error(error.response.data.message);
    }
  }
};

export default { namespaced: true, state, getters, mutations, actions };
