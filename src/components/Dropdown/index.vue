<template>
  <div class="filtercat">
    <v-select
      :items="allCategory"
      item-value="name"
      item-text="name"
      label="Category"
      multiple
      v-model="selectedBook"
    >
      <template v-slot:prepend-item>
        <v-list-item ripple @click="toggle">
          <v-list-item-content>
            <v-list-item-title> Select All </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="mt-1"></v-divider>
      </template>
    </v-select>
  </div>
</template>
<script src="./script.js">
</script>
<style lang="scss" src="./style.scss">
</style>