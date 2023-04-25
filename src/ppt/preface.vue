<script>
import { usePPTStore } from '../stores/ppt';
export default {
  name: "Preface",
  props: {},
  data() {
    return {
      pptStore: usePPTStore(),
    };
  },
  methods: {},
  mounted(){
    this.pptStore.nowPage.enterMoment = Date.now();
  }
};
</script>
<template>
  <div class="preface">
    <p>
      &emsp;&emsp;近日，学校发起一项“大手拉小手，同伴互助互学”活动，希望通过同伴互助、互学，实现彼此的共同成长。同伴互学，即通过与同伴一起学习、体验或讲授而获得知识和技能。经过讨论，你所在班级最后选定的互助互学主题为：
      <span
        style="
          text-decoration: underline;
          font-weight: 400;
          text-underline-position: from-font;
        "
        >为八年级学生编选一个古代诗歌学习单元</span
      >
      。
    </p>
    <p>
      &emsp;&emsp;老师建议你们以小组合作的方式完成这项任务，提供多种个性化的学习方案。接下来开始你的任务吧！
    </p>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/theme";
.preface {
  height: 100%;
  padding-top: 25%;
  padding-left: 20px;
  padding-right: 20px;
  border: 4px solid $borderColor;
  line-height: 2rem;
  font-size: 20px;
  /* align-items: center; */
}
</style>
