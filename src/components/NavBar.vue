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
  <nav class="ppt-step" style="border-bottom: 1px solid #f2f2f2">
    <div
      class="item"
      style="padding-left: 0"
      v-for="(item, index) in renderList"
      :key="item.index"
    >
      <div :class="{ step: true, is_process: item.state == 'process' }">
        <div class="step-index" v-if="item.state == 'process'">
          {{ item.index }}
        </div>
        <div class="step-index-wait" v-if="item.state == 'wait'">
          {{ item.index }}
        </div>
        <div class="step-icon-finsih" v-if="item.state == 'finish'">
          <i class="el-icon-check"></i>
        </div>
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
      <div class="arrow" v-if="renderList.length !== item.index">
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
$theme-color: #1890ff;
$indicator-color: #1890ff;
$finish-text-color: #8b8a87;
$wait-color: #bbb7ad;
.ppt-step {
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  .item {
    display: flex;
    align-items: center;
    .step {
      display: flex;
      align-items: center;
      padding: 20px 20px 13px 20px;
      .step-index {
        width: 23px;
        height: 23px;
        background-color: $theme-color;
        color: white;
        border-radius: 50%;
        margin-right: 9px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .step-icon-finsih {
        width: 23px;
        height: 23px;
        background-color: none;
        color: $theme-color;
        border: 1px solid $theme-color;
        border-color: $theme-color;
        border-radius: 50%;
        margin-right: 9px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .step-index-wait {
        width: 23px;
        height: 23px;
        background-color: none;
        color: $wait-color;
        border: 1px solid $wait-color;
        border-radius: 50%;
        margin-right: 9px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .is_process {
    border-bottom: 2px solid $indicator-color;
  }
  .is_finish_text {
    color: $finish-text-color;
  }
  .is_wait_text {
    color: $wait-color;
  }
}
</style>
