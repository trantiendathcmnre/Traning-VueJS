<template>
  <v-app>
    <div class="container d-flex flex-column mx-auto my-16 pt-10">
      <div class="font-weight-black text-center text-h4">Sign UP</div>
      <v-form ref="form" class="d-flex flex-column" v-model="valid">
        <div class="d-flex justify-space-between my-2">
          <div class="d-flex flex-row flex-column justify-space-between">
            <div class="d-flex flex-column my-2">
              <label class="Label">Full name</label>
              <v-text-field
                outlined
                :rules="[rules.required]"
                v-model="fullName"
              />
            </div>
            <div class="d-flex flex-column my-2">
              <label class="Label">Email</label>
              <v-text-field
                outlined
                :rules="[rules.required, rules.email]"
                v-model="email"
              />
            </div>
            <div class="d-flex flex-column my-2">
              <label class="Label">Password</label>
              <v-text-field
                outlined
                :rules="[rules.required, rules.passwordLength]"
                :type="show ? 'text' : 'password'"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="show = !show"
                v-model="password"
              />
            </div>
          </div>
          <div class="d-flex flex-column justify-space-between">
            <div class="d-flex flex-column my-2">
              <label class="Label">User name</label>
              <v-text-field
                outlined
                :rules="[rules.required]"
                v-model="userName"
              />
            </div>
            <div class="d-flex flex-column my-2">
              <label class="Label">Password confirm</label>
              <v-text-field
                outlined
                :rules="[
                  rules.required,
                  rules.passwordLength,
                  rules.confirmPass,
                ]"
                :type="show1 ? 'text' : 'password'"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="show1 = !show1"
                v-model="passwordConfirm"
              />
            </div>
          </div>
        </div>
        <v-alert :value="this.value" type="error" outlined width="250px">
          {{ message }}
        </v-alert>
        <v-btn
          class="submit blue lighten-2 rounded-xl mx-auto my-1 text-center"
          width="180px"
          depressed
          @click="submitBtn"
        >
          Sign up
        </v-btn>
      </v-form>
    </div>
  </v-app>
</template>

<script src='./index'>
</script>

<style src="./index.css" >
</style>