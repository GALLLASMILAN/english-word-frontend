<template>
    <div class="container">
        <h2>Vytvoření nového článku</h2>
        <form
            action=""
            class="mt-5"
            @submit.prevent="createArticle"
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
                <div
                    class="col-xl-10 form-group offset-xl-1"
                    style="min-height:357px"
                >
                    <ContentEditor
                        v-model="article.body"
                        @edit:content="edit('body', $event)"
                    />
                </div>
            </div>

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
            <img
                src="/browser2.svg"
                alt=""
                class="w-100"
            >
            <Article
                class="py-4"
                :article="article"
                id="articlePreview"
            />
        </div>

    </div>
</template>
<script>
import NameInput from "./name-input";
import UrlInput from "./url-input";
import TagsInput from "./tags-input";
import RelatedArticles from "./related-articles";
import ContentEditor from "./content-editor";
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
    components: {
        Article,
        NameInput,
        UrlInput,
        TagsInput,
        RelatedArticles,
        ContentEditor
    },
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
            if (this.url == "" || this.title == "") return;
            this.$emit("article:create", this.article);
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

<style>
#articlePreview {
    position: relative;
    border: solid #e6e6e6 1px;
    border-top: 0;
    margin-top: -2px;
    border-bottom-right-radius: 16px;
    border-bottom-left-radius: 16px;
}
#articlePreview:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0);
    z-index: 1;
}
</style>
