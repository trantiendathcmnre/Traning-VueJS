import { mapActions, mapGetters } from "vuex";
export default {
  name: "FilterCategory",
  data: () => ({
    selectedBook: []
  }),
  computed: {
    ...mapGetters("category", ["allCategory"]),
    selectAllBook() {
      return this.selectedBook.length === this.allCategory.length
    },
    selectSomeBook() {
      return this.selectedBook.length > 0 && !this.selectAllBook
    },
  }
  ,
  methods: {
    ...mapActions("category", ["fetchCategoryAction"]),
    toggle() {
      console.log(this.selectAllBook)
      this.$nextTick(() => {
        if (this.selectAllBook) {
          this.selectedBook = []
        } else {
          this.selectedBook = this.allCategory.slice()
        }
      })
    },
  },
  mounted() {
    this.fetchCategoryAction()
  }
};
