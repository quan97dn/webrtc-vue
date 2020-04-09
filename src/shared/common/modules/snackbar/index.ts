import store from '@/store/index';

import { TypeSnackbar } from '@/shared/common/interfaces/interface-snackbar';

const defaultSnackbar: TypeSnackbar = {
  text: 'It is a snackbar!',
};

export const Snackbar = {
  open (data?: TypeSnackbar) {
    const settings = Object.assign(defaultSnackbar, data);
    store.commit('Snackbar/setIsSnackbar', { isShow: true, ...settings });
  },
  close () {
    store.commit('Snackbar/setIsSnackbar', { isShow: false });
  },
  listening (callback: (newValue: any, oldValue: any) => any) {
    store.watch(() => store.getters['Snackbar/getIsSnackbar'], (newValue, oldValue) => {
      callback(newValue, oldValue);
    })
  } 
}
