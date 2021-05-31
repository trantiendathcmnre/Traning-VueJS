<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="filterBook"
      sort-by=""
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <div class="wrap-tool-bar">
            <FilterCategory
              :filter="true"
              @handleDropdownChange="(id) => (categoryId = id)"
            />
            <v-spacer></v-spacer>

            <ModalBook />
            <ConfirmDelete />
          </div>
        </v-toolbar>
      </template>
      <template v-slot:[`item.cover`]="{ item }">
        <img :src="item.cover" style="width: 50px; height: 50px" />
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="handleOpenBookModal(item)"
          color="orange"
        >
          mdi-pencil
        </v-icon>
        <v-icon small @click="deleteItem(item)" color="success">
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary"> Reset </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>
