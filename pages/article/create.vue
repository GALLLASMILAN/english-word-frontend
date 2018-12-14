<template>
  <div v-if="articleList.length > 0">
    <CreateForm :articleList="articleList" />
  </div>
  <div v-else>
    <h1>404: Page Not Found</h1>
  </div>
</template>

<script>
import axios from "~/plugins/axios";
import CreateForm from "../../components/article/create-form/new";
import { mapMutations } from "vuex";
export default {
  middleware: ["authenticated"],
  components: { CreateForm },
  async asyncData({ store, app }) {
    try {
      const response = await axios("/v1/article");
      store.commit("article/ADDRELATEDARTICLELIST", response.data);
      return {
        articleList: response.data,
      };
    } catch (error) {
      app.flushError('Nepodařilo se připojit k serveru');
      return { articleList: [] };
    }
  },
  head() {
        return {
            title: "Přidání nového článku",
            script: [
                { type: 'text/javascript', scr: '//cdn.quilljs.com/1.3.6/quill.min.js'}
            ],
            link: [
                { rel: 'stylesheet', href: '//cdn.quilljs.com/1.3.6/quill.core.css', id: 'quillCode' },
                { rel: 'stylesheet', href: '//cdn.quilljs.com/1.3.6/quill.snow.css', id: 'quillShow' },
                { rel: 'stylesheet', href: '//cdn.quilljs.com/1.3.6/quill.bubble.css', id: 'quillBuble' },
            ]
        }
    },
};
</script>
