<script>
import { usePPTStore } from "../stores/ppt";

export default {
  props: {
    config: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      renderList: this.transformData(this.config),
      store: usePPTStore(),
    };
  },
  methods: {
    go() {
      if (this.store.nowPage.index !== this.renderList.length) {
        const index = this.store.nowPage.index - 1;
        const now = this.renderList[index];
        now.state = "finish";
        this.$set(this.renderList, index, now);
        const next = this.renderList[index + 1];
        next.state = "process";
        this.$set(this.renderList, index + 1, next);
        this.store.nowPage = this.renderList[index + 1];
      }
    },
    back() {
      const index = this.store.nowPage.index - 1;
      if (index !== 0) {
        const now = this.renderList[index];
        now.state = "wait";
        this.$set(this.renderList, index, now);
        const later = this.renderList[index - 1];
        later.state = "process";
        this.$set(this.renderList, index - 1, later);
        this.store.nowPage = this.renderList[index - 1];
      }
    },
    transformData: (configList) => {
      return Array.from(configList, (config, index) => {
        if (index === 0) {
          config.state = "process";
        } else {
          config.state = "wait";
        }
        return config;
      });
    },
  },
  mounted() {
    this.store.nowPage = this.renderList[0];
  },
};
</script>
<template>
  <div class="navbar_container">
    <nav class="ppt-step">
      <div
        :class="{
          item: true,
          active: item.state == 'process',
          'border-right': index == renderList.length - 1,
          first: index == 0,
          other: index != 0,
        }"
        style="padding-left: 0"
        v-for="(item, index) in renderList"
        :key="item.index"
      >
        <div
          :class="{
            step: true,
            is_process: item.state == 'process',
          }"
        >
          <div
            :class="{
              'step-title': true,
              is_finish_text: item.state === 'finish',
              is_wait_text: item.state === 'wait',
            }"
          >
            {{ item.title }}
          </div>
        </div>
      </div>
    </nav>
    <div class="ctrl_button">
      <div class="button" @click="back()">&lt; 上一页</div>
      <div class="button border-right" @click="go()">下一页&gt;</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$cellSize: 30px;
$borderSize: 2px;
$activeColor: white;
$firstColor: #00b050;
$otherColor: #92d050;

.navbar_container {
  display: flex;
  justify-content: space-between;
  .ppt-step {
    width: 50%;
    display: flex;
    .item {
      width: $cellSize;
      display: flex;
      justify-content: center;
      align-items: center;
      border-top: $borderSize solid black;
      border-left: $borderSize solid black;
      border-bottom: $borderSize solid black;
      .step {
        text-align: center;
      }
      .is_process {
        display: flex;
        align-items: center;
        .step-title {
          font-size: 15px;
        }
      }
    }
  }
  .ctrl_button {
    display: flex;
    .button {
      padding: 12px;
      background: $otherColor;
      border-top: $borderSize solid black;
      border-left: $borderSize solid black;
      border-bottom: $borderSize solid black;
      cursor: pointer;
      user-select: none;
    }
  }
}

.active {
  background-color: $activeColor !important;
  color: black;
}
.border-right {
  border-right: $borderSize solid black;
}
.first {
  background-color: $firstColor;
}
.other {
  background-color: $otherColor;
}
</style>
