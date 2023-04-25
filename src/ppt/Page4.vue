<script>
import PageTitle from "../components/PageTitle.vue";

export default {
  name: "Page4",
  props: {},
  data() {
    return {
      options: [
        {
          label: "明月几时有，故人何处逢",
          value: "A",
        },
        {
          label: "风定花犹落，雨穷云未游",
          value: "B",
        },
        {
          label: "莫放春秋佳日过，最闲草叶夕阳红",
          value: "C",
        },
      ],
      currentSelect: "",
    };
  },
  methods: {},
  components: { PageTitle },
};
</script>
<template>
  <div class="page-container">
    <PageTitle>4、5/9</PageTitle>
    <div class="stem">
      <p>
        4.&emsp;在你的生活中，哪一首古诗诗句经常被想起或者出现的频率最高？你从中悟出一个什么道理？它与你的生活又有什么关系？
      </p>
      <el-input type="textarea" :rows="6"></el-input>
    </div>
    <div class="stem" style="margin-top: 30px">
      <p>5.&emsp;请你选择一句你认为最好的对仗（&emsp;&emsp;）</p>
      <div class="singleChoice">
        <el-radio-group v-model="currentSelect">
          <p
            @click.prevent="
              currentSelect === ''
                ? (currentSelect = item.value)
                : (currentSelect = '')
            "
            v-for="item in options"
          >
            <el-radio :label="item.value">{{ "" }}</el-radio>
            {{ item.value }}.&emsp;{{ item.label }}
          </p>
        </el-radio-group>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "../assets/questionStem.scss";
.stem {
  .singleChoice {
    p {
      cursor: pointer;
    }
  }
}
</style>
