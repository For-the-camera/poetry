<script>
export default {
  name: "Tab1",
  data() {
    return {
      poetry: [
        {
          title: "①出塞诗其一·王昌龄",
          content: [
            "秦时明月汉时关，万里长征人未还。",
            "但使龙城飞将在，不教胡马度阴山。",
          ],
        },

        {
          title: "②过故人庄·孟浩然",
          content: [
            "故人具鸡黍，邀我至田家。",
            "绿树村边合，青山郭外斜。",
            "开轩面场圃，把酒话桑麻。",
            "待到重阳日，还来就菊花。",
          ],
        },
        {
          title: "③月夜忆舍弟·杜甫",
          content: [
            "戍鼓断人行，边秋一雁声。",
            "露从今夜白，月是故乡明。",
            "有弟皆分散，无家问死生。",
            "寄书长不达，况乃未休兵。",
          ],
        },
        {
          title: "④凉州词其一·杜牧",
          content: [
            "黄河远上白云间，一片孤城万仞山。",
            "羌笛何须怨杨柳，春风不度玉门关。",
          ],
        },
        {
          title: "⑤客至·杜甫",
          content: [
            "舍南舍北皆春水，但见群鸥日日来。",
            "花径不曾缘客扫，蓬门今始为君开。",
            "盘飧市远无兼味，樽酒家贫只旧醅。",
            "肯与邻翁相对饮，隔篱呼取尽余杯。",
          ],
        },
        {
          title: "⑥望月怀远·张九龄",
          content: [
            "海上生明月，天涯共此时。",
            "情人怨遥夜，竟夕起相思。",
            "灭烛怜光满，披衣觉露滋。",
            "不堪盈手赠，还寝梦佳期。",
          ],
        },
        {
          title: "⑦赠汪伦·李白",
          content: [
            "李白乘舟将欲行，忽闻岸上踏歌声。",
            "桃花潭水深千尺，不及汪伦送我情。",
          ],
        },
        {
          title: "⑧静夜思·李白",
          content: ["床前明月光，疑是地上霜。", "举头望明月，低头思故乡。"],
        },
        {
          title: "⑨闻官军收河南河北·杜甫",
          content: [
            "剑外忽传收蓟北，初闻涕泪满衣裳。",
            "却看妻子愁何在，漫卷诗书喜欲狂。",
            "白日放歌须纵酒，青春作伴好还乡。",
            "即从巴峡穿巫峡，便下襄阳向洛阳。",
          ],
        },
        {
          title: "⑩泊秦淮·杜牧",
          content: [
            "烟笼寒水月笼沙，夜泊秦淮近酒家。",
            "商女不知亡国恨，隔江犹唱后庭花。",
          ],
        },
        {
          title: "⑪十五夜望月寄杜郎中·王建",
          content: [
            "中庭地白树栖鸦，冷露无声湿桂花。",
            "今夜月明人尽望，不知秋思落谁家？",
          ],
        },
        {
          title: "⑫喜见外弟又言别·李益",
          content: [
            "十年离乱后，长大一相逢。",
            "问姓惊初见，称名忆旧容。",
            "别来沧海事，语罢暮天钟。",
            "明日巴陵道，秋山又几重。",
          ],
        },
      ],
    };
  },
};
</script>
<template>
  <div class="tab-container">
    <div class="poetry" v-for="(item, index) in poetry" :key="index">
      <p class="title">{{ item.title }}</p>
      <p class="content" v-for="(content, index) in item.content" :key="index">
        {{ content }}
      </p>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "../assets/tab.scss";
.poetry {
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-weight: 600;
    margin: 10px 0;
  }
  .content {
    line-height: 1.5;
  }
}
</style>
