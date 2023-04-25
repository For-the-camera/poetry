import { defineStore } from "pinia";

export const useProcessStore = defineStore("process", {
  state: () => ({
    page0: {
      totalTime: 0,
      respondenceTime: 0,
      answer: {}
    },
    page1: {
      totalTime: 0,
      respondenceTime: 0,
      answer: {
        firstResult: [],
        lastResult: [],
        process: []
      }
    },
    page2: {
      totalTime: 0,
      respondenceTime: 0,
      answer: {
        firstResult: [],
        lastResult: [],
        process: []
      }
    },
    page3: {
      totalTime: 0,
      respondenceTime: 0,
      answer: {
        firstResult: "",
        lastResult: "",
        process: []
      }
    },
    page4: {
      totalTime: 0,
      respondenceTime: 0,
      answer: {
        firstResult: [],
        lastResult: [],
        process: []
      }
    },
    page5: {
      totalTime: 0,
      respondenceTime: 0,
      answer: {
        firstResult: [],
        lastResult: [],
        process: []
      }
    },
    page6: {
      totalTime: 0,
      respondenceTime: 0,
      answer: {
        picture:""
      }
    },
    page7: {
      totalTime: 0,
      respondenceTime: 0,
      answer: {
        firstResult: [],
        lastResult: [],
        process: []
      }
    },
    page8: {
      totalTime: 0,
      respondenceTime: 0,
      answer: {
        firstResult:"",
        lastResult:"",
        process:[]
      }
    },

  }),
});
