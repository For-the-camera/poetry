<script>
export default {
  name: "Tab4",
  data() {
    return {};
  },
};
</script>
<template>
  <div class="tab-container">
    <p class="title">诗的对仗</p>
    <p>&emsp;&emsp; 诗中的对偶，叫作对仗。对偶的作用就是形成整齐的美。</p>
    <p>
      &emsp;&emsp;
      对偶的一般规则，是名词对名词，动词对动词，形容词对形容词，副词对副词。
      例如，“抗美援朝，保家卫国”，“抗”“援”“保”“卫”都是动词相对，“美”“朝”“家”“国”都是名词相对。
    </p>
    <p>
      &emsp;&emsp;
      再更好一点的对仗，就是在对应位置上词性相同的基础上，对句的意思还能与出句相关联。例如，陈与义的《雨》：
    </p>
    <div class="poetry">
      <p>沙岸残春雨，茅檐古镇官。</p>
      <p>一时花带泪<sub>（出句）</sub>，万里客凭栏<sub>（对句）</sub>。</p>
      <p>日晚蔷薇重，楼高燕子寒。</p>
      <p>惜无陶谢手，尽力破忧端。</p>
    </div>
    <p>
      &emsp;&emsp;
      “一时”对“万里”是时间对空间，“花”和“客”不在同一个门类，但出句和对句的意思可以相连。
      如果诗人用一种植物与“花”对仗，就与“人间”对“天上”是同一种做法，难出新意。
      第三联“日晚蔷薇重，楼高燕子寒”也采用了错开门类的方法来对仗，“蔷薇”对“高燕”也是两个不同门类。
    </p>
  </div>
</template>
<style scoped lang="scss">
@import "../assets/tab.scss";
.tab-container {
  padding: 10px;
  p {
    line-height: 1.5;
    margin: 10px 0;
  }
  .title {
    text-align: center;
    font-weight: 600;
    margin: 5px 0;
    line-height: 2;
  }
  .poetry{
    margin: 15px;
    p{
      text-align: center;
    }
  }
}
</style>
