// CORE
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

// PWA
import './registerServiceWorker'
// AUTH
import { firebaseConfig } from '../src/shared/core/auth/firebase-config';

Vue.config.productionTip = false

let app: any;

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
});
