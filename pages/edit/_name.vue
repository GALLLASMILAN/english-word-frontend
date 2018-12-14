<template>
  <div v-if="word">
    <wordForm
      :word="word"
      :buttonName="buttonName"
      :methodName="methodName"
    />
  </div>
  <div v-else>
    <h1>404: Page Not Found</h1>
  </div>
</template>

<script>
import axios from "~/plugins/axios";
import wordForm from "~/components/wordForm";

export default {
  components: { wordForm },
  data: () => ({ origWord: false, debug: false }),
  async asyncData({ params, store }) {
    try {
      const response = await axios.get(`/v1/word/${params.name}/en`);
      return {
        word: response.data,
        buttonName: "Aktualizovat",
        methodName: "word/editWord"
      };
    } catch (error) {
      store.commit("logs/ERROR", error.message);
    }
  }
};
</script>

<style>
.container {
  background-color: pink;
  padding: 2em;
}
</style>

