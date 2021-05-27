import { mapGetters, mapMutations } from "vuex";

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
  
  }),

  computed: {
    formTitle() {
      return "addd";
    },

    ...mapGetters("modal", ["isBookModalOpen"]),
  },
  methods: {
    ...mapMutations("modal", ["isBookModalOpen"]),
    
    
  },
};
