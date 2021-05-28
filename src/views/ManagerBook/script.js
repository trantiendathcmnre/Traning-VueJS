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
    bookDialogOpen: false,
    bookId: -1,
  }),

  computed: mapGetters("book", ["allBooks"]),

  mounted() {
    this.fetchBookAction();
  },
  methods: {
    ...mapActions("book", ["fetchBookAction"]), //return object
    ...mapMutations("modal", ["toggleBookModal"]),

    handleOpenBookModal(book) {
      this.toggleBookModal({
        isOpen: true,
        book,
      });
    },

    
    save() {
       
    },
  },
};

/**
 * get book id
 * => mutations => toggleBookModal => isBookModalopen
 * => bookId => store => modal get
 * [MODAL] => get bookdetail by bookID
 * bookID === -1 => create new book
 */
