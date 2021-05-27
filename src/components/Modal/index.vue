<template>
  <v-dialog v-show="isBookModalOpen" v-model="isBookModalOpen" width="800px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="primary"
        class="mb-2 primary bg-primary"
        v-bind="attrs"
        elevation="2"
        v-on="on"
      >
        Add Book
      </v-btn>
    </template>

    <v-card>
      <v-card-title>
        <span class="headline">{{ formTitle }}</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="editedItem.categoryId"
                label="Category"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="editedItem.title"
                label="Title"
                :rules="[
                  (v) => !!v || 'All field is required',
                  (v) => v.length >= 5 || 'Min length title is 5',
                ]"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="editedItem.description"
                label="Description"
                :rules="[(v) => !!v || 'All field is required']"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="editedItem.author"
                label="Author"
                :rules="[(v) => !!v || 'All field is required']"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="editedItem.total"
                label="Total"
                :rules="[(v) => !!v || 'All field is required']"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="editedItem.isbn"
                label="ISBN"
                :rules="[(v) => !!v || 'All field is required']"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="editedItem.productionYear"
                label="Production Year"
                :rules="[(v) => !!v || 'All field is required']"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-file-input
                v-model="editedItem.cover"
                label="Cover"
                accept="image/png, image/jpeg, image/jpg"
                :rules="[
                  (v) => !!v || 'All field is required',
                  (v) => v.size >= 3000 || 'Just accept png, jpeg, jpg',
                ]"
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

