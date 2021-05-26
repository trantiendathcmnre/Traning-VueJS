import FilterCategory from "@/components/Dropdown";
export default {
  name: "ManagerBook",
  components: {
    FilterCategory,
  },
  data: () => ({
    dialog: false,
    dialogDelete: false,

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
    editedIndex: -1,
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
    defaultItem: {
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
      return this.editedIndex === -1 ? "Add book" : "Edit Book for ISBN";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.books = [
        {
          id: 3,
          title: "Programming iOS 11",
          isbn: "9781491999226",
          total: 100,
          productionYear: "2021",
          categoryId: 1,
          cover: "https://itbook.store/img/books/9781491999226.png",
          author: "Matt Neuburg",
          description: "Dive Deep into Views, View Controllers, and Frameworks",
          createdAt: "2021-05-20T02:10:04.191Z",
          updatedAt: "2021-05-20T02:10:04.191Z",
        },
        {
          id: 4,
          title: "Securing DevOps",
          isbn: "9781617294136",
          total: 5,
          productionYear: "2018",
          categoryId: 3,
          cover: "https://itbook.store/img/books/9781617294136.png",
          author: "Julien Vehent",
          description:
            "An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps team's highest priority is understanding those risks and hardening the system against them.Securing DevOps teaches you the essential techniques to secure your cloud ...",
          createdAt: "2021-05-20T02:10:04.191Z",
          updatedAt: "2021-05-20T02:10:04.191Z",
        },
        {
          id: 1,
          title: "Think rich to grow rich",
          isbn: "9781491954249",
          total: 21,
          productionYear: "2018",
          categoryId: 1,
          cover: "albert-think2.jpg",
          author: "Albert Einstein",
          description: "The book is based on education",
          createdAt: "2021-05-20T02:10:04.191Z",
          updatedAt: "2021-05-24T11:21:35.872Z",
        },
        {
          id: 7,
          title: "Think rich to grow rich tunv edited",
          isbn: "123-456-5858",
          total: 20,
          productionYear: "2018",
          categoryId: 1,
          cover: "albert-think.jpg",
          author: "Albert Einstein",
          description: "The book is based on education",
          createdAt: "2021-05-24T04:46:52.764Z",
          updatedAt: "2021-05-24T04:46:52.764Z",
        },
        {
          id: 9,
          title: "Tuyen tap truyen Andersen",
          isbn: "123-456-5859",
          total: 20,
          productionYear: "2018",
          categoryId: 1,
          cover: "albert-think.jpg",
          author: "Albert Einstein",
          description: "The book is based on education",
          createdAt: "2021-05-24T04:49:21.099Z",
          updatedAt: "2021-05-24T05:01:30.146Z",
        },
        {
          id: 2,
          title: "Web Scraping with Python, 2nd Edition",
          isbn: "9781491985571",
          total: 100,
          productionYear: "2021",
          categoryId: 3,
          cover: "https://itbook.store/img/books/9781491985571.png",
          author: "Ryan Mitchell",
          description: "Collecting More Data from the Modern Web",
          createdAt: "2021-05-20T02:10:04.191Z",
          updatedAt: "2021-05-20T02:10:04.191Z",
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.books.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.books.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.books.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
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
