const state = () => ({
  confirmModal: false,
  isOpen: false,
  book: {},
});

const getters = {
  isConfirmModalOpen: (state) => state.confirmModal,
  isBookModalOpen: (state) => state.isOpen,
  getBookModal: (state) => state.book,
};

const mutations = {
  toggleConfirmModal: (state) => (state.confirmModal = !state.confirmModal),
  toggleBookModal: (state, { isOpen, book }) => {
    state.isOpen = isOpen;
    state.book = book;
  },
};

export default { namespaced: true, state, getters, mutations };
