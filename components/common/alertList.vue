<template>
  <div>
    <div
      v-for="(log, index) in logs"
      :key="index"
      :class="createAlertClass(log.type)"
    >
      <button
        type="button"
        class="close"
        data-dismiss="alert"
      >&times;</button>
      <strong>{{log.lastUpdate.getHours()}}:{{log.lastUpdate.getMinutes()}}</strong>
      {{log.data}}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      logs: state => state.logs
    })
  },
  methods: {
    createAlertClass(type) {
      return `alert alert-${type} alert-dismissible`;
    }
  }
};
</script>