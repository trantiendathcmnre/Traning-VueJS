<template>
  <div id="app">
    App Home Page
    <form @submit.prevent="doSignin">
      <input v-model="fakeUser.username" type="text" />
      <input v-model="fakeUser.password" type="text" />
      <button>Login</button>
    </form>
    <p>is authenticate {{ isAuth }}</p>
    <button
      @click="
        fetchBook();
        fetchCategory();
      "
    >
      Get books
    </button>
    <p v-if="isAuth">
      <ul>
        <li v-for="book in allBook.rows" :key="book.id">{{book}}</li>
      </ul>
    </p>
    <br />
    <p v-if="isAuth">
      <ul>
        <li v-for="item in allCategory" :key="item.id">{{item}}</li>
      </ul>
    </p>
  </div>

  
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      fakeUser: {
        username: 'admin',
        password: 'admin'
      },
      bookID: null
    };
  },
  computed: {
    ...mapGetters('book',['allBook']),
    ...mapGetters('category',['allCategory']),
    ...mapGetters('auth',['isAuth']),
    },
  methods: {
    doSignin() {
      return this.signin(this.fakeUser);
    },
    ...mapActions('book',['fetchBook']),
    ...mapActions('category',['fetchCategory']),
    ...mapActions('auth', ['signin', 'signup'])
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  input {
    border: 1px solid #000;
    color: red;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
