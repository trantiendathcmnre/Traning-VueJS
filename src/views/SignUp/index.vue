<template>
  <v-container class="d-flex flex-column pa-0">
    <v-snackbar v-model="isSuccess" top color="success" outlined>{{ successMess }}</v-snackbar>
    <div class="btn-group d-flex flex-column mx-auto my-16 pt-10">
      <div class="font-weight-black text-center text-h4">Sign UP</div>
      <v-form ref="form" class="d-flex flex-column">
        <div class="d-flex justify-space-between my-2">
          <div class="d-flex flex-row flex-column justify-space-between">
            <div class="d-flex flex-column my-2">
              <label class="titleInput">Full name</label>
              <v-text-field v-model="fullName" outlined :rules="rules.required" />
            </div>
            <div class="d-flex flex-column my-2">
              <label class="titleInput">Email</label>
              <v-text-field v-model="email" outlined :rules="[...rules.required, ...rules.email]" />
            </div>
            <div class="d-flex flex-column my-2">
              <label class="titleInput">Password</label>
              <v-text-field
                v-model="password"
                outlined
                :rules="rules.passwordLength"
                :type="isShowPass ? 'text' : 'password'"
                :append-icon="isShowPass ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="isShowPass = !isShowPass"
              />
            </div>
          </div>
          <div class="d-flex flex-column justify-space-between">
            <div class="d-flex flex-column my-2">
              <label class="titleInput">User name</label>
              <v-text-field v-model="userName" outlined :rules="rules.required" />
            </div>
            <div class="d-flex flex-column my-2">
              <label class="titleInput">Password confirm</label>
              <v-text-field
                v-model="passwordConfirm"
                outlined
                :rules="[...rules.passwordLength, cfmPassword]"
                :type="isShowConfirm ? 'text' : 'password'"
                :append-icon="isShowConfirm ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="isShowConfirm = !isShowConfirm"
              />
            </div>
          </div>
        </div>
        <v-btn
          class="submit blue lighten-2 rounded-xl mx-auto my-1 text-center"
          width="180px"
          depressed
          :loading="isWaiting"
          @click="submitBtn"
        >
          Sign up
        </v-btn>
      </v-form>
    </div>
  </v-container>
</template>

<script src="./index"></script>

<style lang="scss" scoped src="./index.scss"></style>
