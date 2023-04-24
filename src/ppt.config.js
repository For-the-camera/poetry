export default [
  {
    index: 1,
    title: "导言",
    single: true,
    page: import("../src/ppt/preface.vue"),
  },
  {
    index: 2,
    title: "1",
    left: import("../src/ppt/test2.vue"),
    right: import("../src/ppt/test1.vue"),
  },
];
