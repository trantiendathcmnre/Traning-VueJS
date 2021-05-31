import { mapMutations, mapGetters, mapActions } from 'vuex';
export default {
  name: 'ConfirmDelete',
  computed: {
    ...mapGetters('modal', ['isConfirmModalOpen', 'getBookModal']),
    ...mapGetters('book', ['allBooks'])
  },
  methods: {
    ...mapMutations('modal', ['toggleConfirmModal']),
    ...mapActions('book', ['deleteBookAction', 'fetchBookAction']),

    deleteItem() {
      this.toggleConfirmModal();
    },

    closeDelete() {
      this.toggleConfirmModal({ confirmModal: false, book: {} });
    },

    confirmDeleteBook() {
      console.log(this.getBookModal.id);
      this.deleteBookAction(this.getBookModal.id).then(() =>
        this.fetchBookAction()
      );
      this.toggleConfirmModal({ confirmModal: false, book: {} });
    }
  }
};
