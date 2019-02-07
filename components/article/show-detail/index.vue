<template>
    <section
        id="wrapper"
        class="mb-5"
    >
        <div class="row">
            <div class="col-xl-8 col-lg-7 contentBlock-1 mb-5 ">
                <div class="article">
                    <h2>{{article.title}}</h2>

                    <ul class="list-inline mb-4">
                        <li class="list-inline-item">23.10.2018</li>
                        <li class="list-inline-item">Milan Gallas</li>
                        <li class="list-inline-item"><a
                                href=""
                                target="blank"
                            >24 komentářů</a></li>
                    </ul>
                    <hr>
                    <div
                        id="articleComponent"
                        class="article-content mt-4"
                        v-if="article.body"
                        v-html="article.body"
                    >
                    </div>
                </div>
            </div>

            <div class="col-xl-3 col-lg-3 offset-xl-1 offset-lg-1">
                <div>
                    <RelatedArticle
                        v-if="article.relatedArticles.length"
                        :relatedArticles="article.relatedArticles"
                        class="mb-5"
                    />
                    <Tags :tags="article.tags" />
                </div>
            </div>
        </div>

    </section>
</template>

<script>
import RelatedArticle from "./relatedArticle";
import Tags from "./tags";

export default {
    components: { RelatedArticle, Tags },
    props: ["article"]
};
</script>

<style scoped>
/*@font-face {
    font-family: "sans_forgeticaregular";
    src: url("/sansforgetica-regular-webfont.woff2") format("woff2"),
        url("/sansforgetica-regular-webfont.woff") format("woff");
    font-weight: normal;
    font-style: normal;
}
#articleComponent p,
#articleComponent table,
#articleComponent ul li,
#articleComponent ol li {
    font-family: sans_forgeticaregular;
    font-size: 120%;
}*/
</style>
