<script>
import { usePPTStore } from "../stores/ppt";
export default {
  name: "page10",
  props: {},
  data() {
    return {
      pptStore: usePPTStore(),
    };
  },
  methods: {},
  mounted() {
    this.pptStore.nowPage.enterMoment = Date.now();
  },
};
</script>
<template>
  <div class="preface">
    <p>
      &emsp;&emsp;
      恭喜你完成所有任务！同时，感谢你对“大手拉小手，同伴互助互学”活动的支持，以及为同学们做出的努力。
      希望未来你在日常生活中能继续自觉肩负起传承和弘扬中华优秀传统文化的责任，做一个中华优秀传统文化的自觉传播者。
    </p>
    <p>
      &emsp;&emsp;确认无误后，请点击下方的【提交全部答案】。提交全部答案后将无法修改！
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
