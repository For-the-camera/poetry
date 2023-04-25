<script>
import PageTitle from "../components/PageTitle.vue";

export default {
  name: "Page5",
  props: {},
  data() {
    return {
      scene:"",
      poetry:["",""]
    };
  },
  methods: {},
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
        <el-input style="width: 87%;" v-model="scene" />
      </div>
      <div class="item">
        <span>诗作：</span>
        <el-input style="width: 40%;margin-right: 20px;" v-model="poetry[0]" />
        ,
        <el-input style="width: 40%;margin-left: 20px;" v-model="poetry[1]"/>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "../assets/questionStem.scss";
.respondence{
 p{
  font-size: 18px;
  margin-bottom: 30px;
 }
 .item{
  margin: 20px 0;
  display: flex;
  align-items: center;
  span{
    font-size: 18px;
  }
 }
}
</style>
