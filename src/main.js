import Vue from "vue";
import App from "./App.vue";
import PanelG from "./components/PanelG.vue";
Vue.config.productionTip = false;
Vue.component("PanelG", PanelG);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
