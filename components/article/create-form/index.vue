<template>
    <div class="container">
        <h2>Vytvoření nového článku</h2>
        <form action="" class="mt-5" v-on:submit="createArticle">
            <div class="row">
                <div class="col-xl-5 form-group offset-xl-1">
                    <label for="">Název článku</label>
                    <input type="text" class="form-control" v-model.trim="title">
                </div>
                <div class="col-xl-5 form-group">
                    <label for="">Url článku</label>
                    <input type="text" class="form-control" v-model.trim="url">
                </div>
            </div>
            <div class="row">
                <div class="col-xl-10 form-group offset-xl-1">
                    <label for="">Obsah článku</label>
                    <div class="quill-editor" :content="content" v-quill:myQuillEditor="editorOption">
                    </div>
                </div>
            </div>
            <br /><br /><br />
            <div class="row mt-5">
                <div class="col-xl-5 form-group offset-xl-1">
                    <label for="">tagy (oddělte čárkou)</label>
                    <input type="text" class="form-control" v-model="tags">
                </div>
                <div class="col-xl-5 form-group">
                    <label for="">Související články</label>
                    <select v-model="relatedArticle" class="form-control" id="exampleFormControlSelect1" multiple>
                        <option v-for="(article, index) in articleList" v-bind:key="index" v-bind:value="article">
                            {{ article.title }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-5 form-group offset-xl-1">
                </div>
                <div class="col-xl-5 form-group ">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
        <div class="mt-5">
            <Article :article="getArticle()" />
        </div>

    </div>
</template>

<script>
import Article from '../show-detail/';
import axios from '~/plugins/axios';
import editorOptions from './editor-options';
import getArticle from './getArticle';

export default {
    props: ['articleList', 'article'],
    components: { Article },
    data() {
        return {
            relatedArticle: [],
            content: '<p>I am Example</p>',
            url: '',
            title: '',
            tags: '',
            editorOption: editorOptions
        };
    },
    methods: {
        getArticle,
        async createArticle(event) {
            event.preventDefault();
            if(this.url == '' || this.title == '' ) return;

            try {
                const response = await axios.post('/v1/article/', {article: this.getArticle()});
                if (response.data.status == "new") {
                    alert('článek byl vytvořen')
                } else {
                    this.relatedArticle = [];
                    this.content = '';
                    this.url = '';
                    this.title = '';
                    this.tags = '';
                    console.error(response.data);
                }
            } catch (error) {
                console.error(error.message);
            }
        }
    }
};
</script>


