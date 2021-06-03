import { mapActions } from 'vuex';
export default {
  name: 'SignUp',
  data: () => ({
    isShowPass: false,
    isShowConfirm: false,
    isSuccess: false,
    fullName: '',
    email: '',
    password: '',
    userName: '',
    passwordConfirm: '',
    isWaiting: false,
    rules: {
      required: [v => !!v || 'This field is required'],
      email: [v => /.+@.+\..+/.test(v) || 'The format is incorrect'],
      passwordLength: [v => (v && v.length >= 6) || 'Min length is 6 characters'],
    },
    successMess: '',
  }),

  computed: {
    cfmPassword() {
      return this.passwordConfirm === this.password || 'Password are not match';
    },
  },

  methods: {
    /**
     * [signUp - call API]
     */
    signUp() {
      this.isWaiting = true;

      const user = {
        username: this.userName,
        password: this.password,
        fullName: this.fullName,
        email: this.email,
        passwordConfirm: this.passwordConfirm,
      };

      this.signUpAction(user)
        .then(() => {
          this.isSuccess = true;
          this.successMess = 'Sign up success';
          setTimeout(() => {
            this.$router.push('/sign-in');
          }, 1500);
        })
        .catch(error => {
          console.log('Error 💣💣💣: ' + error);
        })
        .finally(() => (this.isWaiting = false));
    },
    ...mapActions('auth', ['signUpAction']),

    /**
     * [submitBtn - call function acttionRule, check form validate to call API]
     */
    submitBtn() {
      setTimeout(() => {
        // check form validate to call API
        this.$refs.form.validate() && this.signUp();
      });
    },
  },
};
