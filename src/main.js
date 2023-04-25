import Vue from "vue";
import { createPinia, PiniaVuePlugin } from "pinia";
import App from "./App.vue";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/main.css";
import { useProcessStore } from "./stores/process";
import { usePPTStore } from "./stores/ppt";


//一些初始化
// window.global = window;

Vue.use(PiniaVuePlugin);
Vue.use(ElementUI);

new Vue({
  pinia: createPinia(),
  render: (h) => h(App),
}).$mount("#app");

const processStore = useProcessStore()
const pptStore = usePPTStore()
Vue.prototype.$checkFocus = function (){
  if (pptStore.nowPage.firstEvent === 0) {
    pptStore.nowPage.firstEvent = Date.now();
  }
}
Vue.prototype.$postData = function(){
  pptStore.postData = true;
}