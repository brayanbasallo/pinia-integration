import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia, PiniaVuePlugin } from "pinia"; //import pinia

Vue.use(PiniaVuePlugin); //use pinia
Vue.config.productionTip = false;

const pinia = createPinia(); //create pinia

new Vue({
  router,
  render: (h) => h(App),
  pinia, //add pinia to vue
}).$mount("#app");
