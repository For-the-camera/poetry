<script>
export default {
  name: "PageTitle",
};
</script>
<template>
  <div class="page-title">
    <p>编选一个古代诗歌学习单元</p>
    <p>问题<slot></slot></p>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/theme";
.page-title {
  background-image: linear-gradient(to right, #b0d5e8, #a2cde4, #94c5df, #85bedb, #76b6d7);
  padding: 12px;
}
</style>
