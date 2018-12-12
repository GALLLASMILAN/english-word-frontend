<template>
  <div v-if="dataOk">
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
  components: { CreateForm },
  async asyncData({ store }) {
    try {
      const response = await axios("/v1/article");
      store.commit("article/ADDRELATEDARTICLELIST", response.data);
      return {
        articleList: response.data,
        dataOk: true
      };
    } catch (error) {
      store.commit("logs/ERROR", error.message);
      return { articleList: [] };
    }
  }
};
</script>
