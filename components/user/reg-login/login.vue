<template>
    <form class="form form-signin">
        <UserLogo />
        <h1 class="h3 mb-3 font-weight-normal">Přihlásit se</h1>
        <div class="form-group">
            <Email v-model="user.email" />
        </div>

        <div class="form-group">
            <Password v-model="user.password" />
        </div>
        <div class="form-group checkbox mb-3 mt-3">
            <Remember v-model="user.remember" />
        </div>
        <button
            @click.prevent="loginUser"
            class="btn btn-lg btn-primary btn-block"
            type="submit"
        >Přihlásit se</button>
    </form>
</template>

<script>
import Remember from "./parts/remember";
import Password from "./parts/password";
import Email from "./parts/email";
import UserLogo from "./parts/user-logo";
import validator from "email-validator";
export default {
    components: { Remember, Password, Email, UserLogo },
    data() {
        return {
            user: {
                email: "",
                password: "",
                remember: true
            }
        };
    },
    methods: {
        loginUser() {
            if (!validator.validate(this.user.email)) {
                this.$flushWarning(
                    "Neplatná emailová adresa. Prosím zadejte email ve správném formátu"
                );
            } else {
                this.$emit("auth:user", this.user);
            }
        }
    }
};
</script>


