<script>
import PageTitle from "../components/PageTitle.vue";
export default {
  name: "Page2",
  comments: {
    PageTitle,
  },
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
        &emsp;&emsp;一般而言，题材相似的古代诗歌表达的思想感情基本也是相似的。因此，每个小组首先需要从整体上把握诗歌的类型。你的组员已经收集筛选了一些诗歌（
        <strong>点击右边【诗歌素材】</strong>
        ），请你继续完成以下几个任务：
      </p>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "../assets/questionStem.scss";

</style>
