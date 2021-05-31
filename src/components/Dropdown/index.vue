<template>
  <div class="filtercat">
    <v-select
      ref="select"
      v-model="selectedBook"
      :items="category"
      item-value="id"
      item-text="name"
      label="Category"
      @change="handleClick"
    >
    </v-select>
  </div>
</template>
<script src="./script.js">
</script>
<style lang="scss" src="./style.scss">
</style>