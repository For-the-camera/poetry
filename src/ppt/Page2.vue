<script>
import PageTitle from "../components/PageTitle.vue";
export default {
  name: "Page2",
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
    <PageTitle>2/9</PageTitle>
    <div class="stem">
      <p>
        &emsp;&emsp;一般而言，题材相似的古代诗歌表达的思想感情基本也是相似的。因此，每个小组首先需要从整体上把握诗歌的类型。你的组员已经收集筛选了一些诗歌
        （<strong>点击右边【诗歌素材】</strong>） ，请你继续完成以下几个任务：
      </p>
      <p>2.&emsp;在淘汰的诗歌里，请选择一首说明理由。</p>
    </div>
    <div class="respondence">
      <p>淘汰的诗歌：</p>
      <el-select style="width:100%"></el-select>
      <p>淘汰的理由</p>
      <el-input type="textarea"></el-input>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "../assets/questionStem.scss";
.respondence {
  margin-top: 30px;
  p{
    margin: 10px 0;
  }
}
</style>
