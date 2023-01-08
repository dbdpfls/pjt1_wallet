import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';
import createPersistedState from "vuex-persistedstate";
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  plugins: [createPersistedState()],
});

export default store;