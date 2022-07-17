import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import AlertComponent from "./components/shared/Alert.vue";
import VueToastify from "vue-toastify";

Vue.config.productionTip = false;

Vue.use(VueToastify);

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
