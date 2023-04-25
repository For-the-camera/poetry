<script>
import PageTitle from "../components/PageTitle.vue";
import { usePPTStore } from "../stores/ppt";
import { useProcessStore } from "../stores/process";

export default {
  name: "Page5",
  props: {},
  data() {
    return {
      processStore: useProcessStore(),
      pptStore: usePPTStore(),
      scene: "",
      poetry: ["", ""],
    };
  },
  methods: {
    postInputData(index) {
      const answer = index === 0 ? this.scene : this.poetry[index];
      if (this.pptStore.nowPage.firstEnter) {
        this.processStore.page5.answer.firstResult[index] = answer;
        this.processStore.page5.answer.lastResult[index] = answer;
      } else {
        this.processStore.page5.answer.lastResult[index] = answer;
      }
      this.$postData();
    },
  },
  components: { PageTitle },
};
</script>
<template>
  <div class="page-container">
    <PageTitle>6/9</PageTitle>
    <div class="stem">
      <p>
        &emsp;&emsp;最后一个部分的任务，是编制一些表现性任务，引导学生在实践中传承和创新诗歌文化，并依据右边的素材给出多种个性化参考答案。
      </p>
      <p>
        &emsp;&emsp;以下是你们小组编制的表现性任务，请你提供自己的个性化参考答案。
      </p>
    </div>
    <div class="respondence">
      <p>6.&emsp;请你尝试写一句诗。要求：言之有物，对仗工整</p>
      <div class="item">
        <span>场景：</span>
        <el-input
          style="width: 87%"
          v-model="scene"
          @focus="$checkFocus"
          @blur="postInputData(0)"
        />
      </div>
      <div class="item">
        <span>诗作：</span>
        <el-input
          style="width: 40%; margin-right: 20px"
          v-model="poetry[0]"
          @focus="$checkFocus"
          @blur="postInputData(1)"
        />
        ,
        <el-input
          style="width: 40%; margin-left: 20px"
          v-model="poetry[1]"
          @focus="$checkFocus"
          @blur="postInputData(2)"
        />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "../assets/questionStem.scss";
.respondence {
  p {
    font-size: 18px;
    margin-bottom: 30px;
  }
  .item {
    margin: 20px 0;
    display: flex;
    align-items: center;
    span {
      font-size: 18px;
    }
  }
}
</style>
