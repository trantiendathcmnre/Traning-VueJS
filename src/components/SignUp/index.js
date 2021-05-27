import axios from "axios"
export default {
    name: "SignUp",
    data: () => ({
        show: false,
        show1: false,
        valid: true,
        value: false,
        signup: true,
        fullName: "",
        email: "",
        password: "",
        userName: "",
        passwordConfirm: "",
        rules: {
            required: true,
            email: true,
            passwordLength: true,
            confirmPass: true
        },
        message: ''
    }),
    methods: {
        actionRule() {
            this.rules.required = (value) => !!value || "This field is required"

            this.rules.email = (value) => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return pattern.test(value) || "The format is correct"
            }

            this.rules.passwordLength = (value) => (value || '').length >= 6 || "Min length is 6 characters"

            this.rules.confirmPass = (value) => value === this.password || "Password and confirm password not same"

        },

        signUp() {
            console.log("calll")
            const user = {
                username: this.userName,
                password: this.password,
                fullName: this.fullName,
                email: this.email,
                passwordConfirm: this.passwordConfirm
            }
            axios.post("http://192.168.2.31:8000/api/v1/users/signup", user).then((res) => {
                if (res.data.message === "Signed up successfully") {
                    // Router to MANAGER BOOK COMPONENT
                    this.$router.push('/book-manager')
                }
            }).catch((err) => {
                this.value = true
                this.message = err.message
            })
        },
        submitBtn() {
            this.actionRule()
            setTimeout(() => {
                const isValid = this.$refs.form.validate()
                if (isValid) {
                    this.signUp()
                }
            })
        }

    }
}
