<template>
  <div class="filtercat">
    <v-select
      :items="category"
      item-value="id"
      item-text="name"
      label="Category"
      v-model="selectedBook"
      ref="select"
      @change="handleClick"
    >
    </v-select>
  </div>
</template>
<script src="./script.js">
</script>
<style lang="scss" src="./style.scss">
</style>