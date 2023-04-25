<script>
import Index from "./views/Index.vue";
import { useProcessStore } from "./stores/process";
import { usePPTStore } from "./stores/ppt";
import Vue from "vue";
export default {
  components: { Index },
  data() {
    return {
      processStore: useProcessStore(),
      pptStore: usePPTStore(),
    };
  },
  mounted() {
    this.$watch(
      () => this.processStore,
      () => {
        parent.postMessage({
          data: this.processStore.$state,
          checkedAnswer: this.pptStore.checkedAnswer,
          postTime: Date.now(),
          cst: new Date(),
        });
      }
    );
  },
};
</script>

<template>
  <div id="app">
    <Index></Index>
  </div>
</template>

<style scoped></style>
