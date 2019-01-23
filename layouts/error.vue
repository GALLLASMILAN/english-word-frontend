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
body {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMC8yOS8xMiKqq3kAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAABHklEQVRIib2Vyw6EIAxFW5idr///Qx9sfG3pLEyJ3tAwi5EmBqRo7vHawiEEERHS6x7MTMxMVv6+z3tPMUYSkfTM/R0fEaG2bbMv+Gc4nZzn+dN4HAcREa3r+hi3bcuu68jLskhVIlW073tWaYlQ9+F9IpqmSfq+fwskhdO/AwmUTJXrOuaRQNeRkOd5lq7rXmS5InmERKoER/QMvUAPlZDHcZRhGN4CSeGY+aHMqgcks5RrHv/eeh455x5KrMq2yHQdibDO6ncG/KZWL7M8xDyS1/MIO0NJqdULLS81X6/X6aR0nqBSJcPeZnlZrzN477NKURn2Nus8sjzmEII0TfMiyxUuxphVWjpJkbx0btUnshRihVv70Bv8ItXq6Asoi/ZiCbU6YgAAAABJRU5ErkJggg==);
}
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
