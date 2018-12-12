<template>
  <div class="container">
    <h2>Vytvoření nového článku new2</h2>
    <form
      action=""
      class="mt-5"
      v-on:submit="createArticle"
    >
      <div class="row">
        <div class="col-xl-5 form-group offset-xl-1">
          <label for="">Název článku</label>
          <input
            type="text"
            class="form-control"
            :value="article.title"
            v-on:input="edit('title', $event.target.value)"
          >
        </div>
        <div class="col-xl-5 form-group">
          <label for="">Url článku</label>
          <input
            type="text"
            class="form-control"
            :value="article.url"
            v-on:input="edit('url', $event.target.value)"
          >
        </div>
      </div>
      <div class="row">
        <div class="col-xl-10 form-group offset-xl-1">
          <label for="">Obsah článku</label>
          <div
            class="quill-editor"
            :value="article.body"
            v-quill:myQuillEditor="editorOption"
            @change="edit('body', $event.html)"
          >
          </div>
        </div>
      </div>
      <br /><br /><br />
      <div class="row mt-5">
        <div class="col-xl-5 form-group offset-xl-1">
          <label for="">tagy (oddělte čárkou)</label>
          <input
            type="text"
            class="form-control"
            :value="article.tags"
            v-on:input="edit('tags', $event.target.value.split(',').map(tag => tag.trim()))"
          >
        </div>
        <div class="col-xl-5 form-group">
          <label for="">Související články</label>
          <select
            v-model="relatedArticle"
            @change="edit('relatedArticles', $event.target.value)"
            class="form-control"
            id="exampleFormControlSelect1"
            multiple
          >
            <option
              v-for="(article, index) in articleList"
              :key="index"
              :value="article"
            >
              {{ article.title }}
            </option>
          </select>
        </div>
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
  components: { Article },
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
        data = this.relatedArticle.map(article => ({
          url: article.url,
          title: article.title
        }));
      }
      this.editArticle({ [name]: data });
      //console.log(name);
    }
  }
};
</script>

