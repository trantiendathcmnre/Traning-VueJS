<template>
  <v-data-table
    :headers="headers"
    :items="allBooks.rows"
    sort-by=""
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <FilterCategory />
        <v-spacer></v-spacer>
        <ModalBook />
        <ConfirmDelete />
      </v-toolbar>
    </template>
    <template v-slot:[`item.cover`]="{ item }">
      <img :src="item.cover" style="width: 50px; height: 50px" />
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon small class="mr-2" @click="handleOpenBookModal(item.id)">
        mdi-pencil
      </v-icon>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary"> Reset </v-btn>
    </template>
  </v-data-table>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>
