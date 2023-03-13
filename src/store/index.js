import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import runningCondition from "./modules/runningCondition/index";

export default new Vuex.Store({
  modules: {
    condition: runningCondition,
  },
  state: {},
  mutations: {},
  actions: {},
});
