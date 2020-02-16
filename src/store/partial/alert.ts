const state = {
    alert: {
      isShow: false,
      text: '',
    },
  };
  
  const getters = {
    getIsAlert (state: any) {
      return state.alert;
    }
  };
  
  const mutations = {
    setIsAlert (state: any, data: any) {
      state.alert = data;
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
  