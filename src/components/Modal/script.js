import { mapGetters, mapMutations } from "vuex";

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

    editedItem: {
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
    ...mapGetters("modal", ["isBookModalOpen"]),
    formTitle() {
      return this.bookId ? "Add book" : "Edit Book";
    },
  },
  methods: {
    ...mapMutations("modal", ["toggleBookModal"]),
    editItem() {},

    deleteItem() {},

    deleteItemConfirm() {},

    close() {},

    closeDelete() {},

    save() {},
  },
  watch: {},
};
