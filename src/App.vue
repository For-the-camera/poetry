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
    // window.addEventListener('message',(e) => {
    // })
    this.$watch(
      () => this.pptStore.postData,
      (val) => {
        if (val) {
          parent.postMessage(
            {
              data: this.processStore.$state,
              isAnswered: this.pptStore.checkedAnswer,
              postTime: Date.now(),
              cst: new Date(),
            },
            "*"
          );
          console.log("post");
          this.pptStore.postData = false;
        }
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
