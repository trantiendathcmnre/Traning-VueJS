import { mapActions } from 'vuex';
export default {
  name: 'SignUp',
  data: () => ({
    isShowPass: false,
    isShowConfirm: false,
    valid: true,
    isValue: false,
    isSuccess: false,
    fullName: '',
    email: '',
    password: '',
    userName: '',
    passwordConfirm: '',
    rules: {
      required: true,
      email: true,
      passwordLength: true,
      confirmPass: true,
    },
    successMess: '',
    message: '',
  }),
  methods: {
    /**
     * [actionnRule - set validation rules]
     */
    actionRule() {
      this.rules.required = value => !!value || 'This field is required';
      // required rule
      this.rules.email = value => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || 'The format is correct';
      };
      // check format email rule
      this.rules.passwordLength = value => (value || '').length >= 6 || 'Min length is 6 characters';
      // count characters rule
      this.rules.confirmPass = value => value === this.password || 'Password and confirm password not same';
      // confirm password rule
    },
    /**
     * [signUp - call API]
     */
    signUp() {
      const user = {
        username: this.userName,
        password: this.password,
        fullName: this.fullName,
        email: this.email,
        passwordConfirm: this.passwordConfirm,
      };

      this.signUpAction(user)
        .then(() => {
          this.isValue = false;
          this.isSuccess = true;
          this.successMess = 'Sign up success';
          setTimeout(() => {
            this.$router.push('/sign-in');
          }, 1500);
        })
        .catch(error => {
          console.log('Error 💣💣💣: ' + error);
        });
    },
    ...mapActions('auth', ['signUpAction']),

    /**
     * [submitBtn - call function acttionRule, check form validate to call API]
     */
    submitBtn() {
      this.actionRule(); //set rule
      setTimeout(() => {
        // check form validate to call API
        const isValid = this.$refs.form.validate();
        if (isValid) {
          this.signUp();
        }
      });
    },
  },
};
