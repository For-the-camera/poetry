<script>
import Draw from "../components/Draw.vue";
import PageTitle from "../components/PageTitle.vue";
export default {
  name: "Page6",
  props: {},
  data() {
    return {};
  },
  methods: {},
  components: { PageTitle, Draw },
};
</script>
<template>
  <div>
    <PageTitle>7/9</PageTitle>
    <div class="stem">
      <p>
        7.&emsp;请你为自己创作的诗歌，或者任意选择一首素材中提到的诗歌，为它配画
      </p>
    </div>
    <Draw></Draw>
  </div>
</template>
<style scoped lang="scss">
@import "../assets/questionStem.scss";
</style>
