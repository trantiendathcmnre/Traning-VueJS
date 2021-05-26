<template>
  <v-app>
    <div class="container d-flex flex-column mx-auto my-16 pt-10">
      <div class="font-weight-black text-center text-h4">Sign UP</div>
      <div class="d-flex justify-space-between my-2">
        <div class="d-flex flex-column justify-space-between">
          <div class="d-flex flex-column my-2">
            <label class="Label">Full name</label>
            <v-text-field outlined></v-text-field>
          </div>
          <div class="d-flex flex-column my-2">
            <label class="Label">Email</label>
            <v-text-field outlined></v-text-field>
          </div>
          <div class="d-flex flex-column my-2">
            <label class="Label">Password</label>
            <v-text-field outlined></v-text-field>
          </div>
        </div>
        <div class="d-flex flex-column justify-space-between">
          <div class="d-flex flex-column my-2">
            <label class="Label">User name</label>
            <v-text-field outlined></v-text-field>
          </div>
          <div class="d-flex flex-column my-2">
            <label class="Label">Password confirm</label>
            <v-text-field outlined></v-text-field>
          </div>
        </div>
      </div>
      <v-btn
        class="submit blue lighten-2 rounded-xl mx-auto my-1 text-center"
        width="180px"
        depressed
      >
        Sign up
      </v-btn>
    </div>
  </v-app>
</template>

<script src='./index.js'>
</script>

<style src="./index.css" >
</style>