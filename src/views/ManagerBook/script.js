import FilterCategory from "@/components/Dropdown";
import ModalBook from "@/components/Modal";
import ConfirmDelete from "@/components/ConfirmDeleteBook";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "ManagerBook",
  components: {
    FilterCategory,
    ModalBook,
    ConfirmDelete,
  },
  data: () => ({
    headers: [
      {
        text: "ISBN",

        value: "isbn",
      },
      { text: "Cover", value: "cover" },
      { text: "Title", value: "title" },
      { text: "Description", value: "description" },
      { text: "Author", value: "author" },
      { text: "Prodcution Year", value: "productionYear" },
      { text: "Total", value: "total" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    books: [],
    bookDialogOpen: false,
  }),

  computed: mapGetters("book", ["allBooks"]),

  mounted() {
    this.fetchBookAction();
  },
  methods: {
    ...mapActions("book", ["fetchBookAction"]), //return object
    ...mapMutations("modal", ["toggleBookModal"]),

    handleOpenBookModal(bookId) {
      console.log(bookId);
      this.toggleBookModal();
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.books[this.editedIndex], this.editedItem);
      } else {
        this.books.push(this.editedItem);
      }
      this.close();
    },
  },
};
