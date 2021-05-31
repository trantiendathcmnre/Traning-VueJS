<template>
  <v-dialog
    v-show="isBookModalOpen"
    v-model="isBookModalOpen"
    width="800px"
    persistent
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="primary"
        class="mb-2 primary bg-primary"
        elevation="2"
        v-bind="attrs"
        @click="handleOpenModal"
        v-on="on"
      >
        Add Book
      </v-btn>
    </template>

    <v-card v-if="isBookModalOpen">
      <v-card-title>
        <span class="headline">{{ formTitle }}</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="getBookModal.categoryId"
                label="Category"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="getBookModal.title"
                label="Title"
                :rules="rules.minLengthTitle"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="getBookModal.description"
                label="Description"
                :rules="rules.required"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="getBookModal.author"
                label="Author"
                :rules="rules.required"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="getBookModal.total"
                label="Total"
                :rules="rules.required"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="getBookModal.isbn"
                label="ISBN"
                :rules="rules.required"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="getBookModal.productionYear"
                label="Production Year"
                :rules="rules.required"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-file-input
                v-model="getBookModal.cover"
                label="Cover"
                accept="image/png, image/jpeg, image/jpg"
                :rules="rules.acceptType"
                required
              ></v-file-input>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
        <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>

