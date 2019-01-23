<template>
    <div class="text-center contentBlock-1">
        <LoginForm 
            @save:user="registerUser($event)"
        />
    </div>
</template>

<script>
import getBreadCrumbs from "~/lib/get-bread-crumbs";
import LoginForm from "~/components/user/reg-login/registration";
import { request } from 'http';
export default {
    components: { LoginForm },
    async asyncData({ store }) {
        store.dispatch("breadcrumbs/set", getBreadCrumbs("user/registration"));
        return {
            title: "Registrace nového uživatele"
        };
    },
    head() {
        return {
            title: this.title
        };
    },
    methods: {
        registerUser(user) {
            this.$api('user').sigup({
                email: user.email,
                password: user.password
            }).then(response => {
                this.$flush('Vaše registrace proběhla úspěšně');
                this.$router.push("/user/login");
            }).catch(error => {
                this.$flushError('Nepodařilo se přihlásit Špatné jméno, nebo heslo');
            })
        }
    }
};
</script>