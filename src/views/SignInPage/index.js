import { mapActions } from 'vuex';
export default {
  name: 'SignIn',
  data: () => ({
    isShowPassword: false,
    userName: '',
    password: '',
    isWatting: false,
    rules: {
      username: [v => !!v || 'This field is required'],
      password: [v => !!v || 'This field is required', v => (v && v.length >= 5) || 'Min length is 5 characters'],
    },
  }),
  methods: {
    /**
     * [callAPI - get body data, call API,push router path if success or show Toast error if fail]
     */
    callAPI() {
      this.isWatting = true;

      const user = {
        username: this.userName,
        password: this.password,
      };
      this.signInAction(user)
        .then(() => this.$router.push('/book-manager'))
        .catch(error => {
          console.log('Error 💣💣💣: ' + error);
        })
        .finally(() => (this.isWatting = false));
    },
    ...mapActions('auth', ['signInAction']),
    /**
     * [submitBtn - call function actionRule, check form validate to call API]
     */
    submitBtn() {
      if (this.$refs.form.validate()) this.callAPI();
    },
    /**
     * [signUpBtn - push router path]
     */
    signUpBtn() {
      this.$router.push('/sign-up');
    },
  },
};
