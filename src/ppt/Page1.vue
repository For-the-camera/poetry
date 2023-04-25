<script>
import PageTitle from "../components/PageTitle.vue";
import { drag, drop } from "../tools/drag";
export default {
  name: "Page1",
  props: {},
  data() {
    return { content1: "", content2: "==" };
  },
  methods: {},
  components: { PageTitle },
  mounted() {
    const drag_panle_el = this.$refs.drag_panle;
    const drag_left_el = this.$refs.left_panle;
    const drag_right_el = this.$refs.right_panle;
    drag(drag_right_el, {
      dragClass: ".darg_select_item",
    });
    drop(drag_left_el, {
      dropClass: ".darg_answer_item",
      copy: true,
      condition: (event, options) => {
        const parentClassName = event.dataTransfer.getData("parent");
        console.log(parentClassName);
        return (
          "." + event.target.className == options.dropClass &&
          parentClassName != ""
        );
      },
    });
    drag(drag_left_el, {
      dragClass: ".darg_select_item",
    });
    drop(drag_panle_el, {
      dropClass: "div",
      copy: false,
      condition: (event, options) => {
        return "." + event.target.className != ".darg_select_item";
      },
    });
  },
};
</script>
<template>
  <div class="page1">
    <PageTitle>1/9</PageTitle>
    <div class="stem">
      <p>
        &emsp;
        &emsp;一般而言，题材相似的古代诗歌表达的思想感情基本也是相似的。因此，每个小组首先需要从整体上把握诗歌的类型。你的组员已经收集筛选了一些诗歌<strong>（点击右边【诗歌素材】）</strong>，请你继续完成以下几个任务：
      </p>
      <p style="margin-top: 7px">
        &emsp; &emsp; 1.
        请从12首诗歌中，依据一定的标准筛选出4首诗歌组合成一个诗歌学习单元。同时，说明你的组合标准，并为这个单元拟一个标题。（请把右边的序号拖到右边方框里。）
      </p>
      <div class="darg_no" style="margin-top: 27px" ref="drag_panle">
        <div class="darg_answer">
          <div class="darg_answer_list" ref="left_panle">
            <div class="darg_answer_item"></div>
            <div class="darg_answer_item"></div>
            <div class="darg_answer_item"></div>
            <div class="darg_answer_item"></div>
          </div>
        </div>
        <div class="darg_select_panle" ref="right_panle">
          <div class="darg_select_item">1</div>
          <div class="darg_select_item">2</div>
          <div class="darg_select_item">3</div>
          <div class="darg_select_item">4</div>
          <div class="darg_select_item">5</div>
          <div class="darg_select_item">6</div>
          <div class="darg_select_item">7</div>
          <div class="darg_select_item">8</div>
          <div class="darg_select_item">9</div>
          <div class="darg_select_item">10</div>
          <div class="darg_select_item">11</div>
          <div class="darg_select_item">12</div>
        </div>
      </div>
      <p style="margin-top: 7px">组合标准：</p>
      <el-input
        type="textarea"
        :rows="5"
        placeholder="请输入内容"
        v-model="content1"
      >
      </el-input>
      <p style="margin-top: 7px">拟一个单元标题：</p>
      <el-input
        type="textarea"
        :rows="1"
        placeholder="请输入内容"
        v-model="content2"
      >
      </el-input>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/questionStem";
$cell_size: 40px;
.page1 {
  .darg_no {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;

    .darg_answer {
      display: flex;
      justify-content: center;
      align-items: center;
      .darg_answer_list {
        width: 80%;
        display: flex;
        justify-content: space-around;
        .darg_answer_item {
          width: $cell_size;
          height: $cell_size;
          border: 1px solid black;
        }
      }
    }
    .darg_select_panle {
      width: 70%;
      height: 150px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: 1fr 1fr 1fr;
      .darg_select_item {
        border: 1px solid black;
      }
    }
    .darg_select_item {
      width: $cell_size;
      height: $cell_size;

      display: flex;
      justify-content: center;
      align-items: center;
      user-select: none;
    }
  }
}
</style>
