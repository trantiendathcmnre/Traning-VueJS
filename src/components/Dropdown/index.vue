<template>
  <div class="filtercat">
    <v-select
      :items="categories"
      label="Category"
      item-text="name"
      item-value="name"
    ></v-select>
  </div>
</template>
<script src="./script.js">
</script>
<style lang="scss" src="./style.scss">
</style>