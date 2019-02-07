<template>
    <div class="container contentBlock-1">
        <h1>Přidání nového slovíčka</h1>
        <form v-on:submit="saveWord">
            <div class="row">
                <div class="form-group col-xl-6 col-lg-6 col-md-12">
                    <label for="exampleInputEmail1">Slovíčko</label>
                    <input
                        type="text"
                        v-model="originalWord"
                        class="form-control"
                        id="word"
                        aria-describedby="word"
                    >
                </div>
                <div class="form-group col-xl-6 col-lg-6 col-md-12">
                    <label for="category">Kategorie</label>
                    <select
                        class="form-control"
                        name="category"
                        id="category"
                        v-model="category"
                    >
                        <option
                            v-for="category in categoryList"
                            :key="category.id"
                            :value="category.name"
                        >
                        {{ category.name }}
                        </option>
                    
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Překlady</label>
                <input
                    type="text"
                    v-model="translates"
                    class="form-control"
                    id="translates"
                >
                <small
                    id="emailHelp"
                    class="form-text text-muted"
                >Překladů může být víc, oddělejte čárkou</small>
            </div>
            <div class="form-group">
                <label for="sel1">Vyber jazyk:</label>
                <select
                    class="form-control"
                    id="sel1"
                    v-model="language"
                >
                    <option value="en">Angličtina</option>
                </select>
            </div>
            <button
                type="submit"
                class="btn btn-primary"
            >Ulož</button>
        </form>
    </div>
</template>

<script>
import getBreadCrumbs from "~/lib/get-bread-crumbs";
export default {
    middleware: ["authenticated"],
    async asyncData({ store, app }) {
        store.dispatch("breadcrumbs/set", getBreadCrumbs("word/create"));
        return app.$api('wordCategory').read().then(response => {
            return {
                categoryList: response.data
            };
        }).catch(error => {
            app.$flushError('chyba serveru. Nepodařilo se dohrát kategorie');
        });
    },
    data: function() {
        return {
            language: "en",
            originalWord: "",
            category: "Domov",
            translates: ""
        };
    },
    methods: {
        saveWord: function(event) {
            event.preventDefault();
            if (this.originalWord == "" || this.translates == "") {
                return this.flushWarrning("prosím vyplňte všechny pole");
            } else {
                const data = {
                    word: this.originalWord.trim(),
                    translates: this.translates
                        .split(",")
                        .map(translate => translate.trim()),
                    language: this.language.trim(),
                    category: this.category.trim()
                };
                this.$api("word")
                    .create(data)
                    .then(response => {
                        this.$flush(
                            `slovíčko ${data.word} bylo úspěšně přidáno`
                        );
                        this.setDefaultValues();
                    })
                    .catch(error => {
                        this.$flushError(error.message, "nepodařilo se přidat nové slovíčko");
                    });
            }
        },
        setDefaultValues() {
            this.originalWord = "";
            this.translates = "";
            this.language = "en";
            this.category = "Domov";
        }
    }
};
</script>

