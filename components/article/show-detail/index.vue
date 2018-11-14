<template>
    <section id="wrapper" class="mb-5">
    <!--    <BradCrums /> -->
        <div class="row">
            <div class="col-md-10 offset-md-1 col-xl-7 offset-xl-1 col-lg-7 offset-lg-1">
                <div class="article">
                    <h3>{{article.title}}</h3>

                    <ul class="list-inline mb-4">
                        <li class="list-inline-item">23.10.2018</li>
                        <li class="list-inline-item">Milan Gallas</li>
                        <li class="list-inline-item"><a href="">24 komentářů</a></li>
                    </ul>

                    <div class="article-content" v-if="article.body" v-html="article.body">
                    </div>
                </div>
            </div>

            <div class="col-md-12 col-xl-3 bg-light col-lg-3">
                <div class="p-3">
                    <RelatedArticle :relatedArticles="article.relatedArticles" />
                    <Tags :tags="article.tags" />
                </div>
            </div>
        </div>

    </section>
</template>

<script>
import RelatedArticle from './relatedArticle';
import Tags from './tags';
import BradCrums from './breadcrums';

export default {
    components: { RelatedArticle, Tags, BradCrums },
    props: ['article']
};
</script>

