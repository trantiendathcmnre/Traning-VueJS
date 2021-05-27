import { mapActions } from "vuex";
// import axios from "axios"
export default {
    name: "SignIn",
    data: () => ({
        isShowPassword: false,
        isvalue: false,
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
         * @return {[void]}      [description]
         */
        actionRule() {
            this.rules.required = (value) => !!value || "This field is required"
            this.rules.passwordLength = (value) => (value || '').length >= 6 || "Min length is 6 characters"
        },
        /**
         * [callAPI - call API]
         * @return {[void]}      [description]
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
                    console.log("errrrrrrr")
                    this.isvalue = true
                    this.message = err.message
                })
        },
        ...mapActions("auth", ["signInAction"]),
        /**
         * [submitBtn - call function actionRule, check form validate to call API]
         * @return {[void]}      [description]
         */
        submitBtn() {
            this.actionRule()
            setTimeout(() => {
                const isValid = this.$refs.form.validate()
                if (isValid) {
                    this.callAPI()
                }
            })
        }

    }
}
