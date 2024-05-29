import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import action from './action';
import getters from './getters';
import mutations from './mutations';
import state from './state';

const store = new Vuex.Store({
  state,
  action,
  mutations,
  getters
});

export default store;
