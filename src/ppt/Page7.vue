<script>
import PageTitle from "../components/PageTitle.vue";
import { usePPTStore } from "../stores/ppt";
import { useProcessStore } from "../stores/process";

export default {
  name: "Page7",
  props: {},
  data() {
    return {
      pptStore: usePPTStore(),
      processStore: useProcessStore(),
      scheme: "",
      innovation: "",
    };
  },
  methods: {
    postInputData(index){
      const answer = index === 0 ? this.scheme : this.innovation;
      if (this.pptStore.nowPage.firstEnter) {
        this.processStore.page7.answer.firstResult[index] = answer;
        this.processStore.page7.answer.lastResult[index] = answer;
      } else {
        this.processStore.page7.answer.lastResult[index] = answer;
      }
      this.$postData();
    }
  },
  components: { PageTitle },
};
</script>
<template>
  <div class="page-container">
    <PageTitle>8/9</PageTitle>
    <div class="stem">
      <p>9.&emsp;请你为当代创造性地传承和创新古代诗歌文化建言献策。</p>
      <div class="example">
        <p>&emsp;&emsp;&emsp; 例如，有学生提出，设计一条山水诗研学旅行线路。</p>
        <p>
          &emsp;&emsp;&emsp;
          创新点：沉浸式体验诗歌背后浓厚的地理和历史人文，感受诗人对祖国山水的热爱之情以及积极开阔的胸怀
        </p>
      </div>
    </div>
    <div class="respondence">
      <p>你的方案：</p>
      <el-input
        type="textarea"
        :rows="6"
        v-model="scheme"
        @focus="$checkFocus"
        @blur="postInputData(0)"
      />
      <p>创新点：</p>
      <el-input
        type="textarea"
        :rows="6"
        v-model="innovation"
        @focus="$checkFocus"
        @blur="postInputData(1)"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "../assets/questionStem.scss";
.page-container {
  .stem {
    .example {
      p {
        font-size: 16px;
      }
    }
  }
  .respondence {
    margin-top: 30px;
    p {
      margin: 10px 0 5px 0;
    }
  }
}
</style>
