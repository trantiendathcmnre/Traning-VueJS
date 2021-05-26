export default {
    name: "SignUpPage",
    data: () => ({
        nameRule: [],
        emailRule: [],
        passwordRule: []
    }),
    method: {
        actionRule() {
            this.nameRule = [
                (value) => !!value || "This field is required"
            ]
            this.emailRule = [
                (value) => !!value || "This field is required",
                (value) => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return pattern.test(value) || "The format is correct"
                }
            ]
            this.passwordRule = [
                (value) => !!value || "This field is required",
                (value) => value.length >= 6 || "Min length is 6 characters",
            ]
        }
    }
};