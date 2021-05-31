<template>
  <v-app>
    <v-alert
      :value="isValue"
      class="mb-0 text-center align-self-end"
      type="error"
      outlined
      width="300px"
    >
      {{ message }}
    </v-alert>
    <div class="container d-flex flex-column mx-auto my-16 pt-10">
      <div class="font-weight-black text-center text-h4">Login</div>
      <v-form ref="form" class="d-flex flex-column" v-model="valid">
        <div class="d-flex flex-column my-2">
          <label class="titleInput">Username</label>
          <v-text-field outlined :rules="[rules.required]" v-model="userName" />
        </div>
        <div class="d-flex flex-column my-2">
          <label class="titleInput">Password</label>
          <v-text-field
            outlined
            :rules="[rules.required, rules.passwordLength]"
            :type="isShowPassword ? 'text' : 'password'"
            :append-icon="isShowPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="isShowPassword = !isShowPassword"
            v-model="password"
          />
        </div>
        <v-btn
          class="submit blue lighten-2 rounded-xl mx-auto my-1 text-center"
          width="180px"
          depressed
          @click="submitBtn"
        >
          Login
        </v-btn>
        <v-btn
          class="submit cyan darken-2 rounded-xl mx-auto my-1 text-center"
          width="180px"
          depressed
          @click="signInBtn"
        >
          Sign Up
        </v-btn>
      </v-form>
    </div>
  </v-app>
</template>


<script src="./index.js">
</script>

<style lang= "scss" src="./index.scss">
</style>