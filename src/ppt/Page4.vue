<script>
import PageTitle from "../components/PageTitle.vue";
import { usePPTStore } from "../stores/ppt";
import { useProcessStore } from "../stores/process";

export default {
  name: "Page4",
  props: {},
  data() {
    return {
      pptStore: usePPTStore(),
      processStore: useProcessStore(),
      options: [
        {
          label: "明月几时有，故人何处逢",
          value: "A",
        },
        {
          label: "风定花犹落，雨穷云未游",
          value: "B",
        },
        {
          label: "莫放春秋佳日过，最闲草叶夕阳红",
          value: "C",
        },
      ],
      currentSelect: "",
      answer: "",
    };
  },
  methods: {
    postSelectData(item) {
      this.$checkFocus();
      this.currentSelect === ""
        ? (this.currentSelect = item.value)
        : (this.currentSelect = "");
      if (this.pptStore.nowPage.firstEnter) {
        this.processStore.page4.answer.firstResult[1] = this.currentSelect;
        this.processStore.page4.answer.lastResult[1] = this.currentSelect;
      } else {
        this.processStore.page4.answer.lastResult[1] = this.currentSelect;
      }
      this.$postData();
    },
    postInputData() {
      if (this.pptStore.nowPage.firstEnter) {
        this.processStore.page4.answer.firstResult[0] = this.answer;
        this.processStore.page4.answer.lastResult[0] = this.answer;
      } else {
        this.processStore.page4.answer.lastResult[0] = this.answer;
      }
      this.$postData();
    },
  },
  mounted() {
    this.$watch(
      () => this.pptStore.nowPage.index,
      function (val) {
        if (val === 5) {
          const { lastResult = ["",""] } = JSON.parse(
            JSON.stringify(this.processStore.page4.answer)
          );
          this.currentSelect = lastResult[1];
          this.answer = lastResult[0];
        }
      },
      {immediate:true}

    );
  },
  components: { PageTitle },
};
</script>
<template>
  <div class="page-container">
    <PageTitle>4、5/9</PageTitle>
    <div class="stem">
      <p>
        4.&emsp;在你的生活中，哪一首古诗诗句经常被想起或者出现的频率最高？你从中悟出一个什么道理？它与你的生活又有什么关系？
      </p>
      <el-input
        type="textarea"
        :rows="6"
        v-model="answer"
        @focus="$checkFocus"
        @blur="postInputData"
        :show-word-limit="true"
        :maxlength="1000"
      ></el-input>
    </div>
    <div class="stem" style="margin-top: 30px">
      <p>5.&emsp;请你选择一句你认为最好的对仗（&emsp;&emsp;）</p>
      <div class="singleChoice">
        <el-radio-group v-model="currentSelect">
          <p @click.prevent="postSelectData(item)" v-for="item in options">
            <el-radio :label="item.value">{{ "" }}</el-radio>
            {{ item.value }}.&emsp;{{ item.label }}
          </p>
        </el-radio-group>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "../assets/questionStem.scss";
.stem {
  .singleChoice {
    p {
      cursor: pointer;
    }
  }
}
</style>
