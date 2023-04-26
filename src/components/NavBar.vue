<script>
import { usePPTStore } from "../stores/ppt";
import { useProcessStore } from "../stores/process";

export default {
  props: {
    config: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      processStore: useProcessStore(),
      renderList: this.transformData(this.config),
      store: usePPTStore(),
    };
  },
  methods: {
    go() {
      if (this.store.nowPage.index !== this.renderList.length) {
        if (this.store.nowPage.index === 9) {
          const index = this.store.nowPage.index - 1;
          const now = this.renderList[index];
          now.state = "finish";
          this.$set(this.renderList, index, now);
          const next = this.renderList[index + 1];
          next.state = "process";
          this.$set(this.renderList, index + 1, next);
          this.store.nowPage = this.renderList[index + 1];
          this.store.checkedAnswer = true;
          this.$postData();
          return;
        }
        const index = this.store.nowPage.index - 1;
        const now = this.renderList[index];
        now.state = "finish";
        this.$set(this.renderList, index, now);
        const next = this.renderList[index + 1];
        next.state = "process";
        this.$set(this.renderList, index + 1, next);
        if (this.store.nowPage.firstEnter) {
          this.store.nowPage.firstEnter = false;
        }
        this.store.nowPage.leaveMoment = Date.now();
        this.recordData();

        this.store.nowPage = this.renderList[index + 1];
        this.store.nowPage.enterMoment = Date.now();
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
        if (index + 1 !== 10) {
          this.store.nowPage.leaveMoment = Date.now();
          this.recordData();
        }

        this.store.nowPage = this.renderList[index - 1];
        if (index + 1 !== 10) {
          this.store.nowPage.enterMoment = Date.now();
        } else {
          this.store.checkedAnswer = false;
          this.$postData();
        }
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
    recordData() {
      const index = this.store.nowPage.index - 1;
      if (index !== 0) {
        let lastResult;
        if (this.processStore[`page${index}`].answer.lastResult) {
          lastResult = JSON.parse(
            JSON.stringify(this.processStore[`page${index}`].answer.lastResult)
          );
        }

        if (
          (lastResult instanceof Array && lastResult.length !== 0) ||
          (typeof lastResult === "string" && lastResult !== "")
        ) {
          this.processStore[`page${index}`].answer.process.push(lastResult);
        }
      }
      const { enterMoment, leaveMoment, firstEvent } = JSON.parse(
        JSON.stringify(this.store.nowPage)
      );
      const { totalTime, respondenceTime } = JSON.parse(
        JSON.stringify(this.processStore[`page${index}`])
      );
      this.processStore[`page${index}`].totalTime =
        totalTime === 0
          ? leaveMoment - enterMoment
          : totalTime + leaveMoment - enterMoment;
      this.processStore[`page${index}`].respondenceTime =
        respondenceTime === 0
          ? firstEvent === 0
            ? 0
            : leaveMoment - firstEvent
          : firstEvent === 0
          ? respondenceTime
          : respondenceTime + leaveMoment - firstEvent;
      this.$postData();
      this.store.nowPage.firstEvent = 0;
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
          finish: item.state == 'finish',
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
      <div
        class="button"
        @click="back()"
        v-show="this.store.nowPage.index !== 1"
      >
        &lt; 上一页
      </div>
      <div
        class="button border-right"
        @click="go()"
        v-show="this.store.nowPage.index !== 10"
      >
        下一页&gt;
      </div>
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
.finish {
  background-color: $firstColor !important;
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
