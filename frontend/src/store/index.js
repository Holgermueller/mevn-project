import Vue from "vue";
import Vuex from "vuex";

import User from "./user";
import Goals from "./goals";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    User,
    Goals,
  },
});
