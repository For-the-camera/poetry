export default [
  {
    index: 1,
    title: "前言1",
    single: true,
    page: import("../src/ppt/test2.vue"),
  },
  {
    index: 2,
    title: "前言2",
    left: import("../src/ppt/test2.vue"),
    right: import("../src/ppt/test1.vue"),
  },
];
