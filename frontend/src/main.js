import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import AlertComponent from "./components/shared/Alert.vue";

Vue.config.productionTip = false;

Vue.component("app-alert", AlertComponent);

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
