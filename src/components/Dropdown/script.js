import { mapActions, mapGetters } from "vuex";
export default {
  name: "FilterCategory",
  data: () => ({
    selectedBook: {},
  }),
  computed: {
    ...mapGetters("category", ["allCategory"]),
    category() {
      return [{ id: 0, name: 'Select All' }, ...this.allCategory]
    }
  }
  ,
  methods: {
    ...mapActions("category", ["fetchCategoryAction"]),
    handleClick(id) {
      this.$emit("handleDropdownChange", id)
    }

  },
  mounted() {
    this.fetchCategoryAction()
  }
};
