<template>
    <div>
        <Article :article="article" />
    </div>

</template>

<script>
import Article from "../../components/article/show-detail/index";
import axios from "~/plugins/axios";
import mockArticle from "./mockArticle.js";
import getBreadCrumbs from "~/lib/get-bread-crumbs";
export default {
    components: { Article },
    async asyncData({ params, store, app }) {
        return app
            .$api("article")
            .readByUrl(params.url)
            .then(response => {
                store.dispatch(
                    "breadcrumbs/set",
                    getBreadCrumbs("article/detail", response.data.title)
                );
                return {
                    article: response.data
                };
            })
            .catch(error => ({ article: mockArticle }));
    },
    head() {
        return {
            title: this.article.title
        };
    }
};
</script>