<template>
    <div>
        <Article 
            :article="article"
        />
    </div>

    
</template>

<script>
import Article from '../../components/article/show-detail/index';
import axios from '~/plugins/axios';
import mockArticle from './mockArticle.js';
export default {
    components: { Article },
    async asyncData({ params }) {
        try {
            const articleResponse = await axios(`/v1/article/${params.url}`);
            return {
                article: await articleResponse.data
            }
        } catch (error) {
            return {
                article: mockArticle, 
            };
        }
        
    },
    head() {
        return {
            title: this.article.title,
        }
    }
};
</script>
