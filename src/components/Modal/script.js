import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "ModalBook",
  props: {
    bookDetail: {
      type: Object,
      default: null,
    },
    bookId: {
      type: Number,
      default: -1,
    },
  },
  data: () => ({
    dialog: false,
    book: {},
    defaultbook: {
      id: 0,
      title: "",
      isbn: "",
      total: 0,
      productionYear: "",
      categoryId: 0,
      cover: "",
      author: "",
      description: "",
      createdAt: "",
      updatedAt: "",
    },
  }),

  computed: {
    ...mapGetters("modal", ["isBookModalOpen", "getBookModal"]),
    ...mapGetters("book", ["allBooks"]),

    formTitle() {
      return this.bookId ? "Add book" : "Edit Book";
    },
  },

  methods: {
    ...mapMutations("modal", ["toggleBookModal"]),
    ...mapActions("book", ["createBookAction", "updateBookAction"]),
    close() {
      this.toggleBookModal({ isOpen: false, book: {} });
    },

    handleOpenModal() {
      this.toggleBookModal({ isOpen: true, book: {} });
    },

    closeDelete() {},

    deleteItem() {},

    deleteItemConfirm() {},

    save() {
      console.log(this.getBookModal.id);
      console.log(this.getBookModal);
      if (this.getBookModal.id) {
        const {
          title,
          author,
          categoryId,
          productionYear,
          description,
          cover,
          total,
        } = this.getBookModal;
        const data = {
          title,
          author,
          categoryId,
          productionYear,
          description,
          cover,
          total,
        };

        this.updateBookAction(3, data).then((res) => console.log(res));
      } else {
        console.log("CreateNew");
      }
      this.toggleBookModal({ isOpen: false, book: {} });
    },
  },
  watch: {},

  updated() {},
};
