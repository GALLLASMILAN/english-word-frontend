<template>
    <div class="container">
        <h1>Testování slovní zásoby</h1>
        <form v-on:submit="testTranslate">
            <div class="row">
                <div class="form-group col-5">
                    <label for="exampleInputEmail1">Slovíčko</label>
                    <input
                        type="text"
                        v-bind:value="origWord"
                        class="form-control"
                        id="text"
                        disabled
                    >
                </div>
                <div class="form-group col-5 offset-2">
                    <label for="exampleInputPassword1">Přeložte</label>
                    <input
                        type="text"
                        v-model="translate"
                        class="form-control"
                        id="translates"
                        autocomplete="off"
                    >
                    <small
                        id="emailHelp"
                        class="form-text text-muted"
                    >Namusíte psát diakritiku</small>
                </div>
            </div>

            <div
                v-show="result"
                class="row"
            >
                <div
                    v-show="result.translated"
                    class="col-12"
                >
                    <strong> {{result.userTranslate}} ✅ </strong>
                </div>
                <div
                    v-show="!result.translated"
                    class="col-12"
                >
                    <p>
                        Vaše odpověď = <span class="red">{{result.userTranslate}}</span>
                    </p>
                    <div>
                        seznam možných překladů:
                        <ul>
                            <li
                                v-for="(translate, index) in result.translates"
                                :key="index"
                            >
                                <span class="green">{{translate}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <br />

            <div class="row col-12">
                <button
                    type="submit"
                    class="btn btn-primary"
                >Odeslat</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "~/plugins/axios";
export default {
    middleware: ["authenticated"],
    data: () => ({
        translate: "",
        originalWord: "",
        result: false,
        origWord: false
    }),
    async mounted() {
        await this.loadWord();
    },
    methods: {
        testTranslate: async function(event) {
            event.preventDefault();

            if (this.translate == "") {
                this.debug = "Pole nesmí být prázdné";
                return;
            }

            const data = {
                language: "en",
                to: "cs",
                originalWord: this.origWord,
                translate: this.translate
            };

            this.$api('word').translate(data).then(response => {
                this.translate = "";
                this.result = response.data;
                this.loadWord();
            }).catch(error => {
                this.$flushError(error.message);
            })
        },
        loadWord: function() {
            return this.$api("word")
                .choose()
                .then(response => (this.origWord = response.data.name))
                .catch(error =>
                    this.$flushError("Nepodařilo se připojit k serveru"+error.message)
                );
        }
    }
};
</script>

<style>
.red {
    color: red;
    font-weight: bold;
}
.green {
    color: green;
    font-weight: bold;
}
</style>
