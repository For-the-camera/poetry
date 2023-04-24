<script>
import Tab1 from "./Tab1.vue";
export default {
  name: "Material",
  components: {
    Tab1,
  },
  props: {},
  data() {
    return {
      active: 0,
    };
  },
  methods: {},
};
</script>
<template>
  <div class="material-panel">
    <div class="head">素材</div>
    <div class="tab_list">
      <div class="tab_item" @click="() => (active = 0)">诗歌素材</div>
      <div class="tab_item" @click="() => (active = 1)">古人为何写诗</div>
      <div class="tab_item" @click="() => (active = 2)">什么情境下写诗</div>
      <div class="tab_item" @click="() => (active = 3)">诗的对仗</div>
      <div class="tab_item" @click="() => (active = 4)">诗的创作</div>
    </div>
    <div class="tab_content">
      <p class="tab_1" v-show="active == 0">
        <Tab1></Tab1>
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/theme";
.material-panel {
  .head {
    padding: 15px;
    background-color: $materialColor;
    text-align: center;
  }
  .tab_list {
    padding: 5px 0;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid $borderColor;
    .tab_item {
      background-color: $tabColor;
      padding: 6px 8px;
      cursor: pointer;
    }
  }
  .tab_content {
    height: 494px;
    padding: 5px;
    .tab_1 {
    }
  }
}
</style>
