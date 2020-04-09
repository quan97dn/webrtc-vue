import firebase from 'firebase';

const state = {
  currentUser: {},
  isLogined: false,
};

const getters = {
  getCurrentUser(state: any) {
    return state.currentUser;
  },
  getIsLogined(state: any) {
    return state.isLogined;
  },
};

const mutations = {
  setCurrentUser(state: any, data: any) {
    state.currentUser = data;
  },
  setLogined(state: any, data: any) {
    state.isLogined = data;
  },
};

const actions = {
  getCurrentUser({commit}: any) {
    const user = firebase.auth().currentUser;
    commit('setCurrentUser', user);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
