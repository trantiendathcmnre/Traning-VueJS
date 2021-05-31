import { mapActions } from "vuex";
export default {
    name: "SignIn",
    data: () => ({
        isShowPassword: false,
        isValue: false,
        valid: true,
        userName: "",
        password: "",
        rules: {
            required: true,
            passwordLength: true
        },
        message: ''
    }),
    methods: {
        /**
         * [actionRule - set validation rules]
         * @return []     [description]
         */
        actionRule() {
            this.rules.required = (value) => !!value || "This field is required"
            this.rules.passwordLength = (value) => (value || '').length >= 5 || "Min length is 5 characters"
        },
        /**
         * [callAPI - call API]
         * @return []      [description]
         */
        callAPI() {
            const user = {
                username: this.userName,
                password: this.password
            }
            this.signInAction(user)
                .then(
                    () => this.$router.push('/book-manager'))
                .catch((err) => {
                    this.isValue = true
                    this.message = err.message
                })
        },
        ...mapActions("auth", ["signInAction"]),
        /**
         * [submitBtn - call function actionRule, check form validate to call API]
         * @return []      [description]
         */
        submitBtn() {
            this.actionRule()
            setTimeout(() => {
                const isValid = this.$refs.form.validate()
                if (isValid) {
                    this.callAPI()
                }
            })

        },
        signInBtn() {
            this.$router.push('/sign-up')
        }

    }
}
