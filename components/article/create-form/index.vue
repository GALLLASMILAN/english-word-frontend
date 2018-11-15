<template>
    <div class="container">
        <h2>Vytvoření nového článku</h2>
        <form action="" class="mt-5">
            <div class="row">
                <div class="col-xl-5 form-group offset-xl-1">
                    <label for="">Název článku</label>
                    <input type="text" class="form-control" v-model="title">
                </div>
                <div class="col-xl-5 form-group">
                    <label for="">Url článku</label>
                    <input type="text" class="form-control" v-model="url">
                </div>
            </div>
            <div class="row">
                <div class="col-xl-10 form-group offset-xl-1">
                    <label for="">Obsah článku</label>
                    <div class="quill-editor" :content="content" @change="onEditorChange($event)" v-quill:myQuillEditor="editorOption">
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
                    <select v-model="relatedArticle" class="form-control" id="exampleFormControlSelect1" :change="chooseRelatedArticle">
                        <option v-for="(article, index) in articleList" v-bind:key="index" v-bind:value="article">
                            {{ article.title }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-5 form-group offset-xl-1">
                    <h3>Související články: ....</h3>

                </div>
                <div class="col-xl-5 form-group ">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
        RA = {{relatedArticle}}
        <div class="mt-5">
            <Article :article="getArticle()" />
        </div>

    </div>
</template>

<script>
import Article from '../show-detail/';
import axios from '~/plugins/axios';
export default {
    props: ['articleList'],
    components: { Article },
    data() {
        return {
            relatedArticle: {},
            content: '<p>I am Example</p>',
            url: '',
            title: '',
            tags: '',
            editorOption: {
                // some quill options
                modules: {
                    table: true,
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        ['blockquote', 'code-block'],
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        [{ script: 'sub' }, { script: 'super' }],
                        [{ indent: '-1' }, { indent: '+1' }],
                        [{ direction: 'rtl' }],
                        [{ size: ['small', false, 'large', 'huge'] }],
                        [{ color: [] }, { background: [] }],
                        [{ font: [] }],
                        [{ align: [] }],
                        ['clean'],
                        ['link', 'image', 'video']
                    ]
                }
            }
        };
    },
    methods: {
        onEditorChange({ editor, html, text }) {
            console.log('editor change!', editor, html, text);
            this.content = html;
        },
        getArticle() {
            var regexLi = /<li>/gi;
            var regexUl = /<ul>/gi;
            return {
                body: this.content
                    .replace(regexUl, '<ul class="list-group list-group-flush">')
                    .replace(regexLi, '<li class="list-group-item">'),
                title: this.title,
                url: this.url,
                tags: this.tags.split(',').map(tag => tag.trim()),
                relatedArticles: []
            };
        },
        chooseRelatedArticle(event) {
            console.log(event, 'event');
        }
    }
};
</script>


