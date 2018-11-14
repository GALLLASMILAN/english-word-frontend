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
import axios from '~/plugins/axios'
export default {
    data: function() {
        return {
            language: 'en',
            originalWord: '',
            translates: '',
            debug: {}
        }
    },
    methods: {
        saveWord: function(event) {
            event.preventDefault();
            if (this.originalWord == '' || this.translates == '') {
                this.debug = 'prosím vyplňte všechny pole';
                return;
            } else {
                const data = {
                    word: this.originalWord.trim(),
                    translates: this.translates.split(',').map(translate => translate.trim()),
                    language: this.language.trim()
                }

                axios.post('/v1/word/save', data).then(response => {
                    this.debug = response.data;
                }).catch(error => {
                    this.debug = error;
                });

                this.originalWord = '';
                this.translates = '';
                this.language = 'en'
            }
        }
    }
}
</script>

<style>
</style>

