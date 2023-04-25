import { defineStore } from "pinia";

export const useVmStore = defineStore("vm", {
  state: () => ({
    valueList: [],
  }),
});
