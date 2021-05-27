import services from '../services/book';

const state = () => ({
  books: {}
});

const getters = {
  allBook: state => state.books
};

const mutations = {
  setBooks: (state, books) => (state.books = books)
};

const actions = {
  // get BOOK data from API
  fetchBook: async ({ commit }) => {
    try {
      const { data } = await services.fetchBook();
      commit('setBooks', data);
    } catch (error) {
      console.log('Fetch books ERROR --- ' + error);
    }
  },

  // CREATE a book
  createBook: data => {
    try {
      services.createBook(data);
      // Need to be handled if need such update book data on UI =============================================
    } catch (error) {
      console.log('Create book ERROR --- ' + error);
    }
  },

  // UPDATE a book
  updateBook: (id, data) => {
    try {
      services.updateBook(id, data);
      // Need to be handled if needed ====================
    } catch (error) {
      console.log('Update book ERROR --- ' + error);
    }
  },

  // DELETE a book
  deleteBook: id => {
    try {
      services.deleteBook(id);
      // Need to be handled if needed====================
    } catch (error) {
      console.log('Delete book ERROR --- ' + error);
    }
  }
};

export default { namespaced: true, state, getters, mutations, actions };
