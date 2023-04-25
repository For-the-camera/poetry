<script>
import Tab1 from "./Tab1.vue";
import Tab2 from "./Tab2.vue";
import Tab3 from "./Tab3.vue";
import Tab4 from "./Tab4.vue";
import Tab5 from "./Tab5.vue";

export default {
  name: "Material",
  components: {
    Tab1,
    Tab2,
    Tab3,
    Tab4,
    Tab5,
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
      <div class="tab_1" v-show="active == 0">
        <Tab1></Tab1>
      </div>
      <div v-show="active == 1">
        <Tab2></Tab2>
      </div>
      <div v-show="active == 2">
        <Tab3></Tab3>
      </div>
      <div v-show="active == 3">
        <Tab4></Tab4>
      </div>
      <div v-show="active == 4">
        <Tab5></Tab5>
      </div>
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
  }
}
</style>
