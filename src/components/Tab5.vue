<script>
export default {
  name: "Tab5",
  data() {
    return {};
  },
};
</script>
<template>
  <div class="tab-container">
    <p class="title">诗的创作</p>
    <p>&emsp;&emsp; 诗无定法，写得人多了，渐渐就生出许多方法来。</p>
    <p>
      &emsp;&emsp;
      例如，千年前，古人曾尝试利用诗的固定结构来“凑诗”，就是摘录一些不同诗人诗作的句子组合成一首新诗，我们把这种写诗的方法称为“集句”。比如，文天祥的《思故乡第一百五十六》：“天地西江远，无家问死生。凉风起天末，万里故乡情。”第一句出自杜甫的《夏日杨长宁宅送崔侍御、常正字入京》，第二句出自杜甫的《月夜忆舍弟》，第三句出自杜甫的《天末怀李白》，第四句出自杜甫的《季秋苏五弟缨江楼夜宴崔十三评事、韦少府侄三首》。
    </p>
    <p>
      &emsp;&emsp; 又如，化用的方法。
      王安石的《桂枝香·金陵怀古》最后一句“至今商女，时时犹唱，后庭遗曲”，化用了杜牧《泊秦淮》中的“商女不知亡国恨，隔江犹唱后庭花”。
      杨慎的《临江仙》，虽然是词作，但采用了同样的方法。词中的第一句“滚滚长江东逝水，浪花淘尽英雄”，
      化用了杜甫《登高》中的“不尽长江滚滚来”和苏轼《念奴娇·赤壁怀古》中的“大江东去，浪淘尽，千古风流人物”。
    </p>
    <p>
      &emsp;&emsp;
      借助以上的方法，可以帮助初学者发现写诗的乐趣和捷径，但是单从这些方法入手，不足以写出优秀的作品。
      好的诗作应当言之有物，写出内心的真实情感。
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
}
</style>
