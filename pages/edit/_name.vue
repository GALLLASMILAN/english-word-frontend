<template>
    <div class="container">
        <h1>Přidání nového slovíčka</h1>
        <form v-on:submit="saveWord">
            <div class="form-group">
                <label for="exampleInputEmail1">Slovíčko</label>
                <input type="text" v-model="originalWord" class="form-control" id="text" aria-describedby="emailHelp">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Překlady</label>
                <input type="text" v-model="translates" class="form-control" id="translates">
                <small id="emailHelp" class="form-text text-muted">Překladů může být víc, oddělejte čárkou</small>
            </div>
            <div class="form-group">
                <label for="sel1">Vyber jazyk:</label>
                <select class="form-control" id="sel1" v-model="language">
                    <option value="en">Angličtina</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Ulož</button>
        </form>
        {{debug}}
    </div>
</template>

<script>
import wordForm from '~/components/wordForm';

export default {
    components: {wordForm},
    data: () => ({ origWord: false, debug: false }),
    async asyncData({params}) {
        return {
            word: { name: 'above', language: 'en', fail: 2, success: 2, la: 0, saved: 4, translates: ['výše', 'nahoře'] },
            debug: params.name,
            buttonName: "Aktualizovat"
        }
    },
    methods: {
        saveWord: function(event) {
            event.preventDefault();
            const data = {
                word: this.originalWord.trim(),
                translates: this.translates.split(',').map(translate => translate.trim()),
                language: this.language.trim()
            }
            this.debug = data;
        },
        loadWord: async function() {
            try {
                const response = await axios.get('/v1/word/');
                // to store
                this.origWord = response.data.name;
            } catch (error) {
                this.debug = error.message;
            }
        }
    }
}
</script>

<style>
.container {
    background-color: pink;
    padding: 2em;
}
</style>

