<template>
    <div class="text-center contentBlock-1">
        <LoginForm 
            @save:user="registerUser($event)"
        />
    </div>
</template>

<script>
import * as acl from "../../lib/acl/acl.js";
import getBreadCrumbs from "~/lib/get-bread-crumbs";
import LoginForm from "~/components/user/reg-login/registration";
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
                this.$flush('Vaše registrace proběhla úspěšně, můžete se příhlásit');
                const page = acl.getPageByName("user-login");
                const url = "url" in page ? page.url : "";
                this.$router.push(url);
            }).catch(error => {
                this.$flushError('Nepodařilo se přihlásit Špatné jméno, nebo heslo');
            })
        }
    }
};
</script>