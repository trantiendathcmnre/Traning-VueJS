import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'ModalBook',
  props: {
    bookDetail: {
      type: Object,
      default: null
    },
    bookId: {
      type: Number,
      default: -1
    }
  },
  data: () => ({
    dialog: false,
    book: {},
    defaultbook: {
      id: 0,
      title: '',
      isbn: '',
      total: 0,
      productionYear: '',
      categoryId: 0,
      cover: '',
      author: '',
      description: '',
      createdAt: '',
      updatedAt: ''
    }
  }),

  computed: {
    ...mapGetters('modal', ['isBookModalOpen', 'getBookModal']),
    ...mapGetters('book', ['allBooks']),

    formTitle() {
      return this.getBookModal.id ? 'Edit book' : 'Add Book';
    }
  },

  methods: {
    ...mapMutations('modal', ['toggleBookModal']),
    ...mapActions('book', [
      'createBookAction',
      'updateBookAction',
      'fetchBookAction'
    ]),
    close() {
      this.toggleBookModal({ isOpen: false, book: {} });
    },

    handleOpenModal() {
      this.toggleBookModal({ isOpen: true, book: {} });
    },
    save() {
      console.log('save');
      if (this.getBookModal.id) {
        const {
          title,
          author,
          categoryId,
          productionYear,
          description,
          cover,
          total
        } = this.getBookModal;
        const data = {
          title,
          author,
          categoryId,
          productionYear,
          description,
          cover,
          total
        };
        const id = this.getBookModal.id;
        console.log('hi');
        this.updateBookAction({ id, data }).then(() => this.fetchBookAction());
      } else {
        //=============================
        const {
          title,
          author,
          categoryId,
          productionYear,
          description,
          cover,
          total,
          isbn
        } = this.getBookModal;
        const data = {
          title,
          author,
          categoryId,
          productionYear,
          description,
          cover,
          total,
          isbn
        };
        //===========================
        this.createBookAction(data).then(() => this.fetchBookAction());
        console.log('CreateNew');
      }
      this.toggleBookModal({ isOpen: false, book: {} });
    }
  }
};
