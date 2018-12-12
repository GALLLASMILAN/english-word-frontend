<template>
  <div>
    <p v-show="debug">
      {{debug}}
    </p>
    <div
      v-for="(article, index) in articleList"
      :key="index"
      class="row p-3"
    >
      <div class="col-md-7 offset-md-1">
        <a :href="makeUrl(article.url)">
          {{article.title}}
        </a>
      </div>
      <div class="col-md-3">
        <button
          :data-id="article.id"
          v-on:click="deleteArticle(article)"
          v-if="isAdmin()"
        >
          smazat
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "~/plugins/axios";
import { mapState } from "vuex";
export default {
  async asyncData() {
    try {
      const articleListResponse = await axios("/v1/article");
      return {
        articleList: articleListResponse.data,
        debug: false
      };
    } catch (error) {
      return {
        debug: error.message
      };
    }
  },
  computed: mapState({
    actualUser: state => state.user.actualUser
  }),
  methods: {
    makeUrl: function(url) {
      return `article/${url}`;
    },
    deleteArticle: async function(article) {
      try {
        const removeArticleResponse = await axios.delete("/v1/article", {
          data: {
            token: this.actualUser.token,
            articleId: article._id
          }
        });
      } catch (error) {
        this.debug = error.message;
      }
    },
    isAdmin() {
      return this.actualUser.role == "admin";
    }
  }
};
</script>

