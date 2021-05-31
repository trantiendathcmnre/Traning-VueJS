<template>
  <div id="app">
    <v-app>
      <router-view></router-view>
    </v-app>
  </div>
</template>
<script>
export default {
  name: 'App'
};
</script>

<script>
import ManagerBook from './views/ManagerBook';
export default {
  components: {
    ManagerBook
  }
};
</script>

<style lang="scss">
#app {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
