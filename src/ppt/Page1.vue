<script>
import PageTitle from "../components/PageTitle.vue";
import { useVmStore } from "../stores/vm";
import dragula from "dragula";
import { useProcessStore } from "../stores/process";
import { usePPTStore } from "../stores/ppt";

export default {
  name: "Page1",
  props: {},
  data() {
    return {
      pptStore: usePPTStore(),
      processStore: useProcessStore(),
      vmStore: useVmStore(),
      content1: "",
      content2: "",
    };
  },
  methods: {
    postInputData(index) {
      const answer = index === 0 ? this.content1 : this.content2;
      if (this.pptStore.nowPage.firstEnter) {
        this.processStore.page1.answer.firstResult[index] = answer;
        this.processStore.page1.answer.lastResult[index] = answer;
      } else {
        this.processStore.page1.answer.lastResult[index] = answer;
      }
      this.$postData();
    },
  },
  components: { PageTitle },
  mounted() {
    this.$watch(
      () => this.pptStore.nowPage.index,
      function (val) {
        if (val === 2) {
          const { lastResult = ["", "", []] } = JSON.parse(
            JSON.stringify(this.processStore.page1.answer)
          );
          this.content1 = lastResult[0];
          this.content2 = lastResult[1];
          // useVmStore().valueList = lastResult[2];
        }
      },
      { immediate: true }
    );
    this.$watch(
      () => this.vmStore.valueList,
      function () {
        if (this.pptStore.nowPage.firstEvent === 0) {
          this.pptStore.nowPage.firstEvent = Date.now();
        }
        const answer = JSON.parse(JSON.stringify(this.vmStore.valueList));
        if (this.pptStore.nowPage.firstEnter) {
          this.processStore.page1.answer.firstResult[2] = answer;
          this.processStore.page1.answer.lastResult[2] = answer;
        } else {
          this.processStore.page1.answer.lastResult[2] = answer;
        }
        this.$postData();
      },
      { deep: true }
    );
    const drag_panle_el = this.$refs.drag_panle;
    const drag_left_el = this.$refs.left_panle;
    const drag_right_el = this.$refs.right_panle;
    const a = this.$refs.darg_answer_item;
    let temp;

    dragula([...drag_left_el.childNodes, drag_right_el], {
      mirrorContainer: document.body,
      ignoreInputTextSelection: false,
      moves: function (el, container, handle) {
        handle = handle.cloneNode(true);
        return handle.classList.contains("darg_select_item");
      },
      accepts: function (el, target, source, sibling) {
        if (target.className == source.className) {
          return false;
        }
        if (target.childNodes.length > 0) {
          return false;
        }

        if (useVmStore().valueList.includes(el.getAttribute("value"))) {
          return false;
        }

        return true;
      },
    })
      .on("dragend", function (el) {
        if (el.parentNode.className != "darg_select_panle") {
          if (temp == el.parentNode) {
            useVmStore().valueList = useVmStore().valueList.filter((item) => {
              if (item == el.getAttribute("value")) {
                return false;
              }
              return true;
            });
            el.parentNode.removeChild(el);
          }
          temp = el.parentNode;
        }
      })
      .on("drop", (el, target, source) => {
        useVmStore().valueList.push(el.getAttribute("value"));

        if (el.getAttribute("data-copyable") === "true") {
          const clonedEl = el.cloneNode(true);
          clonedEl.classList.remove("gu-transit");
          source.appendChild(clonedEl);
        }
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
        &emsp;一般而言，题材相似的古代诗歌表达的思想感情基本也是相似的。因此，第一部分的任务是引导学生从整体上了解不同的诗歌主题。你的组员已经收集筛选了一些诗歌<strong>（点击右边【诗歌素材】）</strong>，请你继续完成以下几个任务：
      </p>
      <p style="margin-top: 7px">
        1.请从12首诗歌中，依据一定的标准筛选出4首诗歌组合成一个诗歌学习单元。同时，说明你的组合标准，并为这个单元拟一个标题。（请把右边的序号拖到右边方框里。）
      </p>
      <div class="darg_no" style="margin-top: 27px" ref="drag_panle">
        <div class="darg_answer">
          <div class="darg_answer_list" ref="left_panle">
            <div class="darg_answer_item" ref="darg_answer_item"></div>
            <div class="darg_answer_item"></div>
            <div class="darg_answer_item"></div>
            <div class="darg_answer_item"></div>
          </div>
        </div>
        <div class="darg_select_panle" ref="right_panle">
          <div class="darg_select_item Index1" data-copyable="true" value="1">
            1
          </div>
          <div class="darg_select_item Index2" data-copyable="true" value="2">
            2
          </div>
          <div class="darg_select_item Index3" data-copyable="true" value="3">
            3
          </div>
          <div class="darg_select_item Index4" data-copyable="true" value="4">
            4
          </div>
          <div class="darg_select_item Index5" data-copyable="true" value="5">
            5
          </div>
          <div class="darg_select_item Index6" data-copyable="true" value="6">
            6
          </div>
          <div class="darg_select_item Index7" data-copyable="true" value="7">
            7
          </div>
          <div class="darg_select_item Index8" data-copyable="true" value="8">
            8
          </div>
          <div class="darg_select_item Index9" data-copyable="true" value="9">
            9
          </div>
          <div class="darg_select_item Index10" data-copyable="true" value="10">
            10
          </div>
          <div class="darg_select_item Index11" data-copyable="true" value="11">
            11
          </div>
          <div class="darg_select_item Index12" data-copyable="true" value="12">
            12
          </div>
        </div>
      </div>
      <p style="margin-top: 7px">组合标准：</p>
      <el-input
        type="textarea"
        :rows="3"
        placeholder="请输入你的组合标准"
        v-model="content1"
        :show-word-limit="true"
        :maxlength="1000"
        @focus="$checkFocus"
        @blur="postInputData(0)"
      >
      </el-input>
      <p style="margin-top: 7px">拟一个单元标题：</p>
      <el-input
        type="textarea"
        :rows="1"
        :maxlength="1000"
        :show-word-limit="true"
        placeholder="请输入单元标题"
        v-model="content2"
        @focus="$checkFocus"
        @blur="postInputData(1)"
      >
      </el-input>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/questionStem";
@import "../assets/dragula";
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
      // grid-template-columns: repeat(4, 1fr);
      // grid-template-rows: 1fr 1fr 1fr;
      grid-template-areas:
        "Index1 Index2 Index3 Index4"
        "Index5 Index6 Index7 Index8"
        "Index9 Index10 Index11 Index12";
      .darg_select_item {
        border: 1px solid black;
      }
      .Index1 {
        grid-area: Index1;
      }
      .Index2 {
        grid-area: Index2;
      }
      .Index3 {
        grid-area: Index3;
      }
      .Index4 {
        grid-area: Index4;
      }
      .Index5 {
        grid-area: Index5;
      }
      .Index6 {
        grid-area: Index6;
      }
      .Index7 {
        grid-area: Index7;
      }
      .Index8 {
        grid-area: Index8;
      }
      .Index9 {
        grid-area: Index9;
      }
      .Index10 {
        grid-area: Index10;
      }
      .Index11 {
        grid-area: Index11;
      }
      .Index12 {
        grid-area: Index12;
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
