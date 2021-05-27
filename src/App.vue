<template>
  <v-app>
    <div id="app">
      <router-view></router-view>
    </div>
  </v-app>
</template>
<script>
export default {
  name: "App",
};
</script>

<script>
import ManagerBook from "./views/ManagerBook";
export default {
  components: {
    ManagerBook,
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  justify-content: center;
  align-items: center;

  .v-application--wrap {
    padding: 40px 0;
    .container {
      width: 1100px;
      margin: 0 auto;
    }
  }
}
</style>
