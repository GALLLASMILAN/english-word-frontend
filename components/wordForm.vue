<template>
    <div>
        <form @submit="processData">
            <div class="row">
                <div class="form-group col-5">
                    <label for="exampleInputEmail1">Slovíčko</label>
                    <input
                        type="text"
                        v-model="originalWord"
                        class="form-control"
                        id="text"
                    >
                </div>
                <div class="form-group col-5 offset-2">
                    <label for="sel1">Vyber jazyk:</label>
                    <select
                        class="form-control"
                        id="sel1"
                        v-model="language"
                    >
                        <option value="en">Angličtina</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-12">
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
            </div>

            <div>
                <div class="form-group float-left">
                    <button
                        type="submit"
                        class="btn btn-primary"
                    >{{buttonName}}</button>
                </div>
                <div
                    class="form-group float-right"
                    v-show="deleteButton"
                >
                    <button
                        @click="deleteWord"
                        type="reset"
                        class="btn btn-danger"
                    >Smazat slovíčko</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    props: ["word", "methodName", "buttonName", "deleteButton"],
    data: function() {
        return {
            originalWord: this.word.name,
            translates: this.word.translates.join(", "),
            language: this.word.language
        };
    },
    methods: {
        processData: function(event) {
            event.preventDefault();
            this.$emit("send:word", {
                name: this.originalWord.trim(),
                language: this.language.trim(),
                translates: this.translates
                    .split(",")
                    .map(translate => translate.trim())
            });
        },
        deleteWord(event) {
            event.preventDefault();
            this.$api("word")
                .deleteById(this.word._id)
                .then(response => {
                    this.$flush("Slovíčko bylo smazáno");
                    this.$router.push("/word");
                })
                .catch(error => this.$flushError(error.message));
        }
    }
};
</script>

