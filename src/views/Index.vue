<script>
import NavBar from "../components/NavBar.vue";
import pptConfig from "../ppt.config";
import { usePPTStore } from "../stores/ppt";

export default {
  components: { NavBar },
  props: {},

  data() {
    const store = usePPTStore();
    return {
      pptConfig,
      pptRender: [],
      store,
    };
  },
  mounted() {
    const store = usePPTStore();
    let promiseList = [];
    if (store.nowPage.left && store.nowPage.right) {
      promiseList = [store.nowPage.left, store.nowPage.right];
    }
    if (store.nowPage.page) {
      promiseList = [store.nowPage.page];
    }
    Promise.all([...promiseList]).then((valueList) => {
      if (valueList.length === 1) {
        this.pptRender = [undefined, undefined, valueList[0].default];
      } else {
        this.pptRender = [
          valueList[0].default,
          valueList[1].default,
          undefined,
        ];
      }
    });
    this.$watch("store.nowPage.left", function (newVal) {
      if (newVal) {
        newVal.then((value) => {
          this.$set(this.pptRender, 0, value.default);
        });
      }
    });
    this.$watch("store.nowPage.right", function (newVal) {
      if (newVal) {
        newVal.then((value) => {
          this.$set(this.pptRender, 1, value.default);
        });
      }
    });
    this.$watch("store.nowPage.page", function (newVal) {
      if (newVal) {
        newVal.then((value) => {
          this.$set(this.pptRender, 2, value.default);
        });
      }
    });
  },
};
</script>
<template>
  <div class="container">
    <NavBar ref="navBarRef" :config="pptConfig"></NavBar>
    <div class="ppt-content" v-show="!store.nowPage.single">
      <div class="left">
        <keep-alive>
          <component v-bind:is="pptRender[0]"></component>
        </keep-alive>
      </div>
      <div class="right">
        <keep-alive>
          <component v-bind:is="pptRender[1]"></component>
        </keep-alive>
      </div>
    </div>
    <div class="single-page" v-show="store.nowPage.single">
      <keep-alive>
        <component v-bind:is="pptRender[2]"></component>
      </keep-alive>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$ppt-padding: 5px;
@import "../assets/theme";
@import "../assets/size.scss";
.container {
  height: 100%;
  display: flex;
  flex-direction: column;

  .ppt-content {
    flex-grow: 2;
    margin-top: 20px;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    .left {
      border: $ppt-border solid $borderColor;

      padding: $ppt-padding;
    }
    .right {
      border-top: $ppt-border solid $borderColor;
      border-bottom: $ppt-border solid $borderColor;
      border-right: $ppt-border solid $borderColor;
      // padding: $ppt-padding;
    }
  }
  .single-page {
    flex-grow: 2;
    margin-top: 20px;
  }
  .ctrl {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
}
</style>
