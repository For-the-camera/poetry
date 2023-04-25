<script>
import PageTitle from "../components/PageTitle.vue";
import { usePPTStore } from "../stores/ppt";
import { useProcessStore } from "../stores/process";

export default {
  name: "Page8",
  props: {},
  data() {
    return {
      pptStore: usePPTStore(),
      processStore: useProcessStore(),
      idea: "",
    };
  },
  methods: {
    postInputData() {
      if (this.pptStore.nowPage.firstEnter) {
        this.processStore.page7.answer.firstResult = this.idea;
        this.processStore.page7.answer.lastResult = this.idea;
      } else {
        this.processStore.page7.answer.lastResult = this.idea;
      }
      this.$postData();
    },
  },
  components: { PageTitle },
};
</script>
<template>
  <div class="page-container">
    <PageTitle>9/9</PageTitle>
    <div class="stem">
      <p>9.&emsp;请你反思一个问题：在现在这个时代，学古诗词有什么作用呢</p>
      <div class="example">
        <p>
          &emsp;&emsp;&emsp;
          有同学认为：“我有喜怒哀乐，可以发一个朋友圈配一张图片，之后就可以去做别的事情了。为什么一定要写诗呢？学得那么辛苦，也很难超越古人。”
        </p>
        <p>
          &emsp;&emsp;&emsp;
          也有同学认为：“古诗词的语言精炼、简洁，语境优美，具有丰富的文化信息。学习写古诗词可以训练我的语言表达能力，同时滋养自己的精神气质。”
        </p>
      </div>
      <p>&emsp;&emsp;针对以上的观点，谈谈你的想法。</p>
    </div>
    <div class="respondence">
      <p>你的想法:</p>
      <el-input
        type="textarea"
        :rows="6"
        v-model="idea"
        @focus="$checFocus"
        @blur="postInputData"
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
    p {
      margin: 10px 0;
      font-size: 18px;
    }
  }
}
</style>
