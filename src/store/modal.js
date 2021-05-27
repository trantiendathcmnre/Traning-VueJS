const state = () => ({ confirmModal: false, bookModal: false });

const getters = {
  isConfirmModalOpen: (state) => state.confirmModal,
  isBookModalOpen: (state) => state.bookModal,
};

const mutations = {
  toggleConfirmModal: (state) => (state.confirmModal = !state.confirmModal),
  toggleBookModal: (state) => (state.bookModal = !state.bookModal),
};

export default { namespaced: true, state, getters, mutations };
