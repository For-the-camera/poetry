import { defineStore } from "pinia";

export const usePPTStore = defineStore("ppt", {
  state: () => ({
    nowPage: {},
    checkedAnswer: false,
    postData: false,
  }),
});
