import api from '../plugins/axios';

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
  fetchBook({ commit }) {
    api
      .get('/books')
      .then(res => {
        commit('setBooks', res.data);
      })
      .catch(error => console.log('Fetch books ERROR --- ' + error));
  },

  // CREATE a book
  createBook(data) {
    api
      .post(`/books`, data)
      .then(res => {
        // Need to be handled ====================
        console.log(res);
      })
      .catch(error => console.log('Create book ERROR --- ' + error));
  },

  // UPDATE a book
  updateBook(id) {
    api
      .put(`/books/${id}`)
      .then(res => {
        // Need to be handled ====================
        console.log(res);
      })
      .catch(error => console.log('Update book ERROR --- ' + error));
  },

  // DELETE a book
  deleteBook(id) {
    api
      .delete(`/books/delete/${id}`)
      .then(res => {
        // Need to be handled ====================
        console.log(res);
      })
      .catch(error => console.log('Update book ERROR --- ' + error));
  }
};

export default { namespaced: true, state, getters, mutations, actions };
