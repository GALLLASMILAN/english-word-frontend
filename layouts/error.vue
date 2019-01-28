<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="error-template">
                    <h1>
                        Oops!</h1>
                    <h2 v-if="error.statusCode === 404">Stránka, kterou hledáte, je nyní nedostupná</h2>
                    <h2 v-else>Nastala chyba</h2>
                    <div class="error-details">
                        Je nám líto, došlo k chybě. Požadovaná stránka nebyla nalezena!
                    </div>
                    <div class="error-actions">
                        <nuxt-link
                            to="/"
                            class="btn btn-primary btn-lg"
                        >
                            <span class="glyphicon glyphicon-home"></span> Zpět na hlavní stránku
                        </nuxt-link>
                        <nuxt-link
                            v-if="isGuest"
                            to="/user/login"
                            class="btn btn-primary btn-lg"
                        >
                            <span class="glyphicon glyphicon-envelope"></span> Přihlásit se
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["error"],
    computed: {
        isGuest() {
            return this.$store.state.user.actualUser.role === 'guest';
        }
    },
    head() {
        return {
            title: this.message,
            meta: [
                {
                    name: "viewport",
                    content:
                        "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
                }
            ]
        };
    }
};
</script>

<style>
.error-template {
    padding: 40px 15px;
    text-align: center;
}
.error-actions {
    margin-top: 15px;
    margin-bottom: 15px;
}
.error-actions .btn {
    margin-right: 10px;
}
</style>
