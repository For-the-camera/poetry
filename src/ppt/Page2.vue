<script>
import PageTitle from "../components/PageTitle.vue";
import { usePPTStore } from "../stores/ppt";
import { useProcessStore } from "../stores/process";
export default {
  name: "Page2",
  props: {},
  data() {
    return {
      processStore: useProcessStore(),
      pptStore: usePPTStore(),
      options: [
        {
          label: "①出塞诗其一·王昌龄",
          value: "①出塞诗其一·王昌龄",
        },

        {
          label: "②过故人庄·孟浩然",
          value: "②过故人庄·孟浩然",
        },
        {
          label: "③月夜忆舍弟·杜甫",
          value: "③月夜忆舍弟·杜甫",
        },
        {
          label: "④凉州词其一·杜牧",
          value: "④凉州词其一·杜牧",
        },
        {
          label: "⑤客至·杜甫",
          value: "⑤客至·杜甫",
        },
        {
          label: "⑥望月怀远·张九龄",
          value: "⑥望月怀远·张九龄",
        },
        {
          label: "⑦赠汪伦·李白",
          value: "⑦赠汪伦·李白",
        },
        {
          label: "⑧静夜思·李白",
          value: "⑧静夜思·李白",
        },
        {
          label: "⑨闻官军收河南河北·杜甫",
          value: "⑨闻官军收河南河北·杜甫",
        },
        {
          label: "⑩泊秦淮·杜牧",
          value: "⑩泊秦淮·杜牧",
        },
        {
          label: "⑪十五夜望月寄杜郎中·王建",
          value: "⑪十五夜望月寄杜郎中·王建",
        },
        {
          label: "⑫喜见外弟又言别·李益",
          value: "⑫喜见外弟又言别·李益",
        },
      ],
      currentSelect: "",
      reason: "",
    };
  },
  methods: {
    pushSelectData() {
      if (this.pptStore.nowPage.firstEnter) {
        this.processStore.page2.answer.firstResult[0] = this.currentSelect;
        this.processStore.page2.answer.lastResult[0] = this.currentSelect;
      } else {
        this.processStore.page2.answer.lastResult[0] = this.currentSelect;
      }
      this.$postData();
    },
    pushInputData() {
      if (this.pptStore.nowPage.firstEnter) {
        this.processStore.page2.answer.firstResult[1] = this.reason;
        this.processStore.page2.answer.lastResult[1] = this.reason;
      } else {
        this.processStore.page2.answer.lastResult[1] = this.reason;
      }
      this.$postData();
    },
  },
  mounted() {
    this.$watch(
      () => this.pptStore.nowPage.index,
      function (val) {
        if (val === 3) {
          const { lastResult = ["", ""] } = JSON.parse(
            JSON.stringify(this.processStore.page2.answer)
          );
          this.currentSelect = lastResult[0];
          this.reason = lastResult[1];
        }
      },
      { immediate: true }
    );
  },
  components: { PageTitle },
};
</script>
<template>
  <div class="page-container">
    <PageTitle>2/9</PageTitle>
    <div class="stem">
      <p>2.&emsp;在淘汰的诗歌里，请选择一首说明理由。</p>
    </div>
    <div class="respondence">
      <p>淘汰的诗歌：</p>
      <el-select
        style="width: 100%"
        v-model="currentSelect"
        placeholder="请选择要淘汰的诗歌"
        @focus="$checkFocus"
        @change="pushSelectData"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.label"
        ></el-option>
      </el-select>
      <p>淘汰的理由</p>
      <el-input
        type="textarea"
        :rows="6"
        v-model="reason"
        @blur="pushInputData"
        :show-word-limit="true"
        :maxlength="1000"
        placeholder="请输入你的淘汰理由"
      ></el-input>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "../assets/questionStem.scss";
.respondence {
  margin-top: 30px;
  p {
    margin: 10px 0;
  }
}
</style>
