<template>
    <div>
        <form v-on:submit="processData">
            <div class="row">
                <div class="form-group col-5">
                    <label for="exampleInputEmail1">Slovíčko</label>
                    <input type="text" v-model="originalWord" class="form-control" id="text" aria-describedby="emailHelp">
                </div>
                <div class="form-group col-5 offset-2">
                    <label for="sel1">Vyber jazyk:</label>
                    <select class="form-control" id="sel1" v-model="language">
                        <option value="en">Angličtina</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-12">
                    <label for="exampleInputPassword1">Překlady</label>
                    <input type="text" v-model="translates" class="form-control" id="translates">
                    <small id="emailHelp" class="form-text text-muted">Překladů může být víc, oddělejte čárkou</small>
                </div>
            </div>

            <button type="submit" class="btn btn-primary">{{buttonName}}</button>
        </form>
    </div>
</template>

<script>
export default {
    props: ["word", "methodName", "buttonName"],
    data: function() {
        return {
            originalWord: this.word.name,
            translates: this.word.translates.join(', '),
            language: this.word.language,
        }
    },
    methods: {
        processData: function(event) {
            event.preventDefault();
            this.$store.commit(this.methodName, {
                name: this.originalWord.trim(),
                language: this.language.trim(),
                translates: this.translates.split(',').map(translate => translate.split())
            });
        }
    }
}
</script>

