import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SignUp',
  data: () => ({
    isShowPass: false,
    isShowConfirm: false,
    valid: true,
    value: false,
    // fullName: '',
    // email: '',
    // password: '',
    // userName: '',
    // passwordConfirm: '',

    //TESTING ================================
    fullName: 'Admin 2',
    email: 'luc@gmail.com',
    password: '12312312',
    userName: 'luc Admin',
    passwordConfirm: '12312312',
    // ======================================

    rules: {
      required: true,
      email: true,
      passwordLength: true,
      confirmPass: true
    },
    message: ''
  }),
  computed: mapGetters('auth', ['isAuth']),
  watch: {
    isAuth() {
      console.log(this.isAuth);
    }
  },
  methods: {
    actionRule() {
      this.rules.required = value => !!value || 'This field is required';

      this.rules.email = value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || 'The format is correct';
      };

      this.rules.passwordLength = value =>
        (value || '').length >= 6 || 'Min length is 6 characters';

      this.rules.confirmPass = value =>
        value === this.password || 'Password and confirm password not same';
    },
    signUp() {
      const user = {
        username: this.userName,
        password: this.password,
        fullName: this.fullName,
        email: this.email,
        passwordConfirm: this.passwordConfirm
      };

      this.signUpAction(user).catch(error => {
        this.value = true;
        this.message = error.message;
      });
    },
    ...mapActions('auth', ['signUpAction']),

    submitBtn() {
      this.actionRule();
      setTimeout(() => {
        const isValid = this.$refs.form.validate();
        if (isValid) {
          this.signUp();
        }
      });
    }
  }
};
