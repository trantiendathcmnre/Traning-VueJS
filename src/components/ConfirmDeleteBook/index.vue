<template>
  <v-dialog
    v-show="isConfirmModalOpen"
    v-model="isConfirmModalOpen"
    persistent
    max-width="500px"
  >
    <v-card v-if="isConfirmModalOpen">
      <v-card-title class="headline">
        Are you sure you want to delete this item?
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="closeDelete"> Cancel </v-btn>
        <v-btn color="blue darken-1" text @click="confirmDeleteBook">
          OK
        </v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script src="./script.js"></script>
<style lang="scss" src="./style.scss">
</style>