<template>
    <div class="text-center contentBlock-1">
        <LoginForm @auth:user="loginUser($event)" />
    </div>
</template>

<script>
import * as acl from "../../lib/acl/acl.js";
import getBreadCrumbs from "~/lib/get-bread-crumbs";
import LoginForm from "~/components/user/reg-login/login";
export default {
    components: { LoginForm },
    async asyncData({ store }) {
        store.dispatch("breadcrumbs/set", getBreadCrumbs("user/login"));
        return {
            title: "Přihlášení uživatele"
        };
    },
    head() {
        return {
            title: this.title
        };
    },
    methods: {
        loginUser(user) {
            this.$api("user")
                .sigin({
                    email: user.email,
                    password: user.password
                })
                .then(response => {
                    this.$store.dispatch("user/save", {
                        user: response.data.user,
                        token: response.data.token
                    });
                    this.$flush("Jste úspěšně přihlášen");

                    const page = acl.getPageByName("word");
                    const url = "url" in page ? page.url : "";
                    this.$router.push(url);
                })
                .catch(error => {
                    this.$flushError(
                        "Nepodařilo se přihlásit Špatné jméno, nebo heslo"
                    );
                });
        }
    }
};
</script>