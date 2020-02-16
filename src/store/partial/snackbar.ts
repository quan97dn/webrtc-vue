const state = {
  snackbar: {
    isShow: false,
    text: '',
  },
};

const getters = {
  getIsSnackbar (state: any) {
    return state.snackbar;
  }
};

const mutations = {
  setIsSnackbar (state: any, data: any) {
    state.snackbar = data;
  }
};

const actions = {
  //
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
