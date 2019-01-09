<template>
    <div class="container">
        <h2>Vytvoření nového článku new2</h2>
        <form
            action=""
            class="mt-5"
            v-on:submit="createArticle"
        >
            <div class="row">
                <NameInput
                    v-model="article.title"
                    @edit:title="edit('title', $event)"
                />
                <UrlInput
                    v-model="article.url"
                    @edit:url="edit('url', $event)"
                />
            </div>
            <div class="row">
                <div class="col-xl-10 form-group offset-xl-1">
                    <label for="">Obsah článku</label>
                    <textarea :value="article.body" />
                </div>
            </div>
            <br /><br /><br />
            <div class="row mt-5">
                <TagsInput
                    v-model="article.tags"
                    @edit:tags="edit('tags', $event)"
                />
                <RelatedArticles 
                    :value="relatedArticle"
                    @edit:relatedArticles="edit('relatedArticles', $event)"
                    :articleList="articleList"
                />
            </div>
            <div class="row">
                <div class="col-xl-5 form-group offset-xl-1">
                </div>
                <div class="col-xl-5 form-group ">
                    <button
                        type="submit"
                        class="btn btn-primary"
                    >Submit</button>
                </div>
            </div>
        </form>
        <div class="mt-5">
            <Article :article="article" />
        </div>

    </div>
</template>
<script>
import NameInput from "./name-input";
import UrlInput from "./url-input";
import TagsInput from "./tags-input";
import RelatedArticles from "./related-articles";
import Article from "../show-detail/";
import axios from "~/plugins/axios";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
    data() {
        return {
            relatedArticle: []
        };
    },
    props: ["articleList"],
    components: { Article, NameInput, UrlInput, TagsInput, RelatedArticles },
    computed: {
        ...mapState({
            editorOption: state => state.editor
        }),
        article() {
            return this.$store.getters["article/parsedArticle"];
        }
    },
    methods: {
        ...mapMutations({
            editArticle: "article/EDITARTICLE"
        }),
        ...mapActions({
            saveArticle: "article/saveArticle"
        }),
        createArticle(event) {
            event.preventDefault();
            if (this.url == "" || this.title == "") return;
            this.saveArticle();
        },
        edit(name, data) {
            if (name === "relatedArticles") {
                data = data.map(article => ({
                    url: article.url,
                    title: article.title
                }));
            }
            this.editArticle({ [name]: data });
        }
    }
};
</script>

