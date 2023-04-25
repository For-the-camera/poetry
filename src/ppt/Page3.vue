<script>
import PageTitle from "../components/PageTitle.vue";
export default {
  name: "Page3",
  props: {},
  data() {
    return {};
  },
  methods: {},
  components: { PageTitle },
};
</script>
<template>
  <div class="page-container">
    <PageTitle>3/9</PageTitle>
    <div class="stem">
      <p>
        &emsp;&emsp;接下来，第二部分的任务是通过设置一些问题，引导学生透过诗歌感受其背后反映的文化，并基于小组整理的素材给出回答示例。
        （<strong>点击右边【古人为何写诗】【什么情景下写诗】【诗的对仗】</strong>）<br>
        &emsp;&emsp;下面诗你们小组设置的一些问题，请你给出回答示例。
      </p>
      <p>
        3.你觉得古人为何写诗？写诗对古人的意义是什么？
      </p>
    </div>
    <div style="margin-top: 20px;">
      <el-input type="textarea" :rows="8"></el-input>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "../assets/questionStem.scss";
</style>
