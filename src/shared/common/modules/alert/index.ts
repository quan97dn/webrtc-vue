import store from '@/store/index';

import { TypeAlert } from '@/shared/common/interfaces/interface-alert';

const defaultAlert: TypeAlert = {
  text: `I'm a success alert.`,
  type: 'success',
};

let timerHide: any;

export const Alert = {
  open (data?: TypeAlert) {
    const settings = Object.assign(defaultAlert, data);
    store.commit('Alert/setIsAlert', { isShow: true, ...settings });
    Alert.timeOutHide();
  },
  close () {
    store.commit('Alert/setIsAlert', { isShow: false });
  },
  listening (callback: (newValue: any, oldValue: any) => any) {
    store.watch(() => store.getters['Alert/getIsAlert'], (newValue, oldValue) => {
      callback(newValue, oldValue);
    })
  },
  timeOutHide () {
		if (timerHide) {
			clearTimeout(timerHide);
		}
    timerHide = setTimeout(() => {
			Alert.close();
    }, 2000);
  }
}
