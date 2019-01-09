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
    </div>
</template>

<script>
import axios from '~/plugins/axios';
import getBreadCrumbs from '~/lib/get-bread-crumbs';
export default {
    middleware: ['authenticated'],
    asyncData({store}){
        store.dispatch("breadcrumbs/set", getBreadCrumbs('word/create'));
    },
    data: function() {
        return {
            language: 'en',
            originalWord: '',
            translates: '',
        }
    },
    methods: {
        saveWord: function(event) {
            event.preventDefault();
            if (this.originalWord == '' || this.translates == '') {
                return this.flushWarrning('prosím vyplňte všechny pole');
            } else {
                const data = {
                    word: this.originalWord.trim(),
                    translates: this.translates.split(',').map(translate => translate.trim()),
                    language: this.language.trim()
                }

                axios.post('/v1/word/save', data).then(response => {
                    this.flush(`slovíčko ${data.word} bylo úspěšně přidáno`);
                    this.setDefaultValues();
                }).catch(error => {
                    this.flushError('nepodařilo se přidat nové slovíčko');
                });
            }
        },
        setDefaultValues() {
             this.originalWord = '';
             this.translates = '';
             this.language = 'en'
        }
    }
}
</script>

<style>
</style>

