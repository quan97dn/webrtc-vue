import Vue from 'vue';
import Vuex from 'vuex';

import Admin from './admin/index';

import Auth from './auth/index';

import Snackbar from './partial/snackbar';

import Alert from './partial/alert';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Admin,
    Auth,
    Snackbar,
    Alert,
  }
})
