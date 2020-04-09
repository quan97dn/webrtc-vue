const state = {
  modalVisible: false,
  modalComponent: null,
};

const getters = {
  //
};

const mutations = {
  showModal(state: any, componentName: any) {
    state.modalVisible = true;
    state.modalComponent = componentName;
  },
  hideModal(state: any) {
    state.modalVisible = false;
  },
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
