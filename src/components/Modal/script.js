import { mapMutations } from "vuex";

export default {
  name: "ModalBook",
  props: {
    bookDetail: {
      type: Object,
      default: null,
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
    formTitle() {
      return "addd";
    },

    // ...mapGetters("modal", ["isBookModalOpen"]),
  },
  methods: {
    ...mapMutations("modal", ["isBookModalOpen"]),
    close: () => {},
    save: () => {}

  },
};
