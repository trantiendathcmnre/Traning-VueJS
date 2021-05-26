<template>
  <v-app>
    <div class="container">
      <ManagerBook />
    </div>
  </v-app>
</template>
<script>
import ManagerBook from "./views/ManagerBook";

export default {
  name: "App",
  components: {
    ManagerBook,
  },

  data: () => ({}),
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
